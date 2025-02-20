import express, { Request, Response } from 'express';
import { User, Movie, Review } from '../../models/index.js';

const router = express.Router();

// Add a movie to a user's interested list (i.e. watchlist)
export const interestedPost = async (req: Request, res: Response) => {
  try {
    const { UserID: userID, MovieID: movieID } = req.body;
    if (!userID || !movieID) {
      return res.status(400).json({ error: 'Missing UserID or MovieID' });
    }

    const user = await User.findByPk(userID);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Append the movieID to the watchlist array if it doesn't already exist
    const currentWatchlist = (user as any).watchlist || [];
    if (currentWatchlist.includes(movieID)) {
      return res.status(400).json({ error: 'Movie already in watchlist' });
    }
    currentWatchlist.push(movieID);
    await (user as any).update({ watchlist: currentWatchlist });

    return res.status(200).json({
      message: 'Movie added to interested list',
      watchlist: currentWatchlist
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

// Add a movie to a user's already_watched list
export const watchedPost = async (req: Request, res: Response) => {
  try {
    const { UserID: userID, MovieID: movieID } = req.body;
    if (!userID || !movieID) {
      return res.status(400).json({ error: 'Missing UserID or MovieID' });
    }

    const user = await User.findByPk(userID);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Append the movieID to the already_watched array if not already present
    const currentWatched = (user as any).already_watched || [];
    if (currentWatched.includes(movieID)) {
      return res.status(400).json({ error: 'Movie already marked as watched' });
    }
    currentWatched.push(movieID);
    await (user as any).update({ already_watched: currentWatched });

    return res.status(200).json({
      message: 'Movie added to watched list',
      already_watched: currentWatched
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

// Save a review for a movie into the review table
export const reviewPost = async (req: Request, res: Response) => {
  try {
    const { UserID: userID, MovieID: movieID, Review: reviewText } = req.body;
    if (!userID || !movieID || !reviewText) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Verify that both the user and movie exist
    const user = await User.findByPk(userID);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const movie = await Movie.findByPk(movieID);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    // Check if a review exists for this user and movie; update or create accordingly
    let reviewRecord = await Review.findOne({
      where: { user_id: userID, movie_id: movieID }
    });
    if (reviewRecord) {
      await reviewRecord.update({ review: reviewText });
    } else {
      reviewRecord = await Review.create({
        user_id: userID,
        movie_id: movieID,
        review: reviewText
      });
    }

    return res.status(200).json({
      message: 'Review saved',
      review: reviewRecord
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

// Fetch all reviews for a given movie
export const reviewFetch = async (req: Request, res: Response) => {
  try {
    const { MovieID: movieID } = req.body;
    if (!movieID) {
      return res.status(400).json({ error: 'Missing MovieID' });
    }

    // Fetch reviews and include the reviewing user's info
    const reviews = await Review.findAll({
      where: { movie_id: movieID },
      include: [{
        model: User,
        attributes: ['id', 'username']
      }]
    });
    return res.status(200).json({ reviews });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

// Fetch all reviews (or library entries) for a given user, including movie details
export const libraryFetch = async (req: Request, res: Response) => {
  try {
    const { UserID: userID } = req.body;
    if (!userID) {
      return res.status(400).json({ error: 'Missing UserID' });
    }

    // Fetch all review records for the user with associated movie details
    const library = await Review.findAll({
      where: { user_id: userID },
      include: [{
        model: Movie
      }]
    });
    return res.status(200).json({ library });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

// Route definitions
router.post('/interested', interestedPost);
router.post('/watched', watchedPost);
router.post('/review', reviewPost);
router.post('/fetchreviews', reviewFetch);
router.post('/fetchLibrary', libraryFetch);

export { router as dbRouter };

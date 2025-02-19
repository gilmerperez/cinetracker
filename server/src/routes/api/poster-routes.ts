import express, { Request, Response } from 'express';

const router = express.Router();

export const movieFetch = async (req: Request, res: Response) => {

    let year! : string;
    let genre! : string;

    try {
        year = req.query.year as string;
    }
    catch (err) {
        year = '0';
    }

    try {
        genre = req.query.genre as string;
    }
    catch (err) {
        genre = '0';
    }

    const base_url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc`;
    const year_url = `&primary_release_year=${year}`;
    const genre_url = `&with_genres=${genre}`;
    if(year === '0'){
        if(genre === '0'){
            const response = await fetch(base_url);
            const data = await response.json();
            res.json(data);
        }
        else{
            const response = await fetch(base_url + genre_url);
            const data = await response.json();
            res.json(data);
        }
    }
    else{
        if(genre === '0'){
            const response = await fetch(base_url + year_url);
            const data = await response.json();
            res.json(data);
        }
        else{
            const response = await fetch(base_url + year_url + genre_url);
            const data = await response.json();
            res.json(data);
        }
    }
    console.log(res);
    return res;
};

export { router as posterRouter };
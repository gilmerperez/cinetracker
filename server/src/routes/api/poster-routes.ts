import express, { Request, Response } from 'express';

const router = express.Router();

export const movieFetch = async (req: Request, res: Response) => {
    const api_key = process.env.TMDB_API_KEY;
    
    let year! : string;
    let genre! : string;

    try {
        year = req.body.Year as string;
    }
    catch (err) {
    }

    try {
        genre = req.body.Genre as string;
    }
    catch (err) {
    }

    const base_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US`;
    const base_end_url = `&sort_by=popularity.desc`;
    const year_url = `&primary_release_year=${year}`;
    const genre_url = `&with_genres=${genre}`;
    if(year){
        if(genre){
            const response = await fetch(base_url + year_url + base_end_url + genre_url);
            const data = await response.json();
            res.json(data);
        }
        else{
            const response = await fetch(base_url + year_url + base_end_url);
            const data = await response.json();
            res.json(data);
        }
    }
    else{
        if(genre){
            const response = await fetch(base_url + base_end_url + genre_url);
            const data = await response.json();
            res.json(data);
        }
        else{
            const response = await fetch(base_url + base_end_url);
            const data = await response.json();
            res.json(data);
        }
    }
    
    return res;
};

export const tvFetch = async (req: Request, res: Response) => {
    const api_key = process.env.TMDB_API_KEY;
    
    let year! : string;
    let genre! : string;

    try {
        year = req.body.Year as string;
    }
    catch (err) {
    }

    try {
        genre = req.body.Genre as string;
    }
    catch (err) {
    }

    const base_url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US`;
    const base_end_url = `&sort_by=popularity.desc`;
    const year_url = `&primary_release_year=${year}`;
    const genre_url = `&with_genres=${genre}`;
    if(year){
        if(genre){
            const response = await fetch(base_url + year_url + base_end_url + genre_url);
            const data = await response.json();
            res.json(data);
        }
        else{
            const response = await fetch(base_url + year_url + base_end_url);
            const data = await response.json();
            res.json(data);
        }
    }
    else{
        if(genre){
            const response = await fetch(base_url + base_end_url + genre_url);
            const data = await response.json();
            res.json(data);
        }
        else{
            const response = await fetch(base_url + base_end_url);
            const data = await response.json();
            res.json(data);
        }
    }
    
    return res;
};


router.post('/movie', movieFetch);
router.post('/tv', tvFetch);

export { router as posterRouter };
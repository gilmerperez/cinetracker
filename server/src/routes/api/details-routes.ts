import express, { Request, Response } from 'express';

const router = express.Router();

export const detailsFetch = async (req: Request, res: Response) => {
    console.log(req.body);
    return res;
};

router.post('/details', detailsFetch);

export { router as posterRouter };
import { Router } from 'express';
import { posterRouter } from './poster-routes.js';

const router = Router();

router.use('/posters', posterRouter);

export default router;

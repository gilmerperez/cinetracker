import { Router } from 'express';
import { dbRouter } from './db-routes.js';
import { posterRouter } from './poster-routes.js';
import { detailsRouter } from './details-routes.js';

// Create a new router instance
const router = Router();

router.use('/posters', posterRouter);
router.use('/details', detailsRouter);
router.use('/db', dbRouter);

export default router;

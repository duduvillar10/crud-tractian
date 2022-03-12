import { Router } from 'express';
import { assetsRoutes } from './assets.routes';
import { unitsRoutes } from './units.routes';
const router = Router();

router.use('/assets', assetsRoutes);
router.use('/units', unitsRoutes);

export { router };

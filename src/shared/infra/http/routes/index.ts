import { Router } from 'express';
import { assetsRoutes } from './assets.routes';
import { companiesRoutes } from './companies.routes';
import { unitsRoutes } from './units.routes';
import { usersRoutes } from './users.routes';
const router = Router();

router.use('/assets', assetsRoutes);
router.use('/units', unitsRoutes);
router.use('/companies', companiesRoutes);
router.use('/users', usersRoutes);

export { router };

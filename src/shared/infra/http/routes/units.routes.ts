import { Router } from 'express';
import { CreateUnitController } from '../../../../modules/units/useCases/createUnit/CreateUnitController';

const unitsRoutes = Router();

const createUnitController = new CreateUnitController();

unitsRoutes.post('/', createUnitController.handle);

export { unitsRoutes };

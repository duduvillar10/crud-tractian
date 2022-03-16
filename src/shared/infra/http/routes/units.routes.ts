import { Router } from 'express';
import { CreateUnitController } from '../../../../modules/units/useCases/createUnit/CreateUnitController';
import { DeleteUnitController } from '../../../../modules/units/useCases/deleteUnit/DeleteUnitController';
import { ListUnitsController } from '../../../../modules/units/useCases/listUnits/ListUnitsController';
import { UpdateUnitController } from '../../../../modules/units/useCases/updateUnit/UpdateUnitController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const unitsRoutes = Router();

const createUnitController = new CreateUnitController();
const listUnitsController = new ListUnitsController();
const updateUnitController = new UpdateUnitController();
const deleteUnitController = new DeleteUnitController();

unitsRoutes.use(ensureAuthenticated);

unitsRoutes.post('/', createUnitController.handle);

unitsRoutes.get('/', listUnitsController.handle);

unitsRoutes.put('/:id', updateUnitController.handle);

unitsRoutes.delete('/:id', deleteUnitController.handle);

export { unitsRoutes };

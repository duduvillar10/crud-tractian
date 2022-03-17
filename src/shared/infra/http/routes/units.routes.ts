import { Router } from 'express';
import { CreateUnitController } from '../../../../modules/units/useCases/createUnit/CreateUnitController';
import { DeleteUnitController } from '../../../../modules/units/useCases/deleteUnit/DeleteUnitController';
import { ListUnitsController } from '../../../../modules/units/useCases/listUnits/ListUnitsController';
import { ListUnitsByCompanyController } from '../../../../modules/units/useCases/listUnitsByCompany/ListUnitsByCompanyController';
import { UpdateUnitController } from '../../../../modules/units/useCases/updateUnit/UpdateUnitController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { validateObjectId } from '../middlewares/validateObjectId';

const unitsRoutes = Router();

const createUnitController = new CreateUnitController();
const listUnitsController = new ListUnitsController();
const listUnitsByCompanyController = new ListUnitsByCompanyController();
const updateUnitController = new UpdateUnitController();
const deleteUnitController = new DeleteUnitController();

unitsRoutes.use(ensureAuthenticated);

unitsRoutes.get('/', listUnitsController.handle);

unitsRoutes.get(
  '/company/:id',
  validateObjectId,
  listUnitsByCompanyController.handle,
);

unitsRoutes.use(ensureAdmin);

unitsRoutes.post('/', createUnitController.handle);

unitsRoutes.put('/:id', validateObjectId, updateUnitController.handle);

unitsRoutes.delete('/:id', validateObjectId, deleteUnitController.handle);

export { unitsRoutes };

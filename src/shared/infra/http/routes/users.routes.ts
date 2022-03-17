import { Router } from 'express';
import { ListAssetsByUnitController } from '../../../../modules/assets/useCases/listAssetsByUnit/ListAssetsByUnitController';
import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController';
import { DeleteUserController } from '../../../../modules/users/useCases/deleteUser/DeleteUserController';
import { ListUsersByCompanyController } from '../../../../modules/users/useCases/listUsersByCompany/ListUsersByCompanyController';
import { UpdateUserController } from '../../../../modules/users/useCases/updateUser/UpdateUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { validateObjectId } from '../middlewares/validateObjectId';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const listUsersByCompanyController = new ListUsersByCompanyController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get(
  '/company/:id',
  validateObjectId,
  listUsersByCompanyController.handle,
);

usersRoutes.put('/', ensureAuthenticated, updateUserController.handle);

usersRoutes.delete('/', ensureAuthenticated, deleteUserController.handle);

export { usersRoutes };

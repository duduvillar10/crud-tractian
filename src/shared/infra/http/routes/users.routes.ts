import { Router } from 'express';
import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController';
import { DeleteUserController } from '../../../../modules/users/useCases/deleteUser/DeleteUserController';
import { UpdateUserController } from '../../../../modules/users/useCases/updateUser/UpdateUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.put('/', ensureAuthenticated, updateUserController.handle);

usersRoutes.delete('/', ensureAuthenticated, deleteUserController.handle);

export { usersRoutes };

import { Router } from 'express';
import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController';
import { UpdateUserController } from '../../../../modules/users/useCases/updateUser/UpdateUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.put('/', ensureAuthenticated, updateUserController.handle);

export { usersRoutes };

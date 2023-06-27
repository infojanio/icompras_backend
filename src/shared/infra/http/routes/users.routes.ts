import { CreateUserController } from '@modules/users/usesCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '@modules/users/usesCases/updateUserAvatar/UpdateUserAvatarController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { ListUsersController } from '@modules/users/usesCases/listUsers/ListUsersController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', listUsersController.handle); //não necessita estar logado

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export { usersRoutes };

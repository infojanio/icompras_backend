import { CreateUserController } from '@modules/users/usesCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '@modules/users/usesCases/updateUserAvatar/UpdateUserAvatarController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { ListUsersController } from '@modules/users/usesCases/listUsers/ListUsersController';
// /import { ProfileUserController } from "@modules/accounts/useCases/profileUserUseCase/ProfileUserController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
//const profileUserController = new ProfileUserController();

const listUsersController = new ListUsersController();

usersRoutes.get('/', listUsersController.handle); //não necessita estar logado

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

//usersRoutes.get("/profile", ensureAuthenticated, profileUserController.handle);

export { usersRoutes };

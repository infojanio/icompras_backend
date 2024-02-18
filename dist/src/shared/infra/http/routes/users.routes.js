"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
var CreateUserController_1 = require("@modules/users/usesCases/createUser/CreateUserController");
var UpdateUserAvatarController_1 = require("@modules/users/usesCases/updateUserAvatar/UpdateUserAvatarController");
var ensureAuthenticated_1 = require("@shared/infra/http/middlewares/ensureAuthenticated");
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("@config/upload"));
var ListUsersController_1 = require("@modules/users/usesCases/listUsers/ListUsersController");
// /import { ProfileUserController } from "@modules/accounts/useCases/profileUserUseCase/ProfileUserController";
var usersRoutes = express_1.Router();
exports.usersRoutes = usersRoutes;
var uploadAvatar = multer_1.default(upload_1.default.upload('./tmp/avatar'));
var createUserController = new CreateUserController_1.CreateUserController();
var updateUserAvatarController = new UpdateUserAvatarController_1.UpdateUserAvatarController();
//const profileUserController = new ProfileUserController();
var listUsersController = new ListUsersController_1.ListUsersController();
usersRoutes.get('/', listUsersController.handle); //não necessita estar logado
usersRoutes.post('/', createUserController.handle);
usersRoutes.patch('/avatar', ensureAuthenticated_1.ensureAuthenticated, uploadAvatar.single('avatar'), updateUserAvatarController.handle);

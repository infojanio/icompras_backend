import { CreateStoreController } from '@modules/store/usesCases/createStore/CreateStoreController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

const storesRoutes = Router();

const createStoreController = new CreateStoreController();

storesRoutes.post('/', createStoreController.handle);

export { storesRoutes };

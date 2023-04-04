import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateCarController } from '@modules/products/useCases/createCar/CreateCarController';
import { CreateCarSpecificationController } from '@modules/products/useCases/createCarSpecification/CreateCarSpecificationController';
import { ListAvailableController } from '@modules/products/useCases/lisAvailableCars/ListAvailableController';
import { UploadCarImagesController } from '@modules/products/useCases/uploadCarImages/UploadCarImagesController';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableController = new ListAvailableController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload('./tmp/cars'));

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get('/available', listAvailableController.handle);

carsRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle,
);

carsRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  ensureAdmin,
  upload.array('images'),
  uploadCarImagesController.handle,
);

export { carsRoutes };

import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateProductController } from '@modules/products/useCases/createProduct/CreateProductController';
import { CreateProductSpecificationController } from '@modules/products/useCases/createProductSpecification/CreateProductSpecificationController';
import { ListAvailableController } from '@modules/products/useCases/lisAvailableProducts/ListAvailableController';
import { UploadProductImagesController } from '@modules/products/useCases/uploadProductImages/UploadProductImagesController';

const productsRoutes = Router();

const createProductController = new CreateProductController();
const listAvailableController = new ListAvailableController();
const createProductSpecificationController = new CreateProductSpecificationController();
const uploadProductImagesController = new UploadProductImagesController();

const upload = multer(uploadConfig.upload('./tmp/cars'));

productsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createProductController.handle,
);

productsRoutes.get('/available', listAvailableController.handle);

productsRoutes.get(
  '/products/:id',
  ensureAuthenticated,
  createProductSpecificationController.handle,
);

productsRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createProductSpecificationController.handle,
);

productsRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  ensureAdmin,
  upload.array('images'),
  uploadProductImagesController.handle,
);

export { productsRoutes };

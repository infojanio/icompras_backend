import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateProductController } from '@modules/products/useCases/createProduct/CreateProductController';
import { CreateProductSpecificationController } from '@modules/products/useCases/createProductSpecification/CreateProductSpecificationController';
import { ListAvailableProductsController } from '@modules/products/useCases/listAvailableProducts/ListAvailableProductsController';
import { UploadProductImagesController } from '@modules/products/useCases/uploadProductImages/UploadProductImagesController';
import { ListProductsController } from '@modules/products/useCases/listProducts/ListProductsController';
import { ListBySubCategoryProductsController } from '@modules/products/useCases/listBySubCategoryProducts/ListBySubCategoryProductsController';

const productsRoutes = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();

const listBySubCategoryProductsController = new ListBySubCategoryProductsController();
const listAvailableProductsController = new ListAvailableProductsController();
const createProductSpecificationController = new CreateProductSpecificationController();
const uploadProductImagesController = new UploadProductImagesController();

const upload = multer(uploadConfig.upload('./tmp/products'));

productsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createProductController.handle,
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

productsRoutes.get('/', listProductsController.handle); //products

/*
productsRoutes.get(
  '/:id',
  //  ensureAuthenticated,
  listProductController.handle,
);
*/

productsRoutes.get('/subcategory', listBySubCategoryProductsController.handle); //products

productsRoutes.get('/available', listAvailableProductsController.handle);

productsRoutes.get(
  '/products/:id',
  ensureAuthenticated,
  createProductSpecificationController.handle,
);

export { productsRoutes };

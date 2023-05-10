import { Router } from 'express';
import multer from 'multer';
import { CreateSubCategoryController } from '@modules/products/useCases/createSubCategory/CreateSubCategoryController';
import { ImportSubCategoryController } from '@modules/products/useCases/importSubCategory/ImportSubCategoryController';
import { ListSubCategoriesController } from '@modules/products/useCases/listSubCategories/ListSubCategoriesController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';

const subcategoriesRoutes = Router();

const uploads = multer({
  dest: './tmp',
});

const createSubCategoryController = new CreateSubCategoryController();
const importSubCategoryController = new ImportSubCategoryController();
const listSubCategoriesController = new ListSubCategoriesController();

subcategoriesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createSubCategoryController.handle,
);

subcategoriesRoutes.get('/', listSubCategoriesController.handle);

//rota de importação p/ uploads de arquivos
subcategoriesRoutes.post(
  '/import',
  uploads.single('file'),
  ensureAuthenticated,
  ensureAdmin,
  importSubCategoryController.handle,
);

export { subcategoriesRoutes };

import { Router } from 'express';
import multer from 'multer';
import { CreateCategoryController } from '@modules/products/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '@modules/products/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '@modules/products/useCases/listCategories/ListCategoriesController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';

const categoriesRoutes = Router();

const uploads = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle,
);

categoriesRoutes.get('/', listCategoriesController.handle);

//rota de importação p/ uploads de arquivos
categoriesRoutes.post(
  '/import',
  uploads.single('file'),
  ensureAuthenticated,
  ensureAdmin,
  importCategoryController.handle,
);

export { categoriesRoutes };

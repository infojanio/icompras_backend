"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var CreateCategoryController_1 = require("@modules/products/useCases/createCategory/CreateCategoryController");
var ImportCategoryController_1 = require("@modules/products/useCases/importCategory/ImportCategoryController");
var ListCategoriesController_1 = require("@modules/products/useCases/listCategories/ListCategoriesController");
var ensureAuthenticated_1 = require("@shared/infra/http/middlewares/ensureAuthenticated");
var ensureAdmin_1 = require("@shared/infra/http/middlewares/ensureAdmin");
var ListByIdCategoriesController_1 = require("@modules/products/useCases/listByIdCategories/ListByIdCategoriesController");
var ListByCompanyCategoriesController_1 = require("@modules/products/useCases/listByCompanyCategories/ListByCompanyCategoriesController");
var categoriesRoutes = express_1.Router();
exports.categoriesRoutes = categoriesRoutes;
var uploads = multer_1.default({
    dest: './tmp',
});
var createCategoryController = new CreateCategoryController_1.CreateCategoryController();
var importCategoryController = new ImportCategoryController_1.ImportCategoryController();
var listCategoriesController = new ListCategoriesController_1.ListCategoriesController();
var listByIdCategoriesController = new ListByIdCategoriesController_1.ListByIdCategoriesController();
var listByCompanyCategoriesController = new ListByCompanyCategoriesController_1.ListByCompanyCategoriesController();
categoriesRoutes.post('/', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createCategoryController.handle);
categoriesRoutes.get('/', listCategoriesController.handle);
//rota de importação p/ uploads de arquivos
categoriesRoutes.post('/import', uploads.single('file'), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, importCategoryController.handle);
categoriesRoutes.get('/:id', listByIdCategoriesController.handle);
categoriesRoutes.get('/company', listByCompanyCategoriesController.handle);

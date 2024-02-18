"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subcategoriesRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var CreateSubCategoryController_1 = require("@modules/products/useCases/createSubCategory/CreateSubCategoryController");
var ImportSubCategoryController_1 = require("@modules/products/useCases/importSubCategory/ImportSubCategoryController");
var ListSubCategoriesController_1 = require("@modules/products/useCases/listSubCategories/ListSubCategoriesController");
var ensureAuthenticated_1 = require("@shared/infra/http/middlewares/ensureAuthenticated");
var ensureAdmin_1 = require("@shared/infra/http/middlewares/ensureAdmin");
var ListByCategorySubCategoriesController_1 = require("@modules/products/useCases/listByCategorySubCategories/ListByCategorySubCategoriesController");
var subcategoriesRoutes = express_1.Router();
exports.subcategoriesRoutes = subcategoriesRoutes;
var uploads = multer_1.default({
    dest: './tmp',
});
var createSubCategoryController = new CreateSubCategoryController_1.CreateSubCategoryController();
var importSubCategoryController = new ImportSubCategoryController_1.ImportSubCategoryController();
var listSubCategoriesController = new ListSubCategoriesController_1.ListSubCategoriesController();
var listByCategorySubCategoriesController = new ListByCategorySubCategoriesController_1.ListByCategorySubCategoriesController();
subcategoriesRoutes.post('/', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createSubCategoryController.handle);
subcategoriesRoutes.get('/', listSubCategoriesController.handle);
subcategoriesRoutes.get('/category', listByCategorySubCategoriesController.handle);
//rota de importação p/ uploads de arquivos
subcategoriesRoutes.post('/import', uploads.single('file'), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, importSubCategoryController.handle);

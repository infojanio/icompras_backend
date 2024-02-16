"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companiesRoutes = void 0;
var CreateCompanyController_1 = require("@modules/companies/usesCases/createCompany/CreateCompanyController");
var CreateCompanyCategoryController_1 = require("@modules/companies/usesCases/createCompanyCategory/CreateCompanyCategoryController");
var ensureAuthenticated_1 = require("@shared/infra/http/middlewares/ensureAuthenticated");
var express_1 = require("express");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ListCompaniesController_1 = require("@modules/companies/usesCases/listCompanies/ListCompaniesController");
var ListByIdCompaniesController_1 = require("@modules/companies/usesCases/listByIdCompanies/ListByIdCompaniesController");
var ListByTenantCompaniesController_1 = require("@modules/companies/usesCases/listByTenantCompanies/ListByTenantCompaniesController");
var companiesRoutes = express_1.Router();
exports.companiesRoutes = companiesRoutes;
var createCompanyController = new CreateCompanyController_1.CreateCompanyController();
var createCompanyCategoryController = new CreateCompanyCategoryController_1.CreateCompanyCategoryController();
var listCompaniesController = new ListCompaniesController_1.ListCompaniesController();
var listByIdCompaniesController = new ListByIdCompaniesController_1.ListByIdCompaniesController();
var listByTenantCompaniesController = new ListByTenantCompaniesController_1.ListByTenantCompaniesController();
companiesRoutes.post('/', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createCompanyController.handle);
//companiesRoutes.get('/:id', listByIdCompaniesController.handle);
companiesRoutes.get('/tenant', listByTenantCompaniesController.handle);
//cadastra categorias de cada empresa
companiesRoutes.post('/categories/:id', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createCompanyCategoryController.handle);
/*
companiesRoutes.get(
  '/companies/:id',
  ensureAuthenticated,
  listCompanyCategoryController.handle,
);
*/
companiesRoutes.get('/', listCompaniesController.handle); //não necessita estar logado

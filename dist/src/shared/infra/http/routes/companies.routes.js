"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companiesRoutes = void 0;
var CreateCompanyController_1 = require("@modules/companies/usesCases/createCompany/CreateCompanyController");
var ensureAuthenticated_1 = require("@shared/infra/http/middlewares/ensureAuthenticated");
var express_1 = require("express");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ListCompaniesController_1 = require("@modules/companies/usesCases/listCompanies/ListCompaniesController");
var companiesRoutes = express_1.Router();
exports.companiesRoutes = companiesRoutes;
var createCompanyController = new CreateCompanyController_1.CreateCompanyController();
var listCompaniesController = new ListCompaniesController_1.ListCompaniesController();
companiesRoutes.post('/', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createCompanyController.handle);
companiesRoutes.get('/', listCompaniesController.handle); //não necessita estar logado

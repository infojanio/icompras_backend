"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenantsRoutes = void 0;
var CreateTenantController_1 = require("@modules/tenants/usesCases/createTenant/CreateTenantController");
var ensureAuthenticated_1 = require("@shared/infra/http/middlewares/ensureAuthenticated");
var express_1 = require("express");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ListTenantsController_1 = require("@modules/tenants/usesCases/listTenants/ListTenantsController");
var ListByCityTenantsController_1 = require("@modules/tenants/usesCases/listByCityTenants/ListByCityTenantsController");
var ListByIdTenantsController_1 = require("@modules/tenants/usesCases/listByIdTenants/ListByIdTenantsController");
var tenantsRoutes = express_1.Router();
exports.tenantsRoutes = tenantsRoutes;
var createTenantController = new CreateTenantController_1.CreateTenantController();
var listTenantsController = new ListTenantsController_1.ListTenantsController();
var listByIdTenantsController = new ListByIdTenantsController_1.ListByIdTenantsController();
var listByCityTenantsController = new ListByCityTenantsController_1.ListByCityTenantsController();
tenantsRoutes.post('/', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createTenantController.handle);
tenantsRoutes.get('/', listTenantsController.handle); //não necessita estar logado
//tenantsRoutes.get('/:id', listByIdTenantsController.handle);
tenantsRoutes.get('/city', listByCityTenantsController.handle);

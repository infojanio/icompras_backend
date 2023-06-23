"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenantsRoutes = void 0;
var CreateTenantController_1 = require("@modules/tenants/usesCases/createTenant/CreateTenantController");
var ensureAuthenticated_1 = require("@shared/infra/http/middlewares/ensureAuthenticated");
var express_1 = require("express");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ListTenantsController_1 = require("@modules/tenants/usesCases/listTenants/ListTenantsController");
var tenantsRoutes = express_1.Router();
exports.tenantsRoutes = tenantsRoutes;
var createTenantController = new CreateTenantController_1.CreateTenantController();
var listTenantsController = new ListTenantsController_1.ListTenantsController();
tenantsRoutes.post('/', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createTenantController.handle);
tenantsRoutes.get('/', listTenantsController.handle); //não necessita estar logado

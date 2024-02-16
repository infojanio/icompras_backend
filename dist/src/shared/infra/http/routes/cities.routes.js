"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.citiesRoutes = void 0;
var CreateCityController_1 = require("@modules/cities/usesCases/createCity/CreateCityController");
var ensureAuthenticated_1 = require("@shared/infra/http/middlewares/ensureAuthenticated");
var express_1 = require("express");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ListCitiesController_1 = require("@modules/cities/usesCases/listCities/ListCitiesController");
var ListByIdCitiesController_1 = require("@modules/cities/usesCases/listByIdCities/ListByIdCitiesController");
var citiesRoutes = express_1.Router();
exports.citiesRoutes = citiesRoutes;
var createCityController = new CreateCityController_1.CreateCityController();
var listCitiesController = new ListCitiesController_1.ListCitiesController();
var listByIdCitiesController = new ListByIdCitiesController_1.ListByIdCitiesController();
citiesRoutes.post('/', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createCityController.handle);
citiesRoutes.get('/', listCitiesController.handle); //não necessita estar logado
citiesRoutes.get('/:id', listByIdCitiesController.handle);

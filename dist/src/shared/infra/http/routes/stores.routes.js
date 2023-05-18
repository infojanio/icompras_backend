"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesRoutes = void 0;
var CreateStoreController_1 = require("@modules/store/usesCases/createStore/CreateStoreController");
var express_1 = require("express");
var storesRoutes = express_1.Router();
exports.storesRoutes = storesRoutes;
var createStoreController = new CreateStoreController_1.CreateStoreController();
storesRoutes.post('/', createStoreController.handle);

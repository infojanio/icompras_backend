"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepositoryInMemory = void 0;
var Product_1 = require("@modules/products/infra/typeorm/entities/Product");
var ProductsRepositoryInMemory = /** @class */ (function () {
    function ProductsRepositoryInMemory() {
        this.products = [];
    }
    ProductsRepositoryInMemory.prototype.create = function (_a) {
        var name = _a.name, price = _a.price, quantity = _a.quantity, available = _a.available, subcategory_id = _a.subcategory_id, company_id = _a.company_id, tenant_id = _a.tenant_id;
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_b) {
                product = new Product_1.Product();
                Object.assign(product, {
                    name: name,
                    price: price,
                    quantity: quantity,
                    available: available,
                    subcategory_id: subcategory_id,
                    company_id: company_id,
                    tenant_id: tenant_id,
                });
                this.products.push(product);
                console.log(product);
                return [2 /*return*/, product];
            });
        });
    };
    ProductsRepositoryInMemory.prototype.findBySubCategory = function (subcategory_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.products.find(function (product) { return product.subcategory_id === subcategory_id; })];
            });
        });
    };
    ProductsRepositoryInMemory.prototype.findByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.products.find(function (product) { return product.name === name; })];
            });
        });
    };
    ProductsRepositoryInMemory.prototype.findAvailable = function (subcategory_id, name) {
        return __awaiter(this, void 0, void 0, function () {
            var Allproducts;
            return __generator(this, function (_a) {
                Allproducts = this.products.filter(function (product) {
                    if (product.available === true || //todos carros disponíveis
                        (subcategory_id && product.subcategory_id === subcategory_id) || //productros disponíveis pelo nome da subcategoria.
                        (name && product.name === name) //productros disponíveis pelo nome
                    ) {
                        return product;
                    }
                    return null;
                });
                return [2 /*return*/, Allproducts];
            });
        });
    };
    ProductsRepositoryInMemory.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.products.find(function (product) { return product.id === id; })];
            });
        });
    };
    ProductsRepositoryInMemory.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var all;
            return __generator(this, function (_a) {
                all = this.products;
                return [2 /*return*/, all];
            });
        });
    };
    //atualizar status do productro após ser reservado ou devolvido
    ProductsRepositoryInMemory.prototype.updateAvailable = function (id, available) {
        return __awaiter(this, void 0, void 0, function () {
            var findIndex;
            return __generator(this, function (_a) {
                findIndex = this.products.findIndex(function (product) { return product.id === id; });
                this.products[findIndex].available = available;
                return [2 /*return*/];
            });
        });
    };
    return ProductsRepositoryInMemory;
}());
exports.ProductsRepositoryInMemory = ProductsRepositoryInMemory;

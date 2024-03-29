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
exports.ProductsRepository = void 0;
var typeorm_1 = require("typeorm");
var Product_1 = require("../entities/Product");
var ProductsRepository = /** @class */ (function () {
    function ProductsRepository() {
        this.repository = typeorm_1.getRepository(Product_1.Product);
    }
    //Deve ser possível cadastrar um novo Productro
    ProductsRepository.prototype.create = function (_a) {
        var name = _a.name, price = _a.price, quantity = _a.quantity, available = _a.available, subcategory_id = _a.subcategory_id, company_id = _a.company_id, tenant_id = _a.tenant_id, image = _a.image;
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        product = this.repository.create({
                            name: name,
                            price: price,
                            quantity: quantity,
                            available: available,
                            subcategory_id: subcategory_id,
                            company_id: company_id,
                            tenant_id: tenant_id,
                            image: image,
                        });
                        return [4 /*yield*/, this.repository.save(product)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, product];
                }
            });
        });
    };
    //Encontrar por subcategoria
    ProductsRepository.prototype.findBySubCategory = function (subcategory_id) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ where: subcategory_id })];
                    case 1:
                        product = _a.sent();
                        return [2 /*return*/, product];
                }
            });
        });
    };
    ProductsRepository.prototype.findByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ name: name })];
                    case 1:
                        product = _a.sent();
                        return [2 /*return*/, product];
                }
            });
        });
    };
    ProductsRepository.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find()];
                    case 1:
                        products = _a.sent();
                        return [2 /*return*/, products];
                }
            });
        });
    };
    ProductsRepository.prototype.listById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var productsQuery, products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder('product')
                            .where('product.id = :id', { id: id })];
                    case 1:
                        productsQuery = _a.sent();
                        return [4 /*yield*/, productsQuery.getOneOrFail()];
                    case 2:
                        products = _a.sent();
                        return [2 /*return*/, products];
                }
            });
        });
    };
    //ATENÇÃO: O método findAvailable retorna o filtro no console.log, mas não retorna no Insominia
    ProductsRepository.prototype.listBySubCategory = function (name, subcategory_id) {
        return __awaiter(this, void 0, void 0, function () {
            var productsQuery, products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder('product')
                            .leftJoinAndSelect('product.subcategory', 'subcategory')
                            .where('subcategory.name = :subcategory_id', { subcategory_id: subcategory_id })];
                    case 1:
                        productsQuery = _a.sent();
                        return [4 /*yield*/, productsQuery.getMany()];
                    case 2:
                        products = _a.sent();
                        return [2 /*return*/, products];
                }
            });
        });
    };
    // Encontra todos os produtos disponíveis
    ProductsRepository.prototype.findAvailable = function (name, subcategory_id) {
        return __awaiter(this, void 0, void 0, function () {
            var productsQuery, products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder('c')
                            .where('available = :available', { available: true })];
                    case 1:
                        productsQuery = _a.sent();
                        //busca produtos disponíveis pelo nome
                        if (name) {
                            productsQuery.andWhere('name = :name', { name: name });
                        }
                        //busca produtos disponíveis pela subcategoria
                        if (subcategory_id) {
                            productsQuery.andWhere('subcategory_id = :subcategory_id', {
                                subcategory_id: subcategory_id,
                            });
                        }
                        return [4 /*yield*/, productsQuery.getMany()];
                    case 2:
                        products = _a.sent();
                        // console.log(products); //No insominia não retorna os dados filtrados
                        return [2 /*return*/, products];
                }
            });
        });
    };
    ProductsRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne(id)];
                    case 1:
                        product = _a.sent();
                        return [2 /*return*/, product];
                }
            });
        });
    };
    ProductsRepository.prototype.updateAvailable = function (id, available) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder()
                            .update()
                            .set({ available: available })
                            .where('id = :id')
                            .setParameters({ id: id })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductsRepository;
}());
exports.ProductsRepository = ProductsRepository;

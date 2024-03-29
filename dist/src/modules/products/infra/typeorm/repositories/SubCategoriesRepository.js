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
exports.SubCategoriesRepository = void 0;
var typeorm_1 = require("typeorm");
var SubCategory_1 = require("../entities/SubCategory");
var SubCategoriesRepository = /** @class */ (function () {
    function SubCategoriesRepository() {
        this.repository = typeorm_1.getRepository(SubCategory_1.SubCategory);
    }
    SubCategoriesRepository.prototype.create = function (_a) {
        var name = _a.name, image = _a.image, category_id = _a.category_id, tenant_id = _a.tenant_id;
        return __awaiter(this, void 0, void 0, function () {
            var subcategory;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        subcategory = this.repository.create({
                            name: name,
                            image: image,
                            category_id: category_id,
                            tenant_id: tenant_id,
                        });
                        return [4 /*yield*/, this.repository.save(subcategory)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubCategoriesRepository.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var subcategories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find()];
                    case 1:
                        subcategories = _a.sent();
                        return [2 /*return*/, subcategories];
                }
            });
        });
    };
    SubCategoriesRepository.prototype.findByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var subcategory;
            return __generator(this, function (_a) {
                subcategory = this.repository.findOne({ name: name });
                return [2 /*return*/, subcategory];
            });
        });
    };
    //ATENÇÃO: O método findAvailable retorna o filtro no console.log, mas não retorna no Insominia
    SubCategoriesRepository.prototype.listBySubCategory = function (subcategory_id) {
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
    SubCategoriesRepository.prototype.listByCategory = function (id, 
    //name?: string,
    category_id) {
        return __awaiter(this, void 0, void 0, function () {
            var subcategoriesQuery, subcategories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder('subcategory')
                            .leftJoinAndSelect('subcategory.category', 'category')
                            .where('category.id = :category_id', { category_id: category_id })];
                    case 1:
                        subcategoriesQuery = _a.sent();
                        return [4 /*yield*/, subcategoriesQuery.getMany()];
                    case 2:
                        subcategories = _a.sent();
                        return [2 /*return*/, subcategories];
                }
            });
        });
    };
    return SubCategoriesRepository;
}());
exports.SubCategoriesRepository = SubCategoriesRepository;

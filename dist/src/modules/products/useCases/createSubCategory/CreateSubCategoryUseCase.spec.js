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
var AppError_1 = require("@shared/errors/AppError");
var SubCategoriesRepositoryInMemory_1 = require("@modules/products/repositories/in-memory/SubCategoriesRepositoryInMemory");
var CreateSubCategoryUseCase_1 = require("./CreateSubCategoryUseCase");
var createSubCategoryUseCase;
var subcategoriesRepositoryInMemory;
describe('Create SubCategory', function () {
    beforeEach(function () {
        subcategoriesRepositoryInMemory = new SubCategoriesRepositoryInMemory_1.SubCategoriesRepositoryInMemory();
        createSubCategoryUseCase = new CreateSubCategoryUseCase_1.CreateSubCategoryUseCase(subcategoriesRepositoryInMemory);
    });
    //1. Teste de criação de categoria
    it('should be able to create a new subcategory', function () { return __awaiter(void 0, void 0, void 0, function () {
        var subcategory, subcategoryCreated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    subcategory = {
                        name: 'SubCategory test',
                        image: 'image.png',
                        category_id: '24412214fdfdf2221',
                        tenant_id: '24412214fdfdf2421',
                    };
                    return [4 /*yield*/, createSubCategoryUseCase.execute({
                            name: subcategory.name,
                            image: subcategory.image,
                            category_id: subcategory.category_id,
                            tenant_id: subcategory.tenant_id,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, subcategoriesRepositoryInMemory.findByName(subcategory.name)];
                case 2:
                    subcategoryCreated = _a.sent();
                    //console.log(categoryCreated);
                    expect(subcategoryCreated).toHaveProperty('id');
                    return [2 /*return*/];
            }
        });
    }); });
    //2. Teste de verificação criação de categoria com nome já existente
    it('should not be able to create a new Subcategory with name exists', function () { return __awaiter(void 0, void 0, void 0, function () {
        var subcategory;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    subcategory = {
                        name: 'SubCategory test',
                        image: 'image.png',
                        category_id: '24412214fdfdf2221',
                        tenant_id: '24412214fdfdf2421',
                    };
                    //salva a primeira vez
                    return [4 /*yield*/, createSubCategoryUseCase.execute({
                            name: subcategory.name,
                            image: subcategory.image,
                            category_id: subcategory.category_id,
                            tenant_id: subcategory.tenant_id,
                        })];
                case 1:
                    //salva a primeira vez
                    _a.sent();
                    return [4 /*yield*/, expect(
                        //salva a segunda vez, duplicidade
                        createSubCategoryUseCase.execute({
                            name: subcategory.name,
                            image: subcategory.image,
                            category_id: subcategory.category_id,
                            tenant_id: subcategory.tenant_id,
                        })).rejects.toEqual(new AppError_1.AppError('SubCategory Already Exists!'))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});

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
exports.CompaniesRepository = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Company_1 = require("@modules/companies/infra/typeorm/entities/Company");
var CompaniesRepository = /** @class */ (function () {
    function CompaniesRepository() {
        this.repository = typeorm_1.getRepository(Company_1.Company);
    }
    CompaniesRepository.prototype.create = function (_a) {
        var name = _a.name, slug = _a.slug, email = _a.email, cnpj = _a.cnpj, logo = _a.logo, phone = _a.phone, isActive = _a.isActive, openinghours_id = _a.openinghours_id, tenant_id = _a.tenant_id, city_id = _a.city_id, categories = _a.categories, id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var company;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        company = this.repository.create({
                            name: name,
                            slug: slug,
                            email: email,
                            cnpj: cnpj,
                            logo: logo,
                            phone: phone,
                            isActive: isActive,
                            openinghours_id: openinghours_id,
                            tenant_id: tenant_id,
                            city_id: city_id,
                            categories: categories,
                            id: id,
                        });
                        return [4 /*yield*/, this.repository.save(company)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // método encontrar usuário por nome
    CompaniesRepository.prototype.findByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var company;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: { name: name },
                        })];
                    case 1:
                        company = _a.sent();
                        console.log(company);
                        return [2 /*return*/, company];
                }
            });
        });
    };
    // método encontrar usuário por email
    CompaniesRepository.prototype.findByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var company;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: { email: email },
                        })];
                    case 1:
                        company = _a.sent();
                        console.log(company);
                        return [2 /*return*/, company];
                }
            });
        });
    };
    CompaniesRepository.prototype.listByTenant = function (
    //  id: string,
    name, tenant_id) {
        return __awaiter(this, void 0, void 0, function () {
            var companiesQuery, companies, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!tenant_id || !uuid_1.validate(tenant_id)) {
                            throw new Error('O tenant_id é obrigatório para filtrar');
                        }
                        return [4 /*yield*/, this.repository
                                .createQueryBuilder('company')
                                .leftJoinAndSelect('company.tenant', 'tenant')
                                .where('tenant.id = :tenant_id', { tenant_id: tenant_id })];
                    case 1:
                        companiesQuery = _a.sent();
                        return [4 /*yield*/, companiesQuery.getMany()];
                    case 2:
                        companies = _a.sent();
                        return [2 /*return*/, companies];
                    case 3:
                        error_1 = _a.sent();
                        console.log('Erro no Tenant:', error_1.message);
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Encontra todos os produtos disponíveis
    CompaniesRepository.prototype.findAvailable = function (name, tenant_id) {
        return __awaiter(this, void 0, void 0, function () {
            var companiesQuery, companies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder('c')
                            .where('isActive = :isActive', { isActive: true })];
                    case 1:
                        companiesQuery = _a.sent();
                        //busca produtos disponíveis pela subcategoria
                        if (tenant_id) {
                            companiesQuery.andWhere('tenant_id = :tenant_id', {
                                tenant_id: tenant_id,
                            });
                        }
                        return [4 /*yield*/, companiesQuery.getMany()];
                    case 2:
                        companies = _a.sent();
                        // console.log(products); //No insominia não retorna os dados filtrados
                        return [2 /*return*/, companies];
                }
            });
        });
    };
    CompaniesRepository.prototype.listById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var companiesQuery, companies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder('company')
                            .where('company.id = :id', { id: id })];
                    case 1:
                        companiesQuery = _a.sent();
                        return [4 /*yield*/, companiesQuery.getOneOrFail()];
                    case 2:
                        companies = _a.sent();
                        return [2 /*return*/, companies];
                }
            });
        });
    };
    CompaniesRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var company;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne(id)];
                    case 1:
                        company = _a.sent();
                        return [2 /*return*/, company];
                }
            });
        });
    };
    CompaniesRepository.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var companies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find()];
                    case 1:
                        companies = _a.sent();
                        return [2 /*return*/, companies];
                }
            });
        });
    };
    return CompaniesRepository;
}());
exports.CompaniesRepository = CompaniesRepository;

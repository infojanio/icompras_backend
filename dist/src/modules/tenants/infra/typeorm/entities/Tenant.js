"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tenant = void 0;
var City_1 = require("@modules/cities/infra/typeorm/entities/City");
var Company_1 = require("@modules/companies/infra/typeorm/entities/Company");
var Category_1 = require("@modules/products/infra/typeorm/entities/Category");
var Product_1 = require("@modules/products/infra/typeorm/entities/Product");
var SubCategory_1 = require("@modules/products/infra/typeorm/entities/SubCategory");
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Tenant = /** @class */ (function () {
    function Tenant() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Tenant.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Tenant.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Tenant.prototype, "image", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Tenant.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return City_1.City; }),
        typeorm_1.JoinColumn({ name: 'city_id' }),
        __metadata("design:type", City_1.City)
    ], Tenant.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Tenant.prototype, "city_id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return SubCategory_1.SubCategory; }, function (subcategory) { return subcategory.tenant; }),
        __metadata("design:type", Array)
    ], Tenant.prototype, "subcategories", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Category_1.Category; }, function (category) { return category.tenant; }),
        __metadata("design:type", Array)
    ], Tenant.prototype, "categories", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Company_1.Company; }, function (company) { return company.tenant; }),
        __metadata("design:type", Array)
    ], Tenant.prototype, "companies", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Product_1.Product; }, function (product) { return product.tenant; }),
        __metadata("design:type", Array)
    ], Tenant.prototype, "products", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Tenant.prototype, "created_at", void 0);
    Tenant = __decorate([
        typeorm_1.Entity('tenants'),
        __metadata("design:paramtypes", [])
    ], Tenant);
    return Tenant;
}());
exports.Tenant = Tenant;

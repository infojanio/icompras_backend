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
exports.Category = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var SubCategory_1 = require("./SubCategory");
var Tenant_1 = require("@modules/tenants/infra/typeorm/entities/Tenant");
var Company_1 = require("@modules/companies/infra/typeorm/entities/Company");
var Category = /** @class */ (function () {
    //cria o id
    function Category() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Category.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Category.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Category.prototype, "image", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return SubCategory_1.SubCategory; }, function (subcategory) { return subcategory.category; }),
        __metadata("design:type", Array)
    ], Category.prototype, "subcategories", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Company_1.Company; }, function (company) { return company.categories; }),
        __metadata("design:type", Array)
    ], Category.prototype, "companies", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Tenant_1.Tenant; }),
        typeorm_1.JoinColumn({ name: 'tenant_id' }),
        __metadata("design:type", Tenant_1.Tenant)
    ], Category.prototype, "tenant", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Category.prototype, "tenant_id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Category.prototype, "created_at", void 0);
    Category = __decorate([
        typeorm_1.Entity('categories'),
        __metadata("design:paramtypes", [])
    ], Category);
    return Category;
}());
exports.Category = Category;

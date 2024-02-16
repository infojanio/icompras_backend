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
exports.City = void 0;
var Address_1 = require("@modules/address/infra/typeorm/entities/Address");
var Company_1 = require("@modules/companies/infra/typeorm/entities/Company");
var Tenant_1 = require("@modules/tenants/infra/typeorm/entities/Tenant");
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var City = /** @class */ (function () {
    function City() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], City.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], City.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], City.prototype, "uf", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], City.prototype, "cep", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], City.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Tenant_1.Tenant; }, function (tenant) { return tenant.city; }),
        __metadata("design:type", Array)
    ], City.prototype, "tenants", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Address_1.Address; }, function (address) { return address.city; }),
        __metadata("design:type", Array)
    ], City.prototype, "addresses", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Company_1.Company; }, function (company) { return company.city; }),
        __metadata("design:type", Array)
    ], City.prototype, "companies", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], City.prototype, "created_at", void 0);
    City = __decorate([
        typeorm_1.Entity('cities'),
        __metadata("design:paramtypes", [])
    ], City);
    return City;
}());
exports.City = City;

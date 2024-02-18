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
exports.Address = void 0;
var City_1 = require("@modules/cities/infra/typeorm/entities/City");
var Company_1 = require("@modules/companies/infra/typeorm/entities/Company");
var User_1 = require("@modules/users/infra/typeorm/entities/User");
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Address = /** @class */ (function () {
    function Address() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Address.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "district", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "street", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "complement", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.addresses; }),
        typeorm_1.JoinColumn({ name: 'user_id' }),
        __metadata("design:type", User_1.User)
    ], Address.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Company_1.Company; }, function (company) { return company.addresses; }),
        typeorm_1.JoinColumn({ name: 'company_id' }),
        __metadata("design:type", Company_1.Company)
    ], Address.prototype, "company", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "company_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return City_1.City; }, function (city) { return city.addresses; }),
        __metadata("design:type", City_1.City)
    ], Address.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "city_id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Address.prototype, "created_at", void 0);
    Address = __decorate([
        typeorm_1.Entity('addresses'),
        __metadata("design:paramtypes", [])
    ], Address);
    return Address;
}());
exports.Address = Address;

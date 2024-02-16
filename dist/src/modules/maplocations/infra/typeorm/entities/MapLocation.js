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
exports.MapLocation = void 0;
var Company_1 = require("@modules/companies/infra/typeorm/entities/Company");
var User_1 = require("@modules/users/infra/typeorm/entities/User");
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var MapLocation = /** @class */ (function () {
    function MapLocation() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], MapLocation.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], MapLocation.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], MapLocation.prototype, "longitude", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], MapLocation.prototype, "latitude", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], MapLocation.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.maplocations; }),
        typeorm_1.JoinColumn({ name: 'user_id' }),
        __metadata("design:type", User_1.User)
    ], MapLocation.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], MapLocation.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Company_1.Company; }, function (company) { return company.maplocations; }),
        typeorm_1.JoinColumn({ name: 'company_id' }),
        __metadata("design:type", Company_1.Company)
    ], MapLocation.prototype, "company", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], MapLocation.prototype, "company_id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], MapLocation.prototype, "created_at", void 0);
    MapLocation = __decorate([
        typeorm_1.Entity('maplocations'),
        __metadata("design:paramtypes", [])
    ], MapLocation);
    return MapLocation;
}());
exports.MapLocation = MapLocation;

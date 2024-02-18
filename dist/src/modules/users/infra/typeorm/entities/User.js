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
exports.User = void 0;
var Address_1 = require("@modules/address/infra/typeorm/entities/Address");
var MapLocation_1 = require("@modules/maplocations/infra/typeorm/entities/MapLocation");
var Scores_1 = require("@modules/products/infra/typeorm/entities/Scores");
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var User = /** @class */ (function () {
    function User() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], User.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], User.prototype, "isAdmin", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Address_1.Address; }, function (address) { return address.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "addresses", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return MapLocation_1.MapLocation; }, function (maplocation) { return maplocation.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "maplocations", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Scores_1.Score; }, function (score) { return score.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "scores", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "created_at", void 0);
    User = __decorate([
        typeorm_1.Entity('users'),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
}());
exports.User = User;

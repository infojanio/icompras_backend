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
exports.OpeningHours = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var OpeningHours = /** @class */ (function () {
    function OpeningHours() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], OpeningHours.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], OpeningHours.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], OpeningHours.prototype, "operation_week", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], OpeningHours.prototype, "operation_weekend", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], OpeningHours.prototype, "notice", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], OpeningHours.prototype, "status", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], OpeningHours.prototype, "created_at", void 0);
    OpeningHours = __decorate([
        typeorm_1.Entity('opening_hours'),
        __metadata("design:paramtypes", [])
    ], OpeningHours);
    return OpeningHours;
}());
exports.OpeningHours = OpeningHours;

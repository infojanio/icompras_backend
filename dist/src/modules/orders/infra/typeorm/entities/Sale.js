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
exports.Sale = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Order_1 = require("./Order");
var Sale = /** @class */ (function () {
    function Sale() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Sale.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return Order_1.Order; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Order_1.Order)
    ], Sale.prototype, "order", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Sale.prototype, "subtotal", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Sale.prototype, "freight", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Sale.prototype, "discount", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Sale.prototype, "change", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Sale.prototype, "total", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Sale.prototype, "payment_status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Sale.prototype, "payment_method", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Sale.prototype, "payment_date", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Sale.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Sale.prototype, "updated_at", void 0);
    Sale = __decorate([
        typeorm_1.Entity('sales'),
        __metadata("design:paramtypes", [])
    ], Sale);
    return Sale;
}());
exports.Sale = Sale;

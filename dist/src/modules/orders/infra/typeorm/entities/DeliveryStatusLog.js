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
exports.DeliveryStatusLog = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Order_1 = require("./Order");
var DeliveryStatusLog = /** @class */ (function () {
    function DeliveryStatusLog() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], DeliveryStatusLog.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DeliveryStatusLog.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DeliveryStatusLog.prototype, "notes", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], DeliveryStatusLog.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], DeliveryStatusLog.prototype, "updated_at", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Order_1.Order; }, function (order) { return order.deliverystatuslogs; }),
        typeorm_1.JoinColumn({ name: 'order_id' }),
        __metadata("design:type", Order_1.Order)
    ], DeliveryStatusLog.prototype, "order", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DeliveryStatusLog.prototype, "order_id", void 0);
    DeliveryStatusLog = __decorate([
        typeorm_1.Entity('delivery_status_logs'),
        __metadata("design:paramtypes", [])
    ], DeliveryStatusLog);
    return DeliveryStatusLog;
}());
exports.DeliveryStatusLog = DeliveryStatusLog;

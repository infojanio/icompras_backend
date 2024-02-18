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
exports.Order = void 0;
var User_1 = require("@modules/users/infra/typeorm/entities/User");
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var DeliveryStatusLog_1 = require("./DeliveryStatusLog");
var Company_1 = require("@modules/companies/infra/typeorm/entities/Company");
var OrderItem_1 = require("./OrderItem");
var Order = /** @class */ (function () {
    function Order() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Order.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }),
        typeorm_1.JoinColumn({ name: 'user_id' }),
        __metadata("design:type", User_1.User)
    ], Order.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Order.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: 'company_id' }),
        __metadata("design:type", Company_1.Company)
    ], Order.prototype, "company", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Order.prototype, "company_id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return DeliveryStatusLog_1.DeliveryStatusLog; }, function (deliverystatuslog) { return deliverystatuslog.order; }),
        __metadata("design:type", Array)
    ], Order.prototype, "deliverystatuslogs", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Order.prototype, "deliverystatus_id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return OrderItem_1.OrderItem; }, function (orderItem) { return orderItem.order; }),
        __metadata("design:type", Array)
    ], Order.prototype, "orderItems", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Order.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Order.prototype, "updated_at", void 0);
    Order = __decorate([
        typeorm_1.Entity('orders'),
        __metadata("design:paramtypes", [])
    ], Order);
    return Order;
}());
exports.Order = Order;
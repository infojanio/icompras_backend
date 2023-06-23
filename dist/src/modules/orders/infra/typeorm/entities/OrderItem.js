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
exports.OrderItem = void 0;
var Order_1 = require("@modules/orders/infra/typeorm/entities/Order");
var Product_1 = require("@modules/products/infra/typeorm/entities/Product");
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var OrderItem = /** @class */ (function () {
    function OrderItem() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], OrderItem.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Order_1.Order; }, function (order) { return order.orderItems; }),
        typeorm_1.JoinColumn({ name: 'order_id' }),
        __metadata("design:type", Order_1.Order)
    ], OrderItem.prototype, "order", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], OrderItem.prototype, "order_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Product_1.Product; }, function (product) { return product.orderItems; }),
        typeorm_1.JoinColumn({ name: 'product_id' }),
        __metadata("design:type", Product_1.Product)
    ], OrderItem.prototype, "product", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], OrderItem.prototype, "product_id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], OrderItem.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], OrderItem.prototype, "updated_at", void 0);
    OrderItem = __decorate([
        typeorm_1.Entity('order_items'),
        __metadata("design:paramtypes", [])
    ], OrderItem);
    return OrderItem;
}());
exports.OrderItem = OrderItem;

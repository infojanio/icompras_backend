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
exports.Product = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var SubCategory_1 = require("./SubCategory");
var Company_1 = require("@modules/companies/infra/typeorm/entities/Company");
var Tenant_1 = require("@modules/tenants/infra/typeorm/entities/Tenant");
var Scores_1 = require("./Scores");
var OrderItem_1 = require("@modules/orders/infra/typeorm/entities/OrderItem");
var Product = /** @class */ (function () {
    function Product() {
        if (!this.id) {
            this.id = uuid_1.v4();
            this.available = true;
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Product.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Product.prototype, "available", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return OrderItem_1.OrderItem; }, function (orderItem) { return orderItem.product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "orderItems", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return SubCategory_1.SubCategory; }),
        typeorm_1.JoinColumn({ name: 'subcategory_id' }),
        __metadata("design:type", SubCategory_1.SubCategory)
    ], Product.prototype, "subcategory", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "subcategory_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Company_1.Company; }),
        typeorm_1.JoinColumn({ name: 'company_id' }),
        __metadata("design:type", Company_1.Company)
    ], Product.prototype, "company", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "company_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Tenant_1.Tenant; }),
        typeorm_1.JoinColumn({ name: 'tenant_id' }),
        __metadata("design:type", Tenant_1.Tenant)
    ], Product.prototype, "tenant", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "tenant_id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Scores_1.Score; }, function (score) { return score.product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "scores", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "image", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Product.prototype, "created_at", void 0);
    Product = __decorate([
        typeorm_1.Entity('products'),
        __metadata("design:paramtypes", [])
    ], Product);
    return Product;
}());
exports.Product = Product;

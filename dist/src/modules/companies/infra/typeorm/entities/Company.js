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
exports.Company = void 0;
var Address_1 = require("@modules/address/infra/typeorm/entities/Address");
var Product_1 = require("@modules/products/infra/typeorm/entities/Product");
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var OpeningHours_1 = require("./OpeningHours");
var Banner_1 = require("./Banner");
var Company = /** @class */ (function () {
    function Company() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Company.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "slug", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Company.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Company.prototype, "isAdmin", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Address_1.Address; }, function (address) { return address.company; }),
        __metadata("design:type", Array)
    ], Company.prototype, "addresses", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Company.prototype, "address_id", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return Banner_1.Banner; }),
        typeorm_1.JoinColumn({ name: 'banner_id' }),
        __metadata("design:type", Banner_1.Banner)
    ], Company.prototype, "banner", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Company.prototype, "banner_id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Product_1.Product; }, function (product) { return product.stores; }),
        __metadata("design:type", Array)
    ], Company.prototype, "products", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return OpeningHours_1.OpeningHours; }),
        typeorm_1.JoinColumn({ name: 'opening_hours_id' }),
        __metadata("design:type", OpeningHours_1.OpeningHours)
    ], Company.prototype, "opening_hours", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "opening_hours_id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Company.prototype, "created_at", void 0);
    Company = __decorate([
        typeorm_1.Entity('companies'),
        __metadata("design:paramtypes", [])
    ], Company);
    return Company;
}());
exports.Company = Company;
/*
    @ManyToOne(() => Banner)
    @JoinColumn({ name: 'banner_id' })
    banner: Banner;
  
    @Column()
    banner_id: string;
  */
/*
    @OneToMany(() => City)
    @JoinColumn({ name: 'city_id' })
    city: City;
  
    @Column()
    city_id: string;
  */
/*
    @OneToOne(() => Address)
    @JoinColumn({ name: 'address_id' })
    address: Address;
  
    @Column()
    address_id: string;
  */

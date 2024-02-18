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
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var OpeningHours_1 = require("./OpeningHours");
var MapLocation_1 = require("@modules/maplocations/infra/typeorm/entities/MapLocation");
var Tenant_1 = require("@modules/tenants/infra/typeorm/entities/Tenant");
var City_1 = require("@modules/cities/infra/typeorm/entities/City");
var Category_1 = require("@modules/products/infra/typeorm/entities/Category");
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
    ], Company.prototype, "cnpj", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "logo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Company.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return OpeningHours_1.OpeningHours; }),
        typeorm_1.JoinColumn({ name: 'openinghours_id' }),
        __metadata("design:type", OpeningHours_1.OpeningHours)
    ], Company.prototype, "openinghours", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "openinghours_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Tenant_1.Tenant; }),
        typeorm_1.JoinColumn({ name: 'tenant_id' }),
        __metadata("design:type", Tenant_1.Tenant)
    ], Company.prototype, "tenant", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "tenant_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return City_1.City; }) //, (city) => city.companies
        ,
        typeorm_1.JoinColumn({ name: 'city_id' }),
        __metadata("design:type", City_1.City)
    ], Company.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "city_id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return MapLocation_1.MapLocation; }, function (maplocation) { return maplocation.company; }),
        __metadata("design:type", Array)
    ], Company.prototype, "maplocations", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Address_1.Address; }, function (address) { return address.company; }),
        __metadata("design:type", Array)
    ], Company.prototype, "addresses", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Category_1.Category; }),
        typeorm_1.JoinTable({
            name: 'categories_companies',
            joinColumns: [{ name: 'company_id' }],
            inverseJoinColumns: [{ name: 'category_id' }],
        }),
        __metadata("design:type", Array)
    ], Company.prototype, "categories", void 0);
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

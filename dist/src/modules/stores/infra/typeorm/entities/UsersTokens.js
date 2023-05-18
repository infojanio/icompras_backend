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
exports.StoreTokens = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Store_1 = require("./Store");
var StoreTokens = /** @class */ (function () {
    function StoreTokens() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], StoreTokens.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], StoreTokens.prototype, "refresh_token", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], StoreTokens.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Store_1.Store; }),
        typeorm_1.JoinColumn({ name: 'store_id' }),
        __metadata("design:type", Store_1.Store)
    ], StoreTokens.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], StoreTokens.prototype, "expires_date", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], StoreTokens.prototype, "created_at", void 0);
    StoreTokens = __decorate([
        typeorm_1.Entity('store_tokens'),
        __metadata("design:paramtypes", [])
    ], StoreTokens);
    return StoreTokens;
}());
exports.StoreTokens = StoreTokens;

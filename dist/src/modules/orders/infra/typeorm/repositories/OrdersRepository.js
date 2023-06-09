"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRepository = void 0;
var typeorm_1 = require("typeorm");
var Order_1 = require("../entities/Order");
var OrdersRepository = /** @class */ (function () {
    function OrdersRepository() {
        this.repository = typeorm_1.getRepository(Order_1.Order);
    }
    OrdersRepository.prototype.findOpenOrderByStore = function (store_id) {
        return __awaiter(this, void 0, void 0, function () {
            var openByStore;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: { store_id: store_id, end_date: null },
                        })];
                    case 1:
                        openByStore = _a.sent();
                        return [2 /*return*/, openByStore];
                }
            });
        });
    };
    OrdersRepository.prototype.findOpenOrderByUser = function (user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var openByUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: { user_id: user_id, end_date: null },
                        })];
                    case 1:
                        openByUser = _a.sent();
                        return [2 /*return*/, openByUser];
                }
            });
        });
    };
    OrdersRepository.prototype.create = function (_a) {
        var user_id = _a.user_id, store_id = _a.store_id, address_id = _a.address_id, product_id = _a.product_id, form_payment = _a.form_payment, change = _a.change, freight = _a.freight, discount = _a.discount, subtotal = _a.subtotal, total = _a.total, order_date = _a.order_date;
        return __awaiter(this, void 0, void 0, function () {
            var order;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        order = this.repository.create({
                            user_id: user_id,
                            store_id: store_id,
                            address_id: address_id,
                            product_id: product_id,
                            form_payment: form_payment,
                            change: change,
                            freight: freight,
                            discount: discount,
                            subtotal: subtotal,
                            total: total,
                            order_date: order_date,
                        });
                        return [4 /*yield*/, this.repository.save(order)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, order];
                }
            });
        });
    };
    OrdersRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne(id)];
                    case 1:
                        order = _a.sent();
                        return [2 /*return*/, order];
                }
            });
        });
    };
    OrdersRepository.prototype.findByUser = function (user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var orders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find({
                            where: { user_id: user_id },
                            relations: ['product'], //busca o relacionamento da entidade Order
                        })];
                    case 1:
                        orders = _a.sent();
                        return [2 /*return*/, orders];
                }
            });
        });
    };
    return OrdersRepository;
}());
exports.OrdersRepository = OrdersRepository;

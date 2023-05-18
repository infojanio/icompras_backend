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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var OrdersRepositoryInMemory_1 = require("@modules/orders/repositories/in-memory/OrdersRepositoryInMemory");
var DayjsDateProvider_1 = require("@shared/container/providers/DateProvider/implementations/DayjsDateProvider");
var AppError_1 = require("@shared/errors/AppError");
var CreateOrderUseCase_1 = require("./CreateOrderUseCase");
var ProductsRepositoryInMemory_1 = require("@modules/products/repositories/in-memory/ProductsRepositoryInMemory");
var createOrderUseCase;
var ordersRepositoryInMemory;
var productsRepositoryInMemory;
var dayjsDateProvider;
describe('Create Order', function () {
    var dayAdd24Hours = dayjs_1.default().add(1, 'day').toDate(); //um dia a mais
    beforeEach(function () {
        ordersRepositoryInMemory = new OrdersRepositoryInMemory_1.OrdersRepositoryInMemory();
        productsRepositoryInMemory = new ProductsRepositoryInMemory_1.ProductsRepositoryInMemory();
        dayjsDateProvider = new DayjsDateProvider_1.DayjsDateProvider();
        createOrderUseCase = new CreateOrderUseCase_1.CreateOrderUseCase(ordersRepositoryInMemory, dayjsDateProvider, productsRepositoryInMemory);
    });
    //verifica se é possível criar uma locação nova
    it('should be able to create a new rental', function () { return __awaiter(void 0, void 0, void 0, function () {
        var product, order;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, productsRepositoryInMemory.create({
                        name: 'Test',
                        description: 'Car Test',
                        daily_rate: 100,
                        license_plate: 'test',
                        fine_amount: 40,
                        category_id: '1234',
                        brand: 'brand',
                    })];
                case 1:
                    product = _a.sent();
                    return [4 /*yield*/, createOrderUseCase.execute({
                            user_id: '12345',
                            product_id: product.id,
                            expected_return_date: dayAdd24Hours,
                        })];
                case 2:
                    order = _a.sent();
                    console.log(order);
                    expect(order).toHaveProperty('id');
                    expect(order).toHaveProperty('start_date');
                    return [2 /*return*/];
            }
        });
    }); });
    //Não poderá ser possível criar um novo agendamento quando o usuário estiver com um aberto
    it('should not be able to create a new order if there is another open to same user', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ordersRepositoryInMemory.create({
                        product_id: '2222',
                        expected_return_date: dayAdd24Hours,
                        user_id: '12345',
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, expect(createOrderUseCase.execute({
                            user_id: '12345',
                            product_id: '121212',
                            expected_return_date: dayAdd24Hours,
                        })).rejects.toEqual(new AppError_1.AppError('There is a rental in progress for user!'))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    //Esse teste não funcionou, Car { id: undefined -> [TypeError: Cannot set property 'available' of undefined]
    //Não poderá ser possível criar um novo agendamento quando o carro estiver alugado
    it('Should not be able to create a new order if there is another open to the same car', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ordersRepositoryInMemory.create({
                        product_id: '1111',
                        expected_return_date: dayAdd24Hours,
                        user_id: '1234',
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, expect(createOrderUseCase.execute({
                            product_id: '1111',
                            expected_return_date: dayAdd24Hours,
                            user_id: '5432',
                        })).rejects.toEqual(new AppError_1.AppError('Car is unavailable!'))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    //Não poderá ser possível criar um novo agendamento com tempo menor que 24h
    it('should not be able to create a new rental with invalid return time', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(createOrderUseCase.execute({
                        user_id: '1234',
                        product_id: 'test',
                        expected_return_date: dayjs_1.default().toDate(),
                    })).rejects.toEqual(new AppError_1.AppError('Invalid return time!'))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});

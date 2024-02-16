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
exports.ensureAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var AppError_1 = require("@shared/errors/AppError");
var auth_1 = __importDefault(require("../../../../config/auth"));
var UsersTokensRepository_1 = require("@modules/users/infra/typeorm/repositories/UsersTokensRepository");
//garante que o usuário que requisita a rota estará autenticado
function ensureAuthenticated(request, response, next) {
    return __awaiter(this, void 0, void 0, function () {
        var authHeader, userTokensRepository, _a, token, decoded, user_id, user, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    authHeader = request.headers.authorization;
                    userTokensRepository = new UsersTokensRepository_1.UsersTokensRepository();
                    //dispara o erro caso o token não seja válido
                    if (!authHeader) {
                        // throw new Error('JWT token is missing!');
                        throw new AppError_1.AppError('JWT token não informado!', 401);
                    }
                    _a = authHeader.split(' '), token = _a[1];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    decoded = jsonwebtoken_1.verify(token, auth_1.default.secret_refresh_token);
                    user_id = decoded.sub;
                    return [4 /*yield*/, userTokensRepository.findUserByIdAndRefreshToken(user_id, token)];
                case 2:
                    user = _c.sent();
                    if (!user) {
                        //throw new Error('User does not exist!');
                        throw new AppError_1.AppError('User does not exist!', 401);
                    }
                    //subscrevemos a tipagem da própria biblioteca
                    request.user = {
                        id: user_id,
                    };
                    next();
                    return [3 /*break*/, 4];
                case 3:
                    _b = _c.sent();
                    //throw new Error('Token inválido!');
                    throw new AppError_1.AppError('Token inválido!', 401);
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.ensureAuthenticated = ensureAuthenticated;
//verifica se o usuário está autenticado na aplicação

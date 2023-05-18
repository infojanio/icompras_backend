"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
require("express-async-errors"); //tem que ser importada após o express
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
require("@shared/infra/typeorm");
var AppError_1 = require("@shared/errors/AppError");
var routes_1 = require("./routes");
require("@shared/container");
var swagger_json_1 = __importDefault(require("../../../swagger.json"));
var typeorm_1 = __importDefault(require("@shared/infra/typeorm"));
typeorm_1.default(); //chama a conexão do typeorm/index.ts
var app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
//rota da documentação
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(routes_1.router);
//faz a tratativa de erros depois das rotas
app.use(function (err, request, response, next) {
    //se for um erro da aplicação
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    console.log(err);
    return response.status(500).json({
        status: 'error',
        message: 'internal server error',
    });
});

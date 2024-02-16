"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("express-async-errors"); //tem que ser importada após o express
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
require("@shared/infra/typeorm");
var AppError_1 = require("@shared/errors/AppError");
var routes_1 = require("./routes");
require("@shared/container");
var swagger_json_1 = __importDefault(require("../../../swagger.json"));
var typeorm_1 = __importDefault(require("@shared/infra/typeorm"));
var cors_1 = __importDefault(require("cors"));
var upload_1 = __importDefault(require("@config/upload"));
typeorm_1.default(); //chama a conexão do typeorm/index.ts
var app = express_1.default();
exports.app = app;
//rota das imagens do produto
var thumbProductsPath = path_1.default.resolve(__dirname, '..', 'images', 'thumb');
app.use('/images/thumb', express_1.default.static(thumbProductsPath));
app.use(express_1.default.json());
app.use(cors_1.default());
//rota da documentação
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
//rota da imagem avatar
//app.use("/avatar", express.static(`${upload.tmpFolder}/avatar`));
app.use('/avatar', express_1.default.static(upload_1.default.upload + "/avatar"));
app.use('/products', express_1.default.static(upload_1.default.upload + "/products"));
//app.use("/avatar", express.static(uploadConfig.UPLOADS_FOLDER));
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

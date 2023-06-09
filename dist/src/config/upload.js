"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
exports.default = {
    upload: function (folder) {
        var tmpFolder = path_1.default.resolve(__dirname, '..', '..', folder); //salva sempre na pasta tmp
        return {
            directory: tmpFolder,
            storage: multer_1.default.diskStorage({
                destination: tmpFolder,
                //garante que o nome do arquivo nao será igual
                filename: function (request, file, callback) {
                    var fileHash = crypto_1.default.randomBytes(10).toString('hex');
                    var fileName = fileHash + "-" + file.originalname;
                    return callback(null, fileName);
                },
            }),
        };
    },
};

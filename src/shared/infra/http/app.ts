import 'express-async-errors'; //tem que ser importada após o express
import path from 'path';

import express, { NextFunction, Request, Response } from 'express';

import swaggerUi from 'swagger-ui-express';
import '@shared/infra/typeorm';
import { AppError } from '@shared/errors/AppError';
import { router } from './routes';
import '@shared/container';
import swaggerFile from '../../../swagger.json';
import createConnection from '@shared/infra/typeorm';

import cors from 'cors';
import upload from '@config/upload';

createConnection(); //chama a conexão do typeorm/index.ts

const app = express();

//rota das imagens do produto
const thumbProductsPath = path.resolve(__dirname, '..', 'images', 'thumb');
app.use('/images/thumb', express.static(thumbProductsPath));

app.use(express.json());
app.use(cors());

//rota da documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//rota da imagem avatar
//app.use("/avatar", express.static(`${upload.tmpFolder}/avatar`));
app.use('/avatar', express.static(`${upload.upload}/avatar`));

app.use('/products', express.static(`${upload.upload}/products`));
//app.use("/avatar", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(router);

//faz a tratativa de erros depois das rotas
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    //se for um erro da aplicação
    if (err instanceof AppError) {
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
  },
);

export { app };

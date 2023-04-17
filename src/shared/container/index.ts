import { container } from 'tsyringe';
import '@shared/container/providers';

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

import { ICategoriesRepository } from '@modules/products/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/products/infra/typeorm/repositories/CategoriesRepository';

import { ISubCategoriesRepository } from '@modules/products/repositories/ISubCategoriesRepository';
import { SubCategoriesRepository } from '@modules/products/infra/typeorm/repositories/SubCategoriesRepository';

import { ISpecificationsRepository } from '@modules/products/repositories/ISpecificationsRepository';
import { SpecificationsRepository } from '@modules/products/infra/typeorm/repositories/SpecificationsRepository';

import { ProductsRepository } from '@modules/products/infra/typeorm/repositories/ProductsRepository';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { IProductsImagesRepository } from '@modules/products/repositories/IProductsImagesRepository';
import { ProductsImagesRepository } from '@modules/products/infra/typeorm/repositories/ProductsImagesRepository';

import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository';
import { OrdersRepository } from '@modules/orders/infra/typeorm/repositories/OrdersRepository';

import { UsersTokensRepository } from '@modules/users/infra/typeorm/repositories/UsersTokensRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
/*
  
  container.registerSingleton<ISpecificationsRepository>(
    'SpecificationsRepository',
    SpecificationsRepository,
  );

  
container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);
*/

container.registerSingleton<IProductsImagesRepository>(
  'ProductsImagesRepository',
  ProductsImagesRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
);

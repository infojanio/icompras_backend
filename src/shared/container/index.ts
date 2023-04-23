import { container } from 'tsyringe';
import '@shared/container/providers';

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';

import { ICategoriesRepository } from '@modules/products/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/products/infra/typeorm/repositories/CategoriesRepository';

import { ISubCategoriesRepository } from '@modules/products/repositories/ISubCategoriesRepository';
import { SubCategoriesRepository } from '@modules/products/infra/typeorm/repositories/SubCategoriesRepository';

import { IProductsImagesRepository } from '@modules/products/repositories/IProductsImagesRepository';
import { ProductsImagesRepository } from '@modules/products/infra/typeorm/repositories/ProductsImagesRepository';

import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { UsersTokensRepository } from '@modules/users/infra/typeorm/repositories/UsersTokensRepository';

import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';
import { CitiesRepository } from '@modules/cities/infra/typeorm/repositories/CitiesRepository';

import { ISpecificationsRepository } from '@modules/products/repositories/ISpecificationsRepository';
import { SpecificationsRepository } from '@modules/products/infra/typeorm/repositories/SpecificationsRepository';

import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { ProductsRepository } from '@modules/products/infra/typeorm/repositories/ProductsRepository';

import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository';
import { OrdersRepository } from '@modules/orders/infra/typeorm/repositories/OrdersRepository';
import { StoreRepository } from '@modules/store/infra/typeorm/repositories/StoreRepository';
import { IStoreRepository } from '@modules/store/repositories/IStoreRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISubCategoriesRepository>(
  'SubCategoriesRepository',
  SubCategoriesRepository,
);

container.registerSingleton<ICitiesRepository>(
  'CitiesRepository',
  CitiesRepository,
);

container.registerSingleton<IStoreRepository>(
  'StoreRepository',
  StoreRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<IProductsImagesRepository>(
  'ProductsImagesRepository',
  ProductsImagesRepository,
);

/*
container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);
*/

import { container } from 'tsyringe';
import '@shared/container/providers';

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { ICategoriesRepository } from '@modules/products/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/products/infra/typeorm/repositories/CategoriesRepository';

import { ISpecificationsRepository } from '@modules/products/repositories/ISpecificationsRepository';
import { SpecificationsRepository } from '@modules/products/infra/typeorm/repositories/SpecificationsRepository';
import { CarsRepository } from '@modules/products/infra/typeorm/repositories/CarsRepository';
import { ICarsRepository } from '@modules/products/repositories/ICarsRepository';
import { ICarsImagesRepository } from '@modules/products/repositories/ICarsImagesRepository';
import { CarsImagesRepository } from '@modules/products/infra/typeorm/repositories/CarsImagesRepository';
import { IRentalsRepository } from '@modules/orders/repositories/IOrdersRepository';
import { RentalsRepository } from '@modules/orders/infra/typeorm/repositories/OrdersRepository';
import { UsersTokensRepository } from '@modules/users/infra/typeorm/repositories/UsersTokensRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
  'CarsImagesRepository',
  CarsImagesRepository,
);

container.registerSingleton<IRentalsRepository>(
  'RentalsRepository',
  RentalsRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
);

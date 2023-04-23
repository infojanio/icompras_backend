import dayjs from 'dayjs';

import { OrdersRepositoryInMemory } from '@modules/orders/repositories/in-memory/OrdersRepositoryInMemory';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
import { AppError } from '@shared/errors/AppError';
import { CreateOrderUseCase } from './CreateOrderUseCase';
import { ProductsRepositoryInMemory } from '@modules/products/repositories/in-memory/ProductsRepositoryInMemory';

let createOrderUseCase: CreateOrderUseCase;
let ordersRepositoryInMemory: OrdersRepositoryInMemory;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider;

describe('Create Order', () => {
  const dayAdd24Hours = dayjs().add(1, 'day').toDate(); //um dia a mais

  beforeEach(() => {
    ordersRepositoryInMemory = new OrdersRepositoryInMemory();
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    dayjsDateProvider = new DayjsDateProvider();

    createOrderUseCase = new CreateOrderUseCase(
      ordersRepositoryInMemory,
      dayjsDateProvider,
      productsRepositoryInMemory,
    );
  });

  //verifica se é possível criar uma locação nova
  it('should be able to create a new rental', async () => {
    const product = await productsRepositoryInMemory.create({
      name: 'Test',
      description: 'Car Test',
      daily_rate: 100,
      license_plate: 'test',
      fine_amount: 40,
      category_id: '1234',
      brand: 'brand',
    });

    const order = await createOrderUseCase.execute({
      user_id: '12345',
      product_id: product.id,
      expected_return_date: dayAdd24Hours,
    });
    console.log(order);
    expect(order).toHaveProperty('id');
    expect(order).toHaveProperty('start_date');
  });

  //Não poderá ser possível criar um novo agendamento quando o usuário estiver com um aberto
  it('should not be able to create a new order if there is another open to same user', async () => {
    await ordersRepositoryInMemory.create({
      product_id: '2222',
      expected_return_date: dayAdd24Hours,
      user_id: '12345',
    });

    await expect(
      createOrderUseCase.execute({
        user_id: '12345',
        product_id: '121212',
        expected_return_date: dayAdd24Hours,
      }),
    ).rejects.toEqual(new AppError('There is a rental in progress for user!'));
  });

  //Esse teste não funcionou, Car { id: undefined -> [TypeError: Cannot set property 'available' of undefined]

  //Não poderá ser possível criar um novo agendamento quando o carro estiver alugado
  it('Should not be able to create a new order if there is another open to the same car', async () => {
    await ordersRepositoryInMemory.create({
      product_id: '1111',
      expected_return_date: dayAdd24Hours,
      user_id: '1234',
    });

    await expect(
      createOrderUseCase.execute({
        product_id: '1111',
        expected_return_date: dayAdd24Hours,
        user_id: '5432',
      }),
    ).rejects.toEqual(new AppError('Car is unavailable!'));
  });

  //Não poderá ser possível criar um novo agendamento com tempo menor que 24h
  it('should not be able to create a new rental with invalid return time', async () => {
    await expect(
      createOrderUseCase.execute({
        user_id: '1234',
        product_id: 'test',
        expected_return_date: dayjs().toDate(),
      }),
    ).rejects.toEqual(new AppError('Invalid return time!'));
  });
});

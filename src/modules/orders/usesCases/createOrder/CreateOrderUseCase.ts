import dayjs from 'dayjs';

import { Order } from '@modules/orders/infra/typeorm/entities/Order';
import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { ProductsRepository } from '@modules/products/infra/typeorm/repositories/ProductsRepository';

interface IRequest {
  user_id: string;
  product_id: string;
  expected_return_date?: Date;
}

@injectable()
class CreateOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider,
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({
    user_id,
    product_id,
    expected_return_date,
  }: IRequest): Promise<Order> {
    const minimumHour = 24; //qtd mínima hs de locação

    //Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuario
    const productUnavailable = await this.ordersRepository.findOpenOrderByProduct(
      product_id,
    );

    if (productUnavailable) {
      throw new AppError('Product is unavailable!');
    }

    //Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
    const orderOpenToUser = await this.ordersRepository.findOpenOrderByUser(
      user_id,
    );

    if (orderOpenToUser) {
      throw new AppError('There is a order in progress for user!');
    }

    const dateNow = this.dateProvider.dateNow();

    const compare = this.dateProvider.compareInHours(
      dateNow,
      expected_return_date,
    );

    // console.log('Compare Date', compare);
    if (compare < minimumHour) {
      throw new AppError('Invalid return time!');
    }

    //se passar pelos testes cria o aluguel
    const order = await this.ordersRepository.create({
      user_id,
      product_id,
      expected_return_date,
    });

    //altera o status do aluguel do carro p/ indisponível
    await this.productsRepository.updateAvailable(product_id, false);

    return order;
  }
}

export { CreateOrderUseCase };

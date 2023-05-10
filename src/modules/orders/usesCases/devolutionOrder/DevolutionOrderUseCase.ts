import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { Order } from '@modules/orders/infra/typeorm/entities/Order';
import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id: string;
  user_id: string;
}

@injectable()
class DevolutionOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute({ id, user_id }: IRequest): Promise<Order> {
    //recuperar todas as informações do aluguel
    const order = await this.ordersRepository.findById(id);

    //recuperar todas as informações do carro
    const product = await this.productsRepository.findById(order.product_id);

    //o mínimo de diária cobrada deve ser 1
    const minimum_daily = 1;

    if (!order) {
      throw new AppError('order does not exist!');
    }

    //Verifica o tempo de aluguel
    const dateNow = this.dateProvider.dateNow();

    //calcula quantas diárias geraram
    let daily = this.dateProvider.compareInDays(
      order.start_date,
      this.dateProvider.dateNow(),
    );
    //se o tempo for menor que 24h, cobra 1 diária
    if (daily <= 0) {
      daily = minimum_daily;
    }

    //calcula dias de atraso
    const delay = this.dateProvider.compareInDays(
      dateNow,
      order.expected_return_date,
    );

    //calcula o total mais as multas
    let total = 0;
    if (delay > 0) {
      //se houve atraso
      const calculate_fine = delay * product.fine_amount;
      total = calculate_fine;
    }
    //calcula a quantidade + valor das diárias
    total += daily * product.daily_rate; //total = total + daily * product.daily_rate

    order.end_date = this.dateProvider.dateNow();
    order.total = total;

    await this.ordersRepository.create(order); //finaliza o aluguel
    await this.productsRepository.updateAvailable(product.id, true); //carro disponível

    return order;
  }
}

export { DevolutionOrderUseCase };

import { inject, injectable } from 'tsyringe';
import { Order } from '../infra/typeorm/entities/Order';
import { IOrdersRepository } from '../repositories/IOrdersRepository';

@injectable()
class ListOrdersByUserUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  async execute(user_id: string): Promise<Order[]> {
    const ordersByUser = await this.ordersRepository.findByUser(user_id);
    return ordersByUser;
  }
}
export { ListOrdersByUserUseCase };

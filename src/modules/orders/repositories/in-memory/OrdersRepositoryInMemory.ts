import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO';
import { Order } from '@modules/orders/infra/typeorm/entities/Order';
import { IOrdersRepository } from '../IOrdersRepository';

class OrdersRepositoryInMemory implements IOrdersRepository {
  orders: Order[] = [];

  //encontra o veículo que ainda não foi devolvido
  async findOpenOrderByProduct(product_id: string): Promise<Order | undefined> {
    return this.orders.find((order) => order.product_id === product_id);
  }

  async findOpenOrderByUser(user_id: string): Promise<Order | undefined> {
    return this.orders.find((order) => order.user_id === user_id);
  }

  async create({
    product_id,
    user_id,
    subtotal,
    total,
  }: ICreateOrderDTO): Promise<Order> {
    const order = new Order();

    Object.assign(order, {
      product_id,
      user_id,
      subtotal,
      total,
      start_date: new Date(),
    });
    this.orders.push(order);
    return order;
  }

  async findById(id: string): Promise<Order | undefined> {
    return this.orders.find((order) => order.id === id);
  }

  async findByUser(user_id: string): Promise<Order[]> {
    return this.orders.filter((order) => order.user_id === user_id);
  }
}
export { OrdersRepositoryInMemory };

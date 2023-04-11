import { ICreateOrderDTO } from '@modules/orders/dtos/ICreateOrderDTO';
import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository';
import { getRepository, Repository } from 'typeorm';
import { Order } from '../entities/Order';

class OrdersRepository implements IOrdersRepository {
  private repository: Repository<Order>;

  constructor() {
    this.repository = getRepository(Order);
  }

  async findOpenOrderByStore(store_id: string): Promise<Order | undefined> {
    const openByStore = await this.repository.findOne({
      where: { store_id, end_date: null },
    });
    return openByStore;
  }
  async findOpenOrderByUser(user_id: string): Promise<Order | undefined> {
    const openByUser = await this.repository.findOne({
      where: { user_id, end_date: null },
    });
    return openByUser;
  }

  async create({
    user_id,
    store_id,
    address_id,
    form_payment,
    change,
    freight,
    discount,
    subtotal,
    total,
    order_date,
  }: ICreateOrderDTO): Promise<Order | undefined> {
    const order = this.repository.create({
      user_id,
      store_id,
      address_id,
      form_payment,
      change,
      freight,
      discount,
      subtotal,
      total,
      order_date,
    });

    await this.repository.save(order);
    return order;
  }

  async findById(id: string): Promise<Order> {
    const order = await this.repository.findOne(id);
    return order;
  }

  async findByUser(user_id: string): Promise<Order[]> {
    const orders = await this.repository.find({
      where: { user_id },
      relations: ['product'], //busca o relacionamento da entidade Order
    });
    return orders;
  }
}

export { OrdersRepository };

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
    store_id,
    expected_return_date,
    user_id,
    id,
    end_date,
    total,
  }: ICreateOrderDTO): Promise<Order | undefined> {
    const order = this.repository.create({
      product_id,
      expected_return_date,
      user_id,
      id,
      end_date,
      total,
    });

    await this.repository.save(order);
    return order;
  }

  async findById(id: string): Promise<Rental> {
    const rental = await this.repository.findOne(id);
    return rental;
  }

  async findByUser(user_id: string): Promise<Rental[]> {
    const rentals = await this.repository.find({
      where: { user_id },
      relations: ['car'], //busca o relacionamento da entidade Rental
    });
    return rentals;
  }
}

export { RentalsRepository };

import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { Order } from '../infra/typeorm/entities/Order';

interface IOrdersRepository {
  findOpenOrderByProduct(product_id: string): Promise<Order | undefined>;
  findOpenOrderByStore(store_id: string): Promise<Order | undefined>;
  findOpenOrderByUser(user_id: string): Promise<Order | undefined>;

  create({ store_id, user_id }: ICreateOrderDTO): Promise<Order | undefined>;

  findById(id: string): Promise<Order | undefined>;

  findByUser(user_id: string): Promise<Order[] | undefined>; //retorna array de pedidos
}

export { IOrdersRepository };

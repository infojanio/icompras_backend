import { ICreateStoreDTO } from '@modules/store/dtos/ICreateStoreDTO';
import { Store } from '@modules/store/infra/typeorm/entities/Store';

interface IStoreRepository {
  create(data: ICreateStoreDTO): Promise<void>;
  findByEmail(email: string): Promise<Store | undefined>;
  findByPhone(phone: string): Promise<Store | undefined>;
  findById(id: string): Promise<Store | undefined>;
}
export { IStoreRepository };

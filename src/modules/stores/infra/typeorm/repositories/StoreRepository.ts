import { getRepository, Repository } from 'typeorm';
import { ICreateStoreDTO } from '@modules/store/dtos/ICreateStoreDTO';
import { IStoreRepository } from '@modules/store/repositories/IStoreRepository';
import { Store } from '@modules/store/infra/typeorm/entities/Store';

class StoreRepository implements IStoreRepository {
  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store);
  }

  async create({
    slug,
    name,
    email,
    password,
    phone,
    active,
    banner_id,
  }: ICreateStoreDTO): Promise<void> {
    const store = this.repository.create({
      slug,
      name,
      email,
      password,
      phone,
      active,
      banner_id,
    });
    await this.repository.save(store);
  }

  // método encontrar usuário por email
  public async findByEmail(email: string): Promise<Store | undefined> {
    const store = await this.repository.findOne({
      where: { email },
    });
    console.log(store);
    return store;
  }

  // método encontrar usuário por telefone
  public async findByPhone(phone: string): Promise<Store | undefined> {
    const store = await this.repository.findOne({
      where: { phone },
    });
    console.log(store);
    return store;
  }

  async findById(id: string): Promise<Store | undefined> {
    const store = await this.repository.findOne(id);
    return store;
  }
}
export { StoreRepository };

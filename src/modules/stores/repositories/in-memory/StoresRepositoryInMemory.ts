import { ICreateStoreDTO } from '@modules/store/dtos/ICreateStoreDTO';
import { Store } from '@modules/store/infra/typeorm/entities/Store';
import { IStoresRepository } from '../IStoresRepository';

class StoresRepositoryInMemory implements IStoresRepository {
  stores: Store[] = [];

  //1. teste de criação do usuário
  async create({
    name,
    slug,
    email,
    password,
    phone,
    isActive,
    isAdmin,
    address_id,
    banner_id,
    openinghours_id,
  }: ICreateStoreDTO): Promise<void> {
    const store = new Store();

    Object.assign(store, {
      name,
      slug,
      email,
      password,
      phone,
      isActive,
      isAdmin,
      address_id,
      banner_id,
      openinghours_id,
    });
    this.stores.push(store);
  }

  //2. teste de verificação de cadastro de usuário já existente
  async findByEmail(email: string): Promise<Store | undefined> {
    return this.stores.find((store) => store.email === email);
  }

  //3. teste de verificação de
  async findById(id: string): Promise<Store | undefined> {
    return this.stores.find((store) => store.id === id);
  }
}
export { StoresRepositoryInMemory };

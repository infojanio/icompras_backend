import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';
import { ITenantsRepository } from '@modules/tenants/repositories/ITenantsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListByCityTenantsUseCase {
  constructor(
    @inject('TenantsRepository')
    private tenantsRepository: ITenantsRepository,
  ) {}

  async execute({ name, city_id }): Promise<Tenant[]> {
    const tenants = await this.tenantsRepository.listByCity(name, city_id);
    console.log('UseCase=', tenants); //lista produtos por subcategoria
    return tenants;
  }
}

export { ListByCityTenantsUseCase };

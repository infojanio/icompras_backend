import { inject, injectable } from 'tsyringe';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';
import { ITenantsRepository } from '@modules/tenants/repositories/ITenantsRepository';

@injectable()
class ListByIdTenantsUseCase {
  constructor(
    @inject('TenantsRepository')
    private tenantsRepository: ITenantsRepository,
  ) {}

  async execute({ id }): Promise<Tenant> {
    const tenant = await this.tenantsRepository.listById(id);
    console.log('UseCase=', tenant); //lista o produto por id
    return tenant;
  }
}

export { ListByIdTenantsUseCase };

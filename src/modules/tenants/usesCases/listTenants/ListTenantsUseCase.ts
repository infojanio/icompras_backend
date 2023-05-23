import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';
import { ITenantsRepository } from '@modules/tenants/repositories/ITenantsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListTenantsUseCase {
  constructor(
    @inject('TenantsRepository')
    private tenantsRepository: ITenantsRepository,
  ) {}

  async execute(): Promise<Tenant[]> {
    const tenants = await this.tenantsRepository.list();
    return tenants;
  }
}

export { ListTenantsUseCase };

import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';
import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListByTenantCompaniesUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({ name, tenant_id }): Promise<Company[]> {
    const companies = await this.companiesRepository.listByTenant(
      name,
      tenant_id,
    );
    console.log('UseCase=', companies); //lista produtos por subcategoria
    return companies;
  }
}

export { ListByTenantCompaniesUseCase };

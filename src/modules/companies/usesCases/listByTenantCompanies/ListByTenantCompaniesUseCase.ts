import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';
import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';
import { inject, injectable } from 'tsyringe';

import { validate as isUuid } from 'uuid';

@injectable()
class ListByTenantCompaniesUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({ tenant_id }): Promise<Company[]> {
    try {
      if (!tenant_id || !isUuid(tenant_id)) {
        throw new Error('O tenant_id é obrigatório para filtrar');
      }

      const companies = await this.companiesRepository.listByTenant(tenant_id);
      console.log('UseCase=', companies); //lista produtos por subcategoria
      return companies;
    } catch (error) {
      console.log('Erro no Tenant:', error.message);
      throw error;
    }
  }
}

export { ListByTenantCompaniesUseCase };

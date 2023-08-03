import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';
import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';
import { inject, injectable } from 'tsyringe';

import { validate as isUuid } from 'uuid';

@injectable()
class ListByCompanyCategoriesUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({ name, company_id }): Promise<Company[]> {
    try {
      if (!company_id || !isUuid(company_id)) {
        throw new Error('O company_id é obrigatório para filtrar');
      }

      const companies = await this.companiesRepository.listByTenant(
        name,
        company_id,
      );
      console.log('UseCase=', companies); //lista produtos por subcategoria

      return companies;
    } catch (error) {
      console.log('Erro no Tenants:', error.message);
      throw error;
    }
  }
}

export { ListByCompanyCategoriesUseCase };

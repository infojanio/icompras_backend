import { Category_Company } from '@modules/categories/infra/typeorm/entities/Company';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';
import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';
import { inject, injectable } from 'tsyringe';

import { validate as isUuid } from 'uuid';

@injectable()
class ListByCompanyCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ company_id, category_id }): Promise<Company[]> {
    try {
      if (!company_id || !isUuid(company_id)) {
        throw new Error('O company_id é obrigatório para filtrar');
      }

      const categories = await this.categoriesRepository.listByTenant(
        company_id,
        category_id,
      );
      console.log('UseCase=', categories); //lista produtos por subcategoria

      return categories;
    } catch (error) {
      console.log('Erro no Tenants:', error.message);
      throw error;
    }
  }
}

export { ListByCompanyCategoriesUseCase };

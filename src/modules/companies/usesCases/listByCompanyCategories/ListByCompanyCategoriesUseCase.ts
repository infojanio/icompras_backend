import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';
import { Category } from '@modules/products/infra/typeorm/entities/Category';
import { ICategoriesRepository } from '@modules/products/repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListByCompanyCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, category_id }): Promise<Category[]> {
    const categories = await this.categoriesRepository.listByCategory(
      name,
      category_id,
    );
    console.log('UseCase=', categories); //lista produtos por subcategoria
    return categories;
  }
}

export { ListByCompanyCategoriesUseCase };

import { SubCategory } from '@modules/products/infra/typeorm/entities/SubCategory';
import { ISubCategoriesRepository } from '@modules/products/repositories/ISubCategoriesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListSubCategoriesUseCase {
  constructor(
    @inject('SubCategoriesRepository')
    private subcategoriesRepository: ISubCategoriesRepository,
  ) {}

  async execute(): Promise<SubCategory[]> {
    const subcategories = await this.subcategoriesRepository.list();
    return subcategories;
  }
}

export { ListSubCategoriesUseCase };

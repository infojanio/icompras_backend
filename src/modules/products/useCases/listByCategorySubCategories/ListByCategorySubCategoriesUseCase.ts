import { SubCategory } from '@modules/products/infra/typeorm/entities/SubCategory';
import { ISubCategoriesRepository } from '@modules/products/repositories/ISubCategoriesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListByCategorySubCategoriesUseCase {
  constructor(
    @inject('SubCategoriesRepository')
    private subcategoriesRepository: ISubCategoriesRepository,
  ) {}

  async execute({ name, category_id }): Promise<SubCategory[]> {
    const subcategories = await this.subcategoriesRepository.listByCategory(
      name,
      category_id,
    );
    console.log('UseCase=', subcategories); //lista produtos por subcategoria
    return subcategories;
  }
}

export { ListByCategorySubCategoriesUseCase };

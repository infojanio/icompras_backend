import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { ICategoriesRepository } from '@modules/products/repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';
import { Category } from '@modules/products/infra/typeorm/entities/Category';

@injectable()
class ListByIdCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ id }): Promise<Category> {
    const category = await this.categoriesRepository.listById(id);
    console.log('UseCase=', category); //lista o produto por id
    return category;
  }
}

export { ListByIdCategoriesUseCase };

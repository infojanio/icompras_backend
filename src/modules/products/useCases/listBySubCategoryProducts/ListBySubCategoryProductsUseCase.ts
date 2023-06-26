import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListBySubCategoryProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ name }): Promise<Product[]> {
    const products = await this.productsRepository.listBySubCategory(name);
    return products;
  }
}

export { ListBySubCategoryProductsUseCase };

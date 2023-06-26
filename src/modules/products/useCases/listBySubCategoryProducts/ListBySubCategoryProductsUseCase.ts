import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListBySubCategoryProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ subcategory_id }): Promise<Product[]> {
    const products = await this.productsRepository.listBySubCategory(
      subcategory_id,
    );
    return products;
  }
}

export { ListBySubCategoryProductsUseCase };

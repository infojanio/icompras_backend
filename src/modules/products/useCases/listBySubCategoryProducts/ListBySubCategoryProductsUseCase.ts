import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListBySubCategoryProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ name, subcategory_id }): Promise<Product[]> {
    const products = await this.productsRepository.listBySubCategory(
      name,
      subcategory_id,
    );
    console.log('UseCase=', products); //lista produtos por subcategoria
    return products;
  }
}

export { ListBySubCategoryProductsUseCase };

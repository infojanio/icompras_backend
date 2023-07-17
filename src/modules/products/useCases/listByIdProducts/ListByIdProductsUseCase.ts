import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListByIdProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ id }): Promise<Product> {
    const product = await this.productsRepository.listById(id);
    console.log('UseCase=', product); //lista o produto por id
    return product;
  }
}

export { ListByIdProductsUseCase };

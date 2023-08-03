import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name?: string;
  subcategory_id?: string;
}
@injectable()
class ListAvailableProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ name, subcategory_id }: IRequest): Promise<Product[]> {
    const products = await this.productsRepository.findAvailable(
      name,
      subcategory_id,
    );
    //estou usando o console.log pq não consegui fazer retornar no Insomnia
    console.log('UseCase=', products); //lista productos disponíveis
    return products;
  }
}
export { ListAvailableProductsUseCase };

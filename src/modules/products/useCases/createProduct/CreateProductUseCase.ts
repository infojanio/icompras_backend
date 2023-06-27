import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
  available: boolean;
  subcategory_id: string;
  company_id: string;
  tenant_id: string;
}

@injectable()
class CreateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({
    name,
    price,
    quantity,
    available,
    subcategory_id,
    company_id,
    tenant_id,
  }: IRequest): Promise<Product> {
    //Verifica se o nome já foi cadastrado
    const productAlreadyExists = await this.productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError('Product already exists!');
    }

    const product = await this.productsRepository.create({
      name,
      price,
      quantity,
      available,
      subcategory_id,
      company_id,
      tenant_id,
    });

    return product;
  }
}
export { CreateProductUseCase };

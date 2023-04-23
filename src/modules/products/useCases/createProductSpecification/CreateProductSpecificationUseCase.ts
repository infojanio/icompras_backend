import { inject, injectable } from 'tsyringe';
import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { ISpecificationsRepository } from '@modules/products/repositories/ISpecificationsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  product_id: string;
  specifications_id: string[];
}

@injectable()
class CreateProductSpecificationUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ product_id, specifications_id }: IRequest): Promise<Product> {
    const productExists = await this.productsRepository.findById(product_id);

    if (!productExists) {
      throw new AppError('Products does not exists!');
    }

    const specifications = await this.specificationsRepository.findByIds(
      specifications_id,
    );

    productExists.specifications = specifications;
    await this.productsRepository.create(productExists);
    return productExists;
  }
}

export { CreateProductSpecificationUseCase };

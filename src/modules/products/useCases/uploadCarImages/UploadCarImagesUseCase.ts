import { IProductsImagesRepository } from '@modules/products/repositories/IProductsImagesRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  product_id: string;
  images_name: string[];
}

@injectable()
class UploadProductImagesUseCase {
  constructor(
    @inject('ProductsImagesRepository')
    private productsImagesRepository: IProductsImagesRepository,
  ) {}

  async execute({ product_id, images_name }: IRequest): Promise<void> {
    images_name.map(async (image) => {
      await this.productsImagesRepository.create(product_id, image);
    });
  }
}

export { UploadProductImagesUseCase };

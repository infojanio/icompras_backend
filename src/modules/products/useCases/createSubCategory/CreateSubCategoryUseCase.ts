import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ISubCategoriesRepository } from '@modules/products/repositories/ISubCategoriesRepository';

interface IRequest {
  name: string;
  image: string;
  category_id: string;
}

@injectable()
class CreateSubCategoryUseCase {
  constructor(
    @inject('SubCategoriesRepository')
    private subcategoriesRepository: ISubCategoriesRepository,
  ) {}

  async execute({ name, image, category_id }: IRequest): Promise<void> {
    //verifica se a categoria já existe
    const subcategoryAlreadyExists = await this.subcategoriesRepository.findByName(
      name,
    );
    if (subcategoryAlreadyExists) {
      throw new AppError('SubCategory Already Exists!');
    }

    await this.subcategoriesRepository.create({
      name,
      image,
      category_id,
    });
  }
}

export { CreateSubCategoryUseCase };

import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ICategoriesRepository } from '@modules/products/repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  image: string;
  tenant_id: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, image, tenant_id }: IRequest): Promise<void> {
    //verifica se a categoria já existe
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );
    if (categoryAlreadyExists) {
      throw new AppError('Category Already Exists!');
    }

    await this.categoriesRepository.create({
      name,
      image,
      tenant_id,
    });
  }
}

export { CreateCategoryUseCase };

import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ISpecificationsRepository } from '@modules/products/repositories/ISpecificationsRepository';

interface IRequest {
  description: string;
  expiration_date;
  unity;
  weight;
  brand;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ description }: IRequest): Promise<void> {
    //verifica se a especificação já existe
    const specificationAlreadyExists = await this.specificationsRepository.findByName(
      description,
      expiration_date,
      unity,
      weight,
      brand,
    );
    if (specificationAlreadyExists) {
      throw new AppError('Specification already exists!');
    }

    await this.specificationsRepository.create({
      description,
      expiration_date,
      unity,
      weight,
      brand,
    });
  }
}
export { CreateSpecificationUseCase };

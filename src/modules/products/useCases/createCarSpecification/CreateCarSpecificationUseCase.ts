import { inject, injectable } from 'tsyringe';
import { Car } from '@modules/products/infra/typeorm/entities/Product';
import { ICarsRepository } from '@modules/products/repositories/ICarsRepository';
import { ISpecificationsRepository } from '@modules/products/repositories/ISpecificationsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,

    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError('Cars does not exists!');
    }

    const specifications = await this.specificationsRepository.findByIds(
      specifications_id,
    );

    carExists.specifications = specifications;
    await this.carsRepository.create(carExists);
    return carExists;
  }
}

export { CreateCarSpecificationUseCase };

import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';
import { inject, injectable } from 'tsyringe';
import { City } from '@modules/cities/infra/typeorm/entities/City';

@injectable()
class ListByIdCitiesUseCase {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  async execute({ id }): Promise<City> {
    const city = await this.citiesRepository.listById(id);
    console.log('UseCase=', city); //lista o produto por id
    return city;
  }
}

export { ListByIdCitiesUseCase };

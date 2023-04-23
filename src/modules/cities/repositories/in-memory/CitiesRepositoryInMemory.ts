import { ICreateCityDTO } from '@modules/cities/dtos/ICreateCityDTO';
import { City } from '@modules/cities/infra/typeorm/entities/City';
import { ICitiesRepository } from '../ICitiesRepository';

class CitiesRepositoryInMemory implements ICitiesRepository {
  cities: City[] = [];

  //1. teste de criação do usuário
  async create({
    name,
    uf,
    cep,
    longitude,
    latitude,
  }: ICreateCityDTO): Promise<void> {
    const city = new City();

    Object.assign(city, {
      name,
      uf,
      cep,
      longitude,
      latitude,
    });
    this.cities.push(city);
  }

  //2. teste de verificação de cadastro de usuário já existente
  async findByName(name: string): Promise<City | undefined> {
    return this.cities.find((city) => city.name === name);
  }

  //3. teste de verificação de
  async findById(id: string): Promise<City | undefined> {
    return this.cities.find((city) => city.id === id);
  }
}
export { CitiesRepositoryInMemory };

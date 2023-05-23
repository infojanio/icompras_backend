import { getRepository, Repository } from 'typeorm';
import { ICreateCityDTO } from '@modules/cities/dtos/ICreateCityDTO';
import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';
import { City } from '@modules/cities/infra/typeorm/entities/City';

class CitiesRepository implements ICitiesRepository {
  private repository: Repository<City>;

  constructor() {
    this.repository = getRepository(City);
  }

  async create({ name, uf, cep, isActive }: ICreateCityDTO): Promise<void> {
    const city = this.repository.create({
      name,
      uf,
      cep,
      isActive,
    });
    await this.repository.save(city);
  }

  // método encontrar cidade por nome
  public async findByName(name: string): Promise<City | undefined> {
    const city = await this.repository.findOne({
      where: { name },
    });
    // console.log(city);
    return city;
  }

  async list(): Promise<City[]> {
    const cities = await this.repository.find();
    return cities;
  }

  async findById(id: string): Promise<City | undefined> {
    const city = await this.repository.findOne(id);
    return city;
  }
}
export { CitiesRepository };

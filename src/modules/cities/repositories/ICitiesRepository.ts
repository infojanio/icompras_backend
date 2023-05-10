import { ICreateCityDTO } from '@modules/cities/dtos/ICreateCityDTO';
import { City } from '@modules/cities/infra/typeorm/entities/City';

interface ICitiesRepository {
  create(data: ICreateCityDTO): Promise<void>;
  findByName(name: string): Promise<City | undefined>;
  list(): Promise<City[]>;
  findById(id: string): Promise<City | undefined>;
}
export { ICitiesRepository };

import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { ICreateCompanyDTO } from '../dtos/ICreateCompanyDTO';
//DTO -> Data Transfer Object

interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<void>;

  findByEmail(email: string): Promise<Company | undefined>;
  findById(id: string): Promise<Company | undefined>;

  list(): Promise<Company[]>;
  listByCity(name?: string, city_id?: string): Promise<Company[]>;
  listById(id?: string, name?: string, city_id?: string): Promise<Company>;
}
export { ICompaniesRepository };

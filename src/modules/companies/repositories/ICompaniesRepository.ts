import { ICreateCompanyDTO } from '@modules/companies/dtos/ICreateCompanyDTO';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';

interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<void>;
  findByEmail(email: string): Promise<Company | undefined>;
  list(): Promise<Company[]>;
  findById(id: string): Promise<Company | undefined>;
}
export { ICompaniesRepository };

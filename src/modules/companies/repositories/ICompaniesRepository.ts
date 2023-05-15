import { ICreateCompanyDTO } from '@modules/companies/dtos/ICreateCompanyDTO';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';

interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<void>;
  findByName(name: string): Promise<Company | undefined>;
  findById(id: string): Promise<Company | undefined>;
}
export { ICompaniesRepository };

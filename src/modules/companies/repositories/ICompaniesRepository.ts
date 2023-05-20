import { ICreateCompanyDTO } from '@modules/companies/dtos/ICreateCompanyDTO';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';

interface IStoresRepository {
  create(data: ICreateCompanyDTO): Promise<void>;
  findByEmail(email: string): Promise<Company | undefined>;
  findById(id: string): Promise<Company | undefined>;
}
export { IStoresRepository };

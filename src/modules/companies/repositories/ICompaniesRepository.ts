import { ICreateCompanyDTO } from '@modules/companies/dtos/ICreateCompanyDTO';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';

interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<void>;
  findByEmail(email: string): Promise<Company | undefined>;
  list(): Promise<Company[]>;

  listByTenant(name?: string, tenant_id?: string): Promise<Company[]>;
  listById(id?: string, name?: string, tenant_id?: string): Promise<Company>;
  findAvailable(
    id?: string,
    name?: string,
    tenant_id?: string,
  ): Promise<Company[]>;

  findById(id: string): Promise<Company | undefined>;
}
export { ICompaniesRepository };

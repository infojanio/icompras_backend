import { ICreateTenantDTO } from '@modules/tenants/dtos/ICreateTenantDTO';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';

interface ITenantsRepository {
  create(data: ICreateTenantDTO): Promise<void>;
  findByName(name: string): Promise<Tenant | undefined>;
  list(): Promise<Tenant[]>;
  listById(id: string): Promise<Tenant | undefined>;
  listByCity(name?: string, city_id?: string): Promise<Tenant[]>;

  findById(id: string): Promise<Tenant | undefined>;
}
export { ITenantsRepository };

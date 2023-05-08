import { ICreateTenantDTO } from '@modules/tenants/dtos/ICreateTenantDTO';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';
import { ITenantsRepository } from '../ITenantsRepository';

class TenantsRepositoryInMemory implements ITenantsRepository {
  tenants: Tenant[] = [];

  //1. teste de criação do usuário
  async create({ name, image }: ICreateTenantDTO): Promise<void> {
    const tenant = new Tenant();

    Object.assign(tenant, {
      name,
      image,
    });
    this.tenants.push(tenant);
  }

  //2. teste de verificação de cadastro de usuário já existente
  async findByName(name: string): Promise<Tenant | undefined> {
    return this.tenants.find((tenant) => tenant.name === name);
  }

  //3. teste de verificação de
  async findById(id: string): Promise<Tenant | undefined> {
    return this.tenants.find((tenants) => tenants.id === id);
  }

  async list(): Promise<Tenant[]> {
    const all = this.tenants;
    return all;
  }
}
export { TenantsRepositoryInMemory };

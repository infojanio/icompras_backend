import { getRepository, Repository } from 'typeorm';
import { ICreateTenantDTO } from '@modules/tenants/dtos/ICreateTenantDTO';
import { ITenantsRepository } from '@modules/tenants/repositories/ITenantsRepository';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';

class TenantsRepository implements ITenantsRepository {
  private repository: Repository<Tenant>;

  constructor() {
    this.repository = getRepository(Tenant);
  }

  async create({ name, image, isActive }: ICreateTenantDTO): Promise<void> {
    const tenant = this.repository.create({
      name,
      image,
      isActive,
    });
    await this.repository.save(tenant);
  }

  // método encontrar cidade por nome
  public async findByName(name: string): Promise<Tenant | undefined> {
    const tenant = await this.repository.findOne({
      where: { name },
    });
    // console.log(tenant);
    return tenant;
  }

  async list(): Promise<Tenant[]> {
    const tenants = await this.repository.find();
    return tenants;
  }

  async findById(id: string): Promise<Tenant | undefined> {
    const tenant = await this.repository.findOne(id);
    return tenant;
  }
}
export { TenantsRepository };

import { getRepository, Repository } from 'typeorm';
import { validate as isUuid } from 'uuid';

import { ICreateCompanyDTO } from '@modules/companies/dtos/ICreateCompanyDTO';
import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';

class CompaniesRepository implements ICompaniesRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = getRepository(Company);
  }

  async create({
    name,
    slug,
    email,
    cnpj,
    logo,
    phone,
    isActive,
    openinghours_id,
    tenant_id,
    city_id,
    categories,
    id,
  }: ICreateCompanyDTO): Promise<void> {
    const company = this.repository.create({
      name,
      slug,
      email,
      cnpj,
      logo,
      phone,
      isActive,
      openinghours_id,
      tenant_id,
      city_id,
      categories,
      id,
    });
    await this.repository.save(company);
  }

  // método encontrar usuário por nome
  public async findByName(name: string): Promise<Company | undefined> {
    const company = await this.repository.findOne({
      where: { name },
    });
    console.log(company);
    return company;
  }

  // método encontrar usuário por email
  public async findByEmail(email: string): Promise<Company | undefined> {
    const company = await this.repository.findOne({
      where: { email },
    });
    console.log(company);
    return company;
  }

  async listByTenant(
    //  id: string,
    name?: string,
    tenant_id?: string,
  ): Promise<Company[]> {
    try {
      if (!tenant_id || !isUuid(tenant_id)) {
        throw new Error('O tenant_id é obrigatório para filtrar');
      }
      const companiesQuery = await this.repository
        .createQueryBuilder('company')
        .leftJoinAndSelect('company.tenant', 'tenant')
        .where('tenant.id = :tenant_id', { tenant_id });

      const companies = await companiesQuery.getMany();

      return companies;
    } catch (error) {
      console.log('Erro no Tenant:', error.message);
      throw error;
    }
  }

  async listByCity(
    //  id: string,
    name?: string,
    city_id?: string,
  ): Promise<Company[]> {
    try {
      if (!city_id || !isUuid(city_id)) {
        throw new Error('O city_id é obrigatório para filtrar');
      }
      const companiesQuery = await this.repository
        .createQueryBuilder('company')
        .leftJoinAndSelect('company.city', 'city')
        .where('city.id = :city_id', { city_id });

      const companies = await companiesQuery.getMany();
      console.log(companies);
      return companies;
    } catch (error) {
      console.log('Erro no City:', error.message);
      throw error;
    }
  }

  // Encontra todos os produtos disponíveis
  async findAvailable(name?: string, tenant_id?: string): Promise<Company[]> {
    const companiesQuery = await this.repository
      .createQueryBuilder('c')
      .where('isActive = :isActive', { isActive: true });

    //busca produtos disponíveis pela subcategoria
    if (tenant_id) {
      companiesQuery.andWhere('tenant_id = :tenant_id', {
        tenant_id,
      });
    }

    const companies = await companiesQuery.getMany();
    // console.log(products); //No insominia não retorna os dados filtrados
    return companies;
  }

  async listById(id?: string): Promise<Company> {
    // const products = await this.repository.find({ subcategory_id });

    const companiesQuery = await this.repository
      .createQueryBuilder('company')
      .where('company.id = :id', { id });

    const companies = await companiesQuery.getOneOrFail();

    return companies;
  }

  async findById(id: string): Promise<Company | undefined> {
    const company = await this.repository.findOne(id);
    return company;
  }

  async list(): Promise<Company[]> {
    const companies = await this.repository.find();
    return companies;
  }
}
export { CompaniesRepository };

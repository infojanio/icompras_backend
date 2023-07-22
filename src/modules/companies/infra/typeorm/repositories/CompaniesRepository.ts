import { getRepository, Repository } from 'typeorm';
import { ICreateCompanyDTO } from '@modules/companies/dtos/ICreateCompanyDTO';
import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';

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

  //ATENÇÃO: O método findAvailable retorna o filtro no console.log, mas não retorna no Insominia
  async listByCity(name?: string, city_id?: string): Promise<Company[]> {
    // const products = await this.repository.find({ subcategory_id });

    const companiesQuery = await this.repository
      .createQueryBuilder('company')
      .leftJoinAndSelect('company.city', 'city')
      .where('city.id = :city_id', { city_id });

    const companies = await companiesQuery.getMany();

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

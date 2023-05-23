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

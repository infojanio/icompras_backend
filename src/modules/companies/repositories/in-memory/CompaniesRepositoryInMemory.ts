import { ICreateCompanyDTO } from '@modules/companies/dtos/ICreateCompanyDTO';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { ICompaniesRepository } from '../ICompaniesRepository';

class CompaniesRepositoryInMemory implements ICompaniesRepository {
  companies: Company[] = [];

  //1. teste de criação do usuário
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
    const company = new Company();

    Object.assign(company, {
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
    this.companies.push(company);
  }

  //2. teste de verificação de cadastro de usuário já existente
  async findByEmail(email: string): Promise<Company | undefined> {
    return this.companies.find((company) => company.email === email);
  }

  //3. teste de verificação de
  async findById(id: string): Promise<Company | undefined> {
    return this.companies.find((company) => company.id === id);
  }
}
export { CompaniesRepositoryInMemory };

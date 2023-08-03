import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListByCityCompaniesUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({ name, city_id }): Promise<Company[]> {
    const companies = await this.companiesRepository.listByCity(name, city_id);
    console.log('UseCase=', companies); //lista produtos por subcategoria
    return companies;
  }
}

export { ListByCityCompaniesUseCase };

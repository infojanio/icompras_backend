import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { ICategoriesRepository } from '@modules/products/repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';

@injectable()
class ListByIdCompaniesUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({ id }): Promise<Company> {
    const company = await this.companiesRepository.listById(id);
    console.log('UseCase=', company); //lista o produto por id
    return company;
  }
}

export { ListByIdCompaniesUseCase };

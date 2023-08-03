import { inject, injectable } from 'tsyringe';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';
import { ICategoriesRepository } from '@modules/products/repositories/ICategoriesRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  company_id: string;
  category_id: string[];
}

@injectable()
class CreateCompanyCategoryUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,

    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ company_id, category_id }: IRequest): Promise<Company> {
    const companyExists = await this.companiesRepository.findById(company_id);

    if (!companyExists) {
      throw new AppError('Empresa não existe!');
    }

    const categories = await this.categoriesRepository.findByIds(category_id);

    companyExists.categories = categories; //atualiza as novas categorias inclusas
    await this.companiesRepository.create(companyExists);
    return companyExists;
  }
}

export { CreateCompanyCategoryUseCase };

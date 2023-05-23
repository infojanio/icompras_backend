import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ICreateCompanyDTO } from '@modules/companies/dtos/ICreateCompanyDTO';
import { ICompaniesRepository } from '@modules/companies/repositories/ICompaniesRepository';

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({
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
    //Não permitir cadastrar empresa com mesmo email
    const companyAlreadyExists = await this.companiesRepository.findByEmail(
      email,
    );

    if (companyAlreadyExists) {
      throw new AppError('Company already exists!');
    }

    await this.companiesRepository.create({
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
  }
}
export { CreateCompanyUseCase };

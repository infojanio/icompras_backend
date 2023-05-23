import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ICreateTenantDTO } from '@modules/tenants/dtos/ICreateTenantDTO';
import { ITenantsRepository } from '@modules/tenants/repositories/ITenantsRepository';

@injectable()
class CreateTenantUseCase {
  constructor(
    @inject('TenantsRepository')
    private tenantsRepository: ITenantsRepository,
  ) {}

  async execute({ name, image, isActive }: ICreateTenantDTO): Promise<void> {
    //Não permitir cadastrar usuário com mesmo email
    const tenantAlreadyExists = await this.tenantsRepository.findByName(name);

    if (tenantAlreadyExists) {
      throw new AppError('Tenant already exists!');
    }

    await this.tenantsRepository.create({
      name,
      image,
      isActive,
    });
  }
}
export { CreateTenantUseCase };

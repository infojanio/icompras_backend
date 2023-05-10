import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ICreateStoreDTO } from '@modules/store/dtos/ICreateStoreDTO';
import { IStoresRepository } from '@modules/store/repositories/IStoresRepository';

@injectable()
class CreateStoreUseCase {
  constructor(
    @inject('StoresRepository')
    private storesRepository: IStoresRepository,
  ) {}

  async execute({
    name,
    slug,
    email,
    password,
    phone,
    isActive,
    isAdmin,
    address_id,
    banner_id,
    openinghours_id,
  }: ICreateStoreDTO): Promise<void> {
    //Não permitir cadastrar usuário com mesmo email
    const storeAlreadyExists = await this.storesRepository.findByEmail(email);

    if (storeAlreadyExists) {
      throw new AppError('Store already exists!');
    }

    //cryptografia da senha
    const passwordHash = await hash(password, 8);

    await this.storesRepository.create({
      name,
      slug,
      email,
      password,
      phone,
      isActive,
      isAdmin,
      address_id,
      banner_id,
      openinghours_id,
    });
  }
}
export { CreateStoreUseCase };

import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    email,
    phone,
    password,
    avatar,
    type,
    isActive,
    isAdmin,
  }: ICreateUserDTO): Promise<void> {
    //Não permitir cadastrar usuário com mesmo email
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists!');
    }

    //cryptografia da senha
    const passwordHash = await hash(password, 8);
    const client = 'cliente'; //passa cliente como default

    await this.usersRepository.create({
      name,
      email,
      phone,
      password: passwordHash,
      avatar,
      type: client,
      isActive,
      isAdmin,
    });
  }
}
export { CreateUserUseCase };

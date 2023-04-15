import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  //1. teste de criação do usuário
  async create({ id, name, email, password }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      id,
      name,
      email,
      password,
    });
    this.users.push(user);
  }

  //2. teste de verificação de cadastro de usuário já existente
  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  //3. teste de verificação de
  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  //2. teste de verificação de cadastro de usuário já existente
  async findByPhone(phone: string): Promise<User | undefined> {
    return this.users.find((user) => user.phone === phone);
  }
}
export { UsersRepositoryInMemory };

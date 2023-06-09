import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { User } from '@modules/users/infra/typeorm/entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    phone,
    avatar,
    isActive,
    isAdmin,
    address_id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      phone,
      avatar,
      isActive,
      isAdmin,
      address_id,
    });
    await this.repository.save(user);
  }

  // método encontrar usuário por email
  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: { email },
    });
    console.log(user);
    return user;
  }

  // método encontrar usuário por telefone
  public async findByPhone(phone: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: { phone },
    });
    console.log(user);
    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id);
    return user;
  }
}
export { UsersRepository };

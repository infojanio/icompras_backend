import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { User } from '@modules/users/infra/typeorm/entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
  findByPhone(phone: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}
export { IUsersRepository };

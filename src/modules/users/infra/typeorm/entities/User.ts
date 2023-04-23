import { Address } from '@modules/address/infra/typeorm/entities/Address';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column()
  isActive: boolean;

  @Column()
  isAdmin: boolean;

  //1 cliente pode ter muitos endereços
  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @Column()
  address_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { User };

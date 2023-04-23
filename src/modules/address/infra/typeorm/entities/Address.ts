import { City } from '@modules/cities/infra/typeorm/entities/City';
import { Store } from '@modules/store/infra/typeorm/entities/Store';
import { User } from '@modules/users/infra/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('address')
class Address {
  @PrimaryColumn()
  id: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  complement: string;

  @Column()
  longitude: number;

  @Column()
  latitude: number;

  // muitos endereços para 1 cliente
  @ManyToOne(() => User, (user) => user.addresses)
  user: User;

  // muitos endereços para 1 loja
  @ManyToOne(() => Store, (store) => store.addresses)
  store: Store;

  // muitos endereços para 1 cidade
  @ManyToOne(() => City, (city) => city.addresses)
  city: City;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Address };

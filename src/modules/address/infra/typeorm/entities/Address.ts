import { City } from '@modules/cities/infra/typeorm/entities/City';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';
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

@Entity('addresses')
class Address {
  @PrimaryColumn()
  id: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  complement: string;

  // muitos endereços para 1 cliente
  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: string;

  // muitos endereços para 1 loja
  @ManyToOne(() => Company, (company) => company.addresses)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @Column()
  company_id: string;

  // muitos endereços para 1 cidade
  @ManyToOne(() => City, (city) => city.addresses)
  city: City;

  @Column()
  city_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Address };

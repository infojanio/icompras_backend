import { Address } from '@modules/address/infra/typeorm/entities/Address';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('cities')
class City {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  uf: string;

  @Column()
  cep: string;

  @Column()
  isActive: boolean;

  //1 cidade tem muitos endereços
  @OneToMany(() => Address, (address) => address.city)
  addresses: Address[];

  //1 cidade tem muitos supermercados
  @OneToMany(() => Company, (company) => company.city)
  companies: Company[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { City };

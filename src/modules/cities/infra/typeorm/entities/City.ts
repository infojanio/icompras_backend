import { Address } from '@modules/address/infra/typeorm/entities/Address';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('city')
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
  longitude: number;

  @Column()
  latitude: number;

  @Column()
  isActive: boolean;

  //1 cidade tem muitos endereços
  @OneToMany(() => Address, (address) => address.city)
  addresses: Address[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { City };

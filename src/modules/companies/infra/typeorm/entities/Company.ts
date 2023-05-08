import { Address } from '@modules/address/infra/typeorm/entities/Address';
import { Product } from '@modules/products/infra/typeorm/entities/Product';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { OpeningHours } from './OpeningHours';
import { Banner } from './Banner';

@Entity('companies')
class Company {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  isActive: boolean;

  @Column()
  isAdmin: boolean;

  //1 cliente pode ter muitos endereços
  @OneToMany(() => Address, (address) => address.company)
  addresses: Address[];

  @Column()
  address_id: number;

  //cada 1 supermercado -> 1 horário de atendimento
  @OneToOne(() => Banner)
  @JoinColumn({ name: 'banner_id' })
  banner: Banner;

  @Column()
  banner_id: number;

  //1 cliente pode ter muitos endereços
  @OneToMany(() => Product, (product) => product.stores)
  products: Product[];

  //cada 1 supermercado -> 1 horário de atendimento
  @OneToOne(() => OpeningHours)
  @JoinColumn({ name: 'opening_hours_id' })
  opening_hours: OpeningHours;

  @Column()
  opening_hours_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Company };

/*
    @ManyToOne(() => Banner)
    @JoinColumn({ name: 'banner_id' })
    banner: Banner;
  
    @Column()
    banner_id: string;
  */

/*
    @OneToMany(() => City)
    @JoinColumn({ name: 'city_id' })
    city: City;
  
    @Column()
    city_id: string;
  */

/*
    @OneToOne(() => Address)
    @JoinColumn({ name: 'address_id' })
    address: Address;
  
    @Column()
    address_id: string;
  */

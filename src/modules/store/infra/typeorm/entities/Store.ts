import { Address } from '@modules/address/infra/typeorm/entities/Address';
import { Product } from '@modules/products/infra/typeorm/entities/Product';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('store')
class Store {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  //1 cliente pode ter muitos endereços
  @OneToMany(() => Address, (address) => address.store)
  addresses: Address[];

  @Column()
  address_id: number;

  @Column()
  active: boolean;

  //1 cliente pode ter muitos endereços
  @OneToMany(() => Product, (product) => product.stores)
  products: Product[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Store };

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

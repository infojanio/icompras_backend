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

@Entity('banner')
class Banner {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Banner };

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

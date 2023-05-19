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
import { MapLocation } from '@modules/maplocations/infra/typeorm/entities/MapLocation';

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
  cnpj: string;

  @Column()
  phone: string;

  @Column()
  logo: string;

  @Column()
  isActive: boolean;

    //1 supermercado pode ter muitas localizações
    @OneToMany(() => MapLocation, (maplocation) => maplocation.company)
    maplocations: MapLocation[];

  //1 supermercado pode ter muitos endereços
  @OneToMany(() => Address, (address) => address.company)
  addresses: Address[];
  
  //cada 1 supermercado -> 1 horário de atendimento
  @OneToOne(() => OpeningHours)
  @JoinColumn({ name: 'openinghours_id' })
  openinghours: OpeningHours


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

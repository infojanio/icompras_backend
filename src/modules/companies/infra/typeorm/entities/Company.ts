import { Address } from '@modules/address/infra/typeorm/entities/Address';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { OpeningHours } from './OpeningHours';
import { MapLocation } from '@modules/maplocations/infra/typeorm/entities/MapLocation';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';
import { City } from '@modules/cities/infra/typeorm/entities/City';

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
  logo: string;

  @Column()
  phone: string;

  @Column()
  isActive: boolean;

  //cada 1 supermercado -> 1 horário de atendimento
  @OneToOne(() => OpeningHours)
  @JoinColumn({ name: 'openinghours_id' })
  openinghours: OpeningHours;

  @Column()
  openinghours_id: string;

  //muitos supermercados -> 1 empresa locatária
  @ManyToOne(() => Tenant, (tenant) => tenant.companies)
  @JoinColumn({ name: 'tenant_id' })
  tenant: Tenant;

  @Column()
  tenant_id: string;

  //muitos supermercados -> 1 cidade
  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @Column()
  city_id: string;

  //1 supermercado pode ter muitas localizações
  @OneToMany(() => MapLocation, (maplocation) => maplocation.company)
  maplocations: MapLocation[];

  //1 supermercado pode ter muitos endereços
  @OneToMany(() => Address, (address) => address.company)
  addresses: Address[];

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

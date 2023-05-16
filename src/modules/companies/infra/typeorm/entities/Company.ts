import { Address } from '@modules/address/infra/typeorm/entities/Address';
import { Product } from '@modules/products/infra/typeorm/entities/Product';
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
import { Banner } from './Banner';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';

@Entity('companies')
class Company {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  cnpj: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  isActive: boolean;

  //1 cliente pode ter muitos endereços
  @OneToMany(() => Address, (address) => address.company)
  addresses: Address[];

  @Column()
  address_id: string;

  //cada 1 supermercado -> 1 horário de atendimento
  @OneToOne(() => Banner)
  @JoinColumn({ name: 'banner_id' })
  banner: Banner;

  @Column()
  banner_id: string;

  //1 empresa pode ter muitos produtos
  @OneToMany(() => Product, (product) => product.company)
  products: Product[];

  //cada 1 supermercado -> 1 horário de atendimento
  @OneToOne(() => OpeningHours)
  @JoinColumn({ name: 'openinghours_id' })
  openinghours: OpeningHours;

  @Column()
  openinghours_id: string;

  //cada 1 supermercado -> 1 horário de atendimento
  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenant_id' })
  tenant: Tenant;

  @Column()
  tenant_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Company };

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { SubCategory } from './SubCategory';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';

@Entity('categories')
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  image?: string;

  /*1 categoria -> vários produtos
  @OneToMany(() => Product, (product) => product.categories)
  products: Product[];
  */

  //1 categoria -> várias subcategorias
  @OneToMany(() => SubCategory, (subcategory) => subcategory.category)
  subcategories: SubCategory[];

  @ManyToMany(() => Company, (company) => company.categories)
  companies: Company[];

  //muitas categorias para 1 estabelecimento
  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenant_id' })
  tenant: Tenant;

  @Column()
  tenant_id: string;

  @CreateDateColumn()
  created_at: Date;

  //cria o id
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };

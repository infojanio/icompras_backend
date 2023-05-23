import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { Category } from '@modules/products/infra/typeorm/entities/Category';
import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { SubCategory } from '@modules/products/infra/typeorm/entities/SubCategory';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('tenants')
class Tenant {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  isActive: boolean;

  //1 locatário tem várias subcategorias
  @OneToMany(() => SubCategory, (subcategory) => subcategory.tenant)
  subcategories: SubCategory[];

  //1 locatário tem várias categorias
  @OneToMany(() => Category, (category) => category.tenant)
  categories: Category[];

  //1 locatário tem várias lojas ou supermercados
  @OneToMany(() => Company, (company) => company.tenant)
  companies: Company[];

  //1 locatário tem vários produtos
  @OneToMany(() => Product, (product) => product.tenant)
  products: Product[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Tenant };

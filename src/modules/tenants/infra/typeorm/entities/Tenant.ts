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

@Entity('tenant')
class Tenant {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  isActive: boolean;

  //um tipo locatário tem muitas categorias
  @OneToMany(() => Category, (category) => category.tenant)
  categories: Category[];

  //um tipo locatário tem muitas subcategorias
  @OneToMany(() => SubCategory, (subcategory) => subcategory.tenant)
  subcategories: SubCategory[];

  //um tipo locatário tem muitos produtos
  @OneToMany(() => Product, (product) => product.tenant)
  products: Product[];

  //um tipo locatário tem muitas empresas
  @OneToMany(() => Company, (company) => company.tenant)
  companies: Company[];

  /*1 cidade tem muitos endereços
  @OneToMany(() => Address, (address) => address.city)
  addresses: Address[];
 */

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Tenant };

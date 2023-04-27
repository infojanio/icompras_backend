import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { SubCategory } from './SubCategory';
import { Product } from './Product';

@Entity('categories')
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  image?: string;

  /*
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'subcategory_id' })
  category: Category;
  */

  //1 cliente pode ter muitos endereços
  @OneToMany(() => Product, (product) => product.categories)
  products: Product[];

  //1 categoria pode ter muitas subcategorias
  @OneToMany(() => SubCategory, (subcategory) => subcategory.category)
  subcategories: SubCategory[];

  @Column()
  subcategory_id: string;

  /*
  @ManyToOne(() => SubCategory)
  @JoinColumn({ name: 'subcategory_id' })
  subcategory: SubCategory;
  
  @Column()
  subcategory_id: string;
  */

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

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

  //1 categoria -> vários produtos
  @OneToMany(() => Product, (product) => product.categories)
  products: Product[];

  //1 categoria -> várias subcategorias
  @OneToMany(() => SubCategory, (subcategory) => subcategory.category)
  subcategories: SubCategory[];

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

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Category } from './Category';
import { Specification } from './Specification';
import { Store } from '@modules/stores/infra/typeorm/entities/Store';

@Entity('products')
class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  available: boolean;

  @Column()
  price: number;

  @Column()
  quantity: number;

  // muitos endereços para 1 cliente
  @ManyToOne(() => Category, (category) => category.products)
  categories: Category;

  @Column()
  category_id: string;

  // muitos endereços para 1 cliente
  @ManyToOne(() => Store, (store) => store.products)
  stores: Store;

  @Column()
  store_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.available = true;
    }
  }
}
export { Product };

/*
  //Muitos produtos para 1 categoria
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  category_id: string;
  */

/*
  @ManyToOne(() => Specification)
  @JoinTable({
    name: 'specifications_products',
    joinColumns: [{ name: 'product_id' }],
    inverseJoinColumns: [{ name: 'specification_id' }],
  })
  specifications: Specification[];
*/

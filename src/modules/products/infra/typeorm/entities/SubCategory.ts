import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Category } from './Category';

@Entity('subcategories')
class SubCategory {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  image: string;

  // muitos subcategorias para 1 categoria
  @ManyToOne(() => Category, (category) => category.subcategories)
  category: Category;

  /*
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;
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

export { SubCategory };

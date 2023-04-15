import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('categories')
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  image: string;

  /*
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'subcategory_id' })
  category: Category;

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

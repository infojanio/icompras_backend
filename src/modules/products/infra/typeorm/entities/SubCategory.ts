import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('subcategories')
class SubCategory {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  image: string;

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

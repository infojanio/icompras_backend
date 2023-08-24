import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('categories_company')
class CategoryCompany {
  @PrimaryColumn()
  id: string;

  @Column()
  company_id: string;

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { CategoryCompany };

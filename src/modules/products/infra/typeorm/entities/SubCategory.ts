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
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';

@Entity('subcategories')
class SubCategory {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  image: string;

  // muitos subcategorias -> 1 categoria
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  category_id: string;

  //muitas subcategorias para 1 estabelecimento
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

export { SubCategory };

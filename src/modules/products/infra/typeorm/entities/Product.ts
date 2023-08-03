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
import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { Tenant } from '@modules/tenants/infra/typeorm/entities/Tenant';
import { Score } from './Scores';
import { OrderItem } from '@modules/orders/infra/typeorm/entities/OrderItem';

@Entity('products')
class Product {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  available: boolean;
  //1 produto pode estar em vários itens pedidos
  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems: OrderItem[];

  //vários produtos pertecem 1 subcategoria
  @ManyToOne(() => SubCategory)
  @JoinColumn({ name: 'subcategory_id' })
  subcategory: SubCategory;

  @Column()
  subcategory_id: string;

  //vários produtos pertecem 1 loja
  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @Column()
  company_id: string;

  //vários produtos para 1 estabelecimento
  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenant_id' })
  tenant: Tenant;

  @Column()
  tenant_id: string;

  //1 produto terá varias avaliações
  @OneToMany(() => Score, (score) => score.product)
  scores: Score[];

  @Column()
  image: string;

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

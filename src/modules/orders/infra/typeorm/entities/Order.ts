import { User } from '@modules/users/infra/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('orders')
class Order {
  @PrimaryColumn()
  id: string;

  //muitos pedidos para 1 usuário
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: number;

  @Column()
  store_id: number;

  @Column()
  address_id: number;

  @Column()
  form_payment: string;

  @Column()
  change: number;

  @Column()
  freight: number;

  @Column()
  discount: number;

  @Column()
  subtotal: number;

  @Column()
  total: number;

  @Column()
  order_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Order };

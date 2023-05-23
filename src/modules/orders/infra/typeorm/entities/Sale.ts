import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Order } from './Order';

@Entity('sales')
class Sale {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => Order)
  @JoinColumn()
  order: Order;

  @Column()
  subtotal: number;

  @Column()
  freight: number;

  @Column()
  discount: number;

  @Column()
  change: number;

  @Column()
  total: number;

  @Column()
  payment_status: string;

  @Column()
  payment_method: string;

  @CreateDateColumn()
  payment_date: Date;

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

export { Sale };

import { Company } from '@modules/companies/infra/typeorm/entities/Company';
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
import { Order } from './Order';

@Entity('delivery_status_logs')
class DeliveryStatusLog {
  @PrimaryColumn()
  id: string;

  @Column()
  status: string;

  @Column()
  notes: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // muitos status para 1 pedido
  @ManyToOne(() => Order, (order) => order.deliverystatuslogs)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column()
  order_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { DeliveryStatusLog };

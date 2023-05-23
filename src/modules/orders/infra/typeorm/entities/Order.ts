import { User } from '@modules/users/infra/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { DeliveryStatusLog } from './DeliveryStatusLog';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { OrderItem } from './OrderItem';

@Entity('orders')
class Order {
  @PrimaryColumn()
  id: string;

  //muitos pedidos para 1 usuário
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: string;

  //muitos pedidos para 1 loja
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @Column()
  company_id: string;

  //1 pedido pode ter muitos status log
  @OneToMany(
    () => DeliveryStatusLog,
    (deliverystatuslog) => deliverystatuslog.order,
  )
  deliverystatuslogs: DeliveryStatusLog[];

  @Column()
  deliverystatus_id: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];

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

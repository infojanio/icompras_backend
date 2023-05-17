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

  //muitos pedidos são feitos em 1 loja
  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @Column()
  company_id: string;

  /*
  //1 pedido pode ter 1 status
  @OneToOne(() => DeliveryStatus)
  @JoinColumn({ name: 'delivery_status_id' })
  delivery_status: DeliveryStatus;

  @Column()
  delivery_status_id: string;
  
  //1 pedido pode ter 1 tipo pagamento
  @OneToOne(() => Payment)
  @JoinColumn({ name: 'payment_id' })
  payment: Payment;
    
  @Column()
  payment_type: string;
  */

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

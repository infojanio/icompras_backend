import { Address } from '@modules/address/infra/typeorm/entities/Address';
import { MapLocation } from '@modules/maplocations/infra/typeorm/entities/MapLocation';
import { Order } from '@modules/orders/infra/typeorm/entities/Order';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column()
  type: 'funcionario' | 'cliente';

  @Column()
  isActive: boolean;

  @Column()
  isAdmin: boolean;

  //1 cliente pode ter muitos endereços
  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  //1 cliente pode fazer muitos pedidos
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  //1 cliente pode ter muitos endereços
  @OneToMany(() => MapLocation, (maplocation) => maplocation.user)
  maplocations: MapLocation[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { User };

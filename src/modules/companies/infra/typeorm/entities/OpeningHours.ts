import { Address } from '@modules/address/infra/typeorm/entities/Address';
import { Product } from '@modules/products/infra/typeorm/entities/Product';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('opening_hours')
class OpeningHours {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  operation_week: string;

  @Column()
  operation_weekend: string;

  @Column()
  notice: string;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { OpeningHours };

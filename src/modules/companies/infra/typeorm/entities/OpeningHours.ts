import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Company } from './Company';

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

  @OneToOne(() => Company, (company) => company.openinghours)
  company: Company;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { OpeningHours };

import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
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
  status: string;

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

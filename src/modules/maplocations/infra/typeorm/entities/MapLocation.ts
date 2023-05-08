import { User } from '@modules/users/infra/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('maplocations')
class MapLocation {
  @PrimaryColumn()
  id: string;

  @Column()
  avatar: string;

  @Column()
  longitude: number;

  @Column()
  latitude: number;

  @Column()
  isActive: boolean;

  //muitas localizações tem um cliente
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { MapLocation };

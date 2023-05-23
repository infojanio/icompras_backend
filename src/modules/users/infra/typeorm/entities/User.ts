import { Address } from '@modules/address/infra/typeorm/entities/Address';
import { MapLocation } from '@modules/maplocations/infra/typeorm/entities/MapLocation';
import { Score } from '@modules/products/infra/typeorm/entities/Scores';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
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
  type: string;

  @Column()
  isActive: boolean;
  default: true;

  @Column()
  isAdmin: boolean;

  //1 cliente pode ter muitos endereços
  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  //1 cliente pode ter muitas localizações
  @OneToMany(() => MapLocation, (maplocation) => maplocation.user)
  maplocations: MapLocation[];

  //1 usuário fará varias avaliações
  @OneToMany(() => Score, (score) => score.user)
  scores: Score[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { User };

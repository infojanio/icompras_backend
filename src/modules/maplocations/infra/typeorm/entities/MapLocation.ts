import { Company } from '@modules/companies/infra/typeorm/entities/Company';
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

  //várias localizações tem um cliente
  @ManyToOne(() => User, (user) => user.maplocations)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  user_id: string;


    //várias localizações tem um supermercado
    @ManyToOne(() => Company, (company) => company.maplocations)
    @JoinColumn({ name: 'company_id' })
    company: Company  
    
    @Column()
    company_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { MapLocation };

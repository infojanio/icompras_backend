import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
/*
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  avatar?: string;
  city_id: string;
  cep?: number;
  district: string;
  street: string;
  complement?: string;
  longitude?: number;
  latitude?: number;
  isActive: boolean;
  isAdmin: boolean;
*/
@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  avatar: string;

  /*
  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @Column()
  city_id: string;
*/

  @Column()
  isAdmin: boolean;

  /*
  @ManyToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column()
  address_id: string;
*/

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { User };

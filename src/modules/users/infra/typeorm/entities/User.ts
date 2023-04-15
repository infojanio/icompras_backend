import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
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
  cep: number;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  complement: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  isActive: boolean;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { User };

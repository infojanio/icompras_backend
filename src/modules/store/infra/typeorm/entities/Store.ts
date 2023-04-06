import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('store')
class Store {
  @PrimaryColumn()
  id: string;

  @Column()
  slug: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  active: boolean;

  @Column()
  service_day: string;

  @Column()
  service_hour: string;

  /*
  @ManyToOne(() => Banner)
  @JoinColumn({ name: 'banner_id' })
  banner: Banner;

  @Column()
  banner_id: string;
*/

  /*
  @OneToMany(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @Column()
  city_id: string;
*/

  /*
  @OneToOne(() => Address)
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
export { Store };

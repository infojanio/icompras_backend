import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
  } from 'typeorm';
  import { v4 as uuidV4 } from 'uuid';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { Product } from './Product';
  
  @Entity('scores')
  class Score {
    @PrimaryColumn()
    id?: string;
  
    @Column()
    star: number;
    
    @Column()
    comment: string;

    @Column()
    result: number;
    
    @Column()
    date_score: Date;
   
    //muitas avaliações para 1 usuário
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
    
    @Column()
    user_id: string;
    
    //muitas avaliações para 1 produto
    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;
    
    @Column()
    product_id: string;
     
    @CreateDateColumn()
    created_at: Date;

  
    //cria o id
    constructor() {
      if (!this.id) {
        this.id = uuidV4();
      }
    }
  }
  
  export { Score };
  

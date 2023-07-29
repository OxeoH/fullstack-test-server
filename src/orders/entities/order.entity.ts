import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Column()
  frequency: string;

  @Column()
  allergy: string;

  @Column()
  cleaning: string;

  @Column()
  address: string;

  @Column()
  schedule: string;
}

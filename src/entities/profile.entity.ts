import { Entity, Column, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { BaseEntity } from './abstract/base.entity';

@Entity()
export class Profile extends BaseEntity {
  @Column()
  phoneNumber: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}

import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { Profile } from './profile.entity';
import { BaseEntity } from './abstract/base.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;

  @Column()
  profileId: number;
}

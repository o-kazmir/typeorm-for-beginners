import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable, OneToMany
} from 'typeorm';
import { Tag } from './tag.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @ManyToMany(() => Tag, (tag) => tag.posts)
  @JoinTable({
    name: 'posts_tags'
  })
  tags: Tag[];
}

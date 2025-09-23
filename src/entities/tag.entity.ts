import { Entity, Column, ManyToMany } from 'typeorm';
import { Post } from './post.entity';
import { BaseEntity } from './abstract/base.entity';

@Entity()
export class Tag extends BaseEntity {
  @Column()
  name: string;

  @ManyToMany(() => Post, (post) => post.tags)
  posts: Post[];
}

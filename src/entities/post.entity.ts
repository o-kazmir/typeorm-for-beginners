import { Entity, ManyToMany, JoinTable } from 'typeorm';
import { Tag } from './tag.entity';
import { BaseContentEntity } from './abstract/base-content.entity';

@Entity()
export class Post extends BaseContentEntity {
  @ManyToMany(() => Tag, (tag) => tag.posts)
  @JoinTable({
    name: 'posts_tags',
  })
  tags: Tag[];
}

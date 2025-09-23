import { BaseEntity } from './base.entity';
import { Column } from 'typeorm';

export abstract class BaseContentEntity extends BaseEntity {
  @Column()
  body: string;

  @Column({ default: false })
  isPublished: boolean;
}
import { Entity } from 'typeorm';
import { BaseContentEntity } from './abstract/base-content.entity';

@Entity()
export class Comment extends BaseContentEntity {}

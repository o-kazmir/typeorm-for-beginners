import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { Post } from './entities/post.entity';
import { Comment } from './entities/comment.entity';
import { Tag } from './entities/tag.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5431,
  username: 'root',
  password: 'root',
  database: 'beginners_course',
  synchronize: false,
  logging: true,
  entities: [User, Profile, Post, Comment, Tag],
  migrations: [__dirname + '/migrations/*.ts'],
});

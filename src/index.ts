import 'reflect-metadata';
import { AppDataSource } from './db';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';

AppDataSource.initialize().then(async () => {
  const u = new User();

  u.name = 'Test user';
  u.email = 'test@test.com';

  const createdUser = await AppDataSource.manager.save(u);

  const post = new Post();
  post.body = 'Hello World!';
  post.userId = createdUser.id;

  await AppDataSource.manager.save(post);
});

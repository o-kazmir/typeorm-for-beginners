import 'reflect-metadata';
import { AppDataSource } from './db';
import { Post } from './entities/post.entity';
import { Tag } from './entities/tag.entity';

AppDataSource.initialize().then(async () => {
  const tag1 = new Tag();
  tag1.name = 'подорожі';

  const tag2 = new Tag();
  tag2.name = 'природа';

  const post = new Post();


  post.body = 'Подорож у гори';
  post.tags = [tag1, tag2];
  await AppDataSource.manager.save([tag1, tag2]);
  await AppDataSource.manager.save(post);
});

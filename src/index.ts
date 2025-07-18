import 'reflect-metadata';
import { AppDataSource } from './db';
import { Post } from './entities/post.entity';
import { Tag } from './entities/tag.entity';
import { Profile } from './entities/profile.entity';
import { User } from './entities/user.entity';

AppDataSource.initialize().then(async () => {
  const profile = new Profile();
  profile.phoneNumber = '12345678';

  const createdProfile = await AppDataSource.manager.save(profile);

  const user = new User();

  user.name = 'Test';
  user.email = 'test@test.com';
  user.profileId = createdProfile.id;

  await AppDataSource.manager.save(user);
});

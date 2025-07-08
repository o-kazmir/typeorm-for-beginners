import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5431,
  username: 'root',
  password: 'root',
  database: 'beginners_course',
  synchronize: true,
  logging: true,
  entities: [__dirname + '/entities/*.entity.ts'],
});

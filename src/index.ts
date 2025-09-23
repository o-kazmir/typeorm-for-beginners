import 'reflect-metadata';
import { AppDataSource } from './db';

AppDataSource.initialize().then(async () => {});

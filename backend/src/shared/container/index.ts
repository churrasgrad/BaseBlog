import UsersRepository from 'modules/users/infra/typeorm/repositories';
import IUsersRepository from 'modules/users/repositories';
import {container} from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository', UsersRepository
)
import { container } from 'tsyringe';

import { FinancesRepository } from '@modules/finance/infra/typeorm/repositories/FinancesRepository';
import { IFinancesRepository } from '@modules/finance/repositories/IFinancesRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IFinancesRepository>(
  'FinancesRepository',
  FinancesRepository
)

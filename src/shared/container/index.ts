import { container } from 'tsyringe';
import { AssetsRepository } from '../../modules/assets/infra/repositories/AssetsRepository';
import { IAssetsRepository } from '../../modules/assets/infra/repositories/IAssetsRepository';
import { UnitsRepository } from '../../modules/units/infra/repositories/UnitsRepository';
import { IUnitsRepository } from '../../modules/units/infra/repositories/IUnitsRepository';
import { ICompaniesRepository } from '../../modules/company/infra/repositories/ICompaniesRepository';
import { CompaniesRepository } from '../../modules/company/infra/repositories/CompaniesRepository';
import { IUsersRepository } from '../../modules/users/infra/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/users/infra/repositories/UsersRepository';

container.registerSingleton<IAssetsRepository>(
  'AssetsRepository',
  AssetsRepository,
);
container.registerSingleton<IUnitsRepository>(
  'UnitsRepository',
  UnitsRepository,
);
container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

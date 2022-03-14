import { container } from 'tsyringe';
import { AssetsRepository } from '../../modules/assets/infra/repositories/AssetsRepository';
import { IAssetsRepository } from '../../modules/assets/infra/repositories/IAssetsRepository';
import { UnitsRepository } from '../../modules/units/infra/typeorm/repositories/UnitsRepository';
import { IUnitsRepository } from '../../modules/units/infra/typeorm/IUnitsRepository';

container.registerSingleton<IAssetsRepository>(
  'AssetsRepository',
  AssetsRepository,
);
container.registerSingleton<IUnitsRepository>(
  'UnitsRepository',
  UnitsRepository,
);

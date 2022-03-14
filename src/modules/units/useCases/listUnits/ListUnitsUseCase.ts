import { inject, injectable } from 'tsyringe';
import { IUnit } from '../../infra/entities/Unit';
import { IUnitsRepository } from '../../infra/repositories/IUnitsRepository';

@injectable()
class ListUnitsUseCase {
  constructor(
    @inject('UnitsRepository')
    private unitsRepository: IUnitsRepository,
  ) {}

  async execute(): Promise<IUnit[]> {
    return await this.unitsRepository.listAll();
  }
}

export { ListUnitsUseCase };

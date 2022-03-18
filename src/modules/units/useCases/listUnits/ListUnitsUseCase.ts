import NodeCache from 'node-cache';
import { inject, injectable } from 'tsyringe';
import { IUnit } from '../../infra/entities/Unit';
import { IUnitsRepository } from '../../infra/repositories/IUnitsRepository';

@injectable()
class ListUnitsUseCase {
  constructor(
    @inject('UnitsRepository')
    private unitsRepository: IUnitsRepository,
    @inject('NodeCache')
    private nodeCache: NodeCache,
  ) {}

  async execute(): Promise<IUnit[]> {
    const all = await this.unitsRepository.listAll();
    this.nodeCache.set('/companies', all, 3);
    return all;
  }
}

export { ListUnitsUseCase };

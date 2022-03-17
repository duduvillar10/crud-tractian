import { inject, injectable } from 'tsyringe';
import { IUnit } from '../../infra/entities/Unit';
import { IUnitsRepository } from '../../infra/repositories/IUnitsRepository';

@injectable()
class ListUnitsByCompanyUseCase {
  constructor(
    @inject('UnitsRepository')
    private unitsRepository: IUnitsRepository,
  ) {}

  async execute(id: string): Promise<IUnit[]> {
    return await this.unitsRepository.listByCompany(id);
  }
}

export { ListUnitsByCompanyUseCase };

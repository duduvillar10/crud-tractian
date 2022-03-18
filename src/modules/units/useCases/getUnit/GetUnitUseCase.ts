import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { IUnit } from '../../infra/entities/Unit';

import { IUnitsRepository } from '../../infra/repositories/IUnitsRepository';

@injectable()
class GetUnitUseCase {
  constructor(
    @inject('UnitsRepository')
    private unitsRepository: IUnitsRepository,
  ) {}

  async execute(id: string): Promise<IUnit> {
    const unitExists = await this.unitsRepository.findById(id);

    if (!unitExists) {
      throw new AppError("This unit doesn't exists", 404);
    }
    return await this.unitsRepository.findById(id);
  }
}

export { GetUnitUseCase };

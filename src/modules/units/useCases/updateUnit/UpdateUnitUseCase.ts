import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUpdateUnitDTO } from '../../dtos/IUpdateUnitDTO';
import { IUnitsRepository } from '../../infra/repositories/IUnitsRepository';

@injectable()
class UpdateUnitUseCase {
  constructor(
    @inject('UnitsRepository')
    private unitsRepository: IUnitsRepository,
  ) {}

  async execute(id: string, { name, description }: IUpdateUnitDTO) {
    const unitExits = await this.unitsRepository.findById(id);

    if (!unitExits) {
      throw new AppError("This unit doesn't exists!", 404);
    }

    if (name) {
      const unitNameAlreadyExits = await this.unitsRepository.findByName(name);

      if (unitNameAlreadyExits) {
        throw new AppError('This name already exists!');
      }
    }

    const updatedUnit = {
      name,
      description,
    };

    Object.keys(updatedUnit).forEach(key =>
      updatedUnit[key] === undefined ? delete updatedUnit[key] : {},
    );

    this.unitsRepository.update(id, updatedUnit);
  }
}

export { UpdateUnitUseCase };

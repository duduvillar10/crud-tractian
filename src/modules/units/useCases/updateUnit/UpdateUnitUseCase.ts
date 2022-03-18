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
    const unitExists = await this.unitsRepository.findById(id);

    if (!unitExists) {
      throw new AppError("This unit doesn't exists!", 404);
    }

    const unitNameAlreadyExists = await this.unitsRepository.findByName(name);

    if (unitNameAlreadyExists) {
      throw new AppError('This name already exists!', 400);
    }

    const updatedUnit = {
      name,
      description,
    };

    Object.keys(updatedUnit).forEach(key =>
      updatedUnit[key] === undefined ? delete updatedUnit[key] : {},
    );
    try {
      await this.unitsRepository.update(id, updatedUnit);
    } catch {
      throw new AppError('Invalid inputs!', 403);
    }
  }
}

export { UpdateUnitUseCase };

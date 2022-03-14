import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICreateUnitDTO } from '../../dtos/ICreateUnitDTO';
import { IUnitsRepository } from '../../infra/repositories/IUnitsRepository';

@injectable()
class CreateUnitUseCase {
  constructor(
    @inject('UnitsRepository')
    private unitsRepository: IUnitsRepository,
  ) {}

  async execute({ name, description, company }: ICreateUnitDTO) {
    const unitNameAlreadyExits = await this.unitsRepository.findByName(name);

    if (unitNameAlreadyExits) {
      throw new AppError('This name already exists!');
    }

    const unit = await this.unitsRepository.create({
      name,
      description,
      company,
    });
    return unit;
  }
}

export { CreateUnitUseCase };

import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUnitsRepository } from '../../infra/repositories/IUnitsRepository';

@injectable()
class DeleteUnitUseCase {
  constructor(
    @inject('UnitsRepository')
    private unitsRepository: IUnitsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const unitExists = await this.unitsRepository.findById(id);
    if (!unitExists) {
      throw new AppError("This unit doesn't exists!", 404);
    }

    await this.unitsRepository.delete(id);
  }
}

export { DeleteUnitUseCase };

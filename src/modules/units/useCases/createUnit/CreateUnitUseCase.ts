import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICompaniesRepository } from '../../../company/infra/repositories/ICompaniesRepository';
import { ICreateUnitDTO } from '../../dtos/ICreateUnitDTO';
import { IUnitsRepository } from '../../infra/repositories/IUnitsRepository';

@injectable()
class CreateUnitUseCase {
  constructor(
    @inject('UnitsRepository')
    private unitsRepository: IUnitsRepository,
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({ name, description, company }: ICreateUnitDTO) {
    const unitNameAlreadyExists = await this.unitsRepository.findByName(name);

    if (unitNameAlreadyExists) {
      throw new AppError('This name already exists!', 400);
    }

    const companyExists = await this.companiesRepository.findById(company);

    if (!companyExists) {
      throw new AppError("This company doesn't exists!", 404);
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

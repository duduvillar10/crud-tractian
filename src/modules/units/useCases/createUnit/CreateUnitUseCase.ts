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
    const unitNameAlreadyExits = await this.unitsRepository.findByName(name);

    if (unitNameAlreadyExits) {
      throw new AppError('This name already exists!');
    }

    const companyExits = await this.companiesRepository.findById(company);

    if (!companyExits) {
      throw new AppError("This company doesn't exists!");
    }

    const unit = await this.unitsRepository.create({
      name,
      description,
      company,
    });

    companyExits.units.push(unit);

    this.companiesRepository.update(company, companyExits);

    return unit;
  }
}

export { CreateUnitUseCase };

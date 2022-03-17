import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICompaniesRepository } from '../../../company/infra/repositories/ICompaniesRepository';
import { IUnit } from '../../infra/entities/Unit';
import { IUnitsRepository } from '../../infra/repositories/IUnitsRepository';

@injectable()
class ListUnitsByCompanyUseCase {
  constructor(
    @inject('UnitsRepository')
    private unitsRepository: IUnitsRepository,
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute(id: string): Promise<IUnit[]> {
    const companyExits = await this.companiesRepository.findById(id);

    if (!companyExits) {
      throw new AppError("This company doesn't exits!");
    }

    return await this.unitsRepository.listByCompany(id);
  }
}

export { ListUnitsByCompanyUseCase };

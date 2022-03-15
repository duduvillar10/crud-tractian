import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUnitsRepository } from '../../../units/infra/repositories/IUnitsRepository';
import { ICreateCompanyDTO } from '../../dtos/ICreateCompanyDTO';
import { ICompaniesRepository } from '../../infra/repositories/ICompaniesRepository';

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({ name, description }: ICreateCompanyDTO) {
    const companyNameAlreadyExits = await this.companiesRepository.findByName(
      name,
    );

    if (companyNameAlreadyExits) {
      throw new AppError('This name already exists!');
    }

    const company = await this.companiesRepository.create({
      name,
      description,
    });

    return company;
  }
}

export { CreateCompanyUseCase };

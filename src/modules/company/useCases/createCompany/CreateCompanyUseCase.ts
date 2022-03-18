import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICreateCompanyDTO } from '../../dtos/ICreateCompanyDTO';
import { ICompaniesRepository } from '../../infra/repositories/ICompaniesRepository';

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({ name, description }: ICreateCompanyDTO) {
    const companyNameAlreadyExists = await this.companiesRepository.findByName(
      name,
    );

    if (companyNameAlreadyExists) {
      throw new AppError('This name already exists!', 400);
    }

    const company = await this.companiesRepository.create({
      name,
      description,
    });

    return company;
  }
}

export { CreateCompanyUseCase };

import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICompany } from '../../infra/entities/Company';
import { ICompaniesRepository } from '../../infra/repositories/ICompaniesRepository';

@injectable()
class GetCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute(id: string): Promise<ICompany> {
    const companyExists = await this.companiesRepository.findById(id);

    if (!companyExists) {
      throw new AppError("This company doesn't exists", 404);
    }
    return await this.companiesRepository.findById(id);
  }
}

export { GetCompanyUseCase };

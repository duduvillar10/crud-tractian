import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICompaniesRepository } from '../../infra/repositories/ICompaniesRepository';

@injectable()
class DeleteCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const companyExists = await this.companiesRepository.findById(id);

    if (!companyExists) {
      throw new AppError("This company doesn't exists!", 404);
    }

    const deletedCompany = await this.companiesRepository.delete(id);
  }
}

export { DeleteCompanyUseCase };

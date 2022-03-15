import { inject, injectable } from 'tsyringe';
import { ICompany } from '../../infra/entities/Company';
import { ICompaniesRepository } from '../../infra/repositories/ICompaniesRepository';

@injectable()
class ListCompaniesUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute(): Promise<ICompany[]> {
    return await this.companiesRepository.listAll();
  }
}

export { ListCompaniesUseCase };

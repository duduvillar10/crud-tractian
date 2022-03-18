import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICreateCompanyDTO } from '../../dtos/ICreateCompanyDTO';
import { ICompaniesRepository } from '../../infra/repositories/ICompaniesRepository';

@injectable()
class UpdateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute(id: string, { name, description }: ICreateCompanyDTO) {
    const companyExists = await this.companiesRepository.findById(id);

    if (!companyExists) {
      throw new AppError("This company doesn't exists!", 404);
    }

    const companyNameAlreadyExists = await this.companiesRepository.findByName(
      name,
    );

    if (companyNameAlreadyExists) {
      throw new AppError('This name already exists!', 400);
    }

    const updatedCompany = {
      name,
      description,
    };

    Object.keys(updatedCompany).forEach(key =>
      updatedCompany[key] === undefined ? delete updatedCompany[key] : {},
    );
    try {
      await this.companiesRepository.update(id, updatedCompany);
    } catch {
      throw new AppError('Invalid inputs', 403);
    }
  }
}

export { UpdateCompanyUseCase };

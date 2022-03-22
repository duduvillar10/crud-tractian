import { AppError } from '../../../../shared/errors/AppError';
import { Company } from '../../infra/entities/Company';
import { ICompaniesRepository } from '../../infra/repositories/ICompaniesRepository';
import { CompaniesRepositoryInMemory } from '../../infra/repositories/in-memory/CompaniesRepositoryInMemory';
import { CreateCompanyUseCase } from './CreateCompanyUseCase';

let createCompanyUseCase: CreateCompanyUseCase;
let companiesRepositoryInMemory: ICompaniesRepository;

describe('Create company', () => {
  beforeEach(() => {
    companiesRepositoryInMemory = new CompaniesRepositoryInMemory();
    createCompanyUseCase = new CreateCompanyUseCase(
      companiesRepositoryInMemory,
    );
  });

  it('should be able to create a new company', async () => {
    const company = await createCompanyUseCase.execute({
      name: 'Microsoft',
      description: 'alguma coisa',
    });
    const findCompany = await companiesRepositoryInMemory.findById(company.id);

    expect(findCompany).toBeInstanceOf(Company);
  });

  it('should not be able to create a company with exits name', async () => {
    expect(async () => {
      await createCompanyUseCase.execute({
        name: 'Microsoft',
        description: 'alguma coisa',
      });
      await createCompanyUseCase.execute({
        name: 'Microsoft',
        description: 'alguma coisa',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});

import { AppError } from '../../../../shared/errors/AppError';
import { ICompaniesRepository } from '../../infra/repositories/ICompaniesRepository';
import { CompaniesRepositoryInMemory } from '../../infra/repositories/in-memory/CompaniesRepositoryInMemory';
import { GetCompanyUseCase } from './GetCompanyUseCase';

let getCompanyUseCase: GetCompanyUseCase;
let companiesRepositoryInMemory: ICompaniesRepository;

describe('Get company', () => {
  beforeEach(() => {
    companiesRepositoryInMemory = new CompaniesRepositoryInMemory();
    getCompanyUseCase = new GetCompanyUseCase(companiesRepositoryInMemory);
  });

  it('should be able to get a company', async () => {
    const company = await companiesRepositoryInMemory.create({
      name: 'company',
      description: 'desc',
    });

    const gotCompany = await getCompanyUseCase.execute(company.id);

    expect(gotCompany).toHaveProperty('id', company.id);
  });

  it('should be not able to get a non-exists company', async () => {
    expect(async () => {
      await getCompanyUseCase.execute('574859685743');
    }).rejects.toBeInstanceOf(AppError);
  });
});

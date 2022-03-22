import { AppError } from '../../../../shared/errors/AppError';
import { ICompaniesRepository } from '../../infra/repositories/ICompaniesRepository';
import { CompaniesRepositoryInMemory } from '../../infra/repositories/in-memory/CompaniesRepositoryInMemory';
import { DeleteCompanyUseCase } from './DeleteCompanyUseCase';

let deleteCompanyUseCase: DeleteCompanyUseCase;
let companiesRepositoryInMemory: ICompaniesRepository;

describe('Delete company', () => {
  beforeEach(() => {
    companiesRepositoryInMemory = new CompaniesRepositoryInMemory();
    deleteCompanyUseCase = new DeleteCompanyUseCase(
      companiesRepositoryInMemory,
    );
  });

  it('should be able to delete a company', async () => {
    const company = await companiesRepositoryInMemory.create({
      name: 'company',
      description: 'desc',
    });

    await deleteCompanyUseCase.execute(company.id);

    const findCompany = await companiesRepositoryInMemory.findById(company.id);
    expect(findCompany).toBeUndefined;
  });

  it('should be not able to delete a non-exists company', async () => {
    expect(async () => {
      await deleteCompanyUseCase.execute('574859685743');
    }).rejects.toBeInstanceOf(AppError);
  });
});

import { ICreateCompanyDTO } from '../../../dtos/ICreateCompanyDTO';
import { Company, ICompany } from '../../entities/Company';
import { ICompaniesRepository } from '../ICompaniesRepository';

class CompaniesRepositoryInMemory implements ICompaniesRepository {
  companies: ICompany[] = [];

  async create({ name, description }: ICreateCompanyDTO): Promise<ICompany> {
    const company = new Company({
      name,
      description,
    });

    this.companies.push(company);

    return company;
  }

  async findByName(name: string): Promise<ICompany> {
    const company = this.companies.find(company => company.name === name);
    return company;
  }

  async findById(id: string): Promise<ICompany> {
    const company = this.companies.find(company => company.id === id);
    return company;
  }

  async listAll(): Promise<ICompany[]> {
    return this.companies;
  }

  async update(id: string, company: ICreateCompanyDTO): Promise<void> {
    const oldCompany = this.companies.find(company => company.id === id);

    Object.assign(oldCompany, company);
  }

  async delete(id: string): Promise<void> {
    const index = this.companies.findIndex(company => company.id === id);

    this.companies.splice(index, index + 1);
  }
}

export { CompaniesRepositoryInMemory };

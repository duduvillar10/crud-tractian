import { ICreateCompanyDTO } from '../../dtos/ICreateCompanyDTO';
import { ICompany } from '../entities/Company';

interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<ICompany>;
  findByName(name: string): Promise<ICompany>;
  findById(id: string): Promise<ICompany>;
  listAll(): Promise<ICompany[]>;
  update(id: string, company: ICreateCompanyDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ICompaniesRepository };

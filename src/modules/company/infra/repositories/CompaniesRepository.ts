import { Company, ICompany } from '../entities/Company';
import { Model } from 'mongoose';
import { ICreateCompanyDTO } from '../../dtos/ICreateCompanyDTO';

class CompaniesRepository {
  private companiesRepository: Model<ICompany>;

  constructor() {
    this.companiesRepository = Company;
  }

  async create({ name, description }: ICreateCompanyDTO): Promise<ICompany> {
    const company = new this.companiesRepository({
      name,
      description,
    });

    await company.save();

    return company;
  }

  async findByName(name: string): Promise<ICompany> {
    const company = await this.companiesRepository.findOne({ name });
    return company;
  }

  async findById(id: string): Promise<ICompany> {
    const company = await this.companiesRepository.findOne({ _id: id });
    return company;
  }

  async listAll(): Promise<ICompany[]> {
    const all = await this.companiesRepository
      .find()
      .populate({ path: 'units', select: '-company' });
    return all;
  }

  async update(id: string, company: ICreateCompanyDTO): Promise<void> {
    await this.companiesRepository.updateOne({ _id: id }, company, {
      upsert: true,
      new: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    });
  }

  async delete(id: string): Promise<void> {
    await this.companiesRepository.deleteOne({
      _id: id,
    });
  }
}

export { CompaniesRepository };

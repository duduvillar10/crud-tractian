import NodeCache from 'node-cache';
import { inject, injectable } from 'tsyringe';
import { ICompany } from '../../infra/entities/Company';
import { ICompaniesRepository } from '../../infra/repositories/ICompaniesRepository';

@injectable()
class ListCompaniesUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
    @inject('NodeCache')
    private nodeCache: NodeCache,
  ) {}

  async execute(): Promise<ICompany[]> {
    const all = await this.companiesRepository.listAll();
    this.nodeCache.set('/companies', all, 3);
    return all;
  }
}

export { ListCompaniesUseCase };

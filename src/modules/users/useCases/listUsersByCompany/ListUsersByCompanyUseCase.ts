import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICompaniesRepository } from '../../../company/infra/repositories/ICompaniesRepository';
import { IUser } from '../../infra/entities/User';
import { IUsersRepository } from '../../infra/repositories/IUsersRepository';

@injectable()
class ListUsersByCompanyUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute(id: string): Promise<IUser[]> {
    const companyExits = await this.companiesRepository.findById(id);

    if (!companyExits) {
      throw new AppError("This company doesn't exits!");
    }

    return await this.usersRepository.listByCompany(id);
  }
}

export { ListUsersByCompanyUseCase };

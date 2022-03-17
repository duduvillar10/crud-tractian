import { inject, injectable } from 'tsyringe';
import { IUser } from '../../infra/entities/User';
import { IUsersRepository } from '../../infra/repositories/IUsersRepository';

@injectable()
class ListUsersByCompanyUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string): Promise<IUser[]> {
    return await this.usersRepository.listByCompany(id);
  }
}

export { ListUsersByCompanyUseCase };

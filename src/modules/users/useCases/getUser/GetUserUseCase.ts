import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUser } from '../../infra/entities/User';

import { IUsersRepository } from '../../infra/repositories/IUsersRepository';

@injectable()
class GetUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string): Promise<IUser> {
    const userExists = await this.usersRepository.findById(id);

    if (!userExists) {
      throw new AppError("This user doesn't exists", 404);
    }
    return await this.usersRepository.findById(id);
  }
}

export { GetUserUseCase };

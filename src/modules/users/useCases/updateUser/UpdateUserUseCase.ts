import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { IUsersRepository } from '../../infra/repositories/IUsersRepository';

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(
    id: string,
    { name, email, cpf, password, company }: IUpdateUserDTO,
  ) {
    const emailAlreadyExits = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExits) {
      throw new AppError('This email already exists!');
    }

    const updatedUser = { name, email, cpf, password, company };

    Object.keys(updatedUser).forEach(key =>
      updatedUser[key] === undefined ? delete updatedUser[key] : {},
    );

    this.usersRepository.update(id, updatedUser);
  }
}

export { UpdateUserUseCase };

import { hash } from 'bcrypt';
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

  async execute(id: string, { name, cpf, password }: IUpdateUserDTO) {
    const user = await this.usersRepository.findById(id);

    if (user.isAdmin) {
      throw new AppError('Invalid operation', 403);
    }

    const passwordHash = password ? await hash(password, 8) : undefined;

    const updatedUser = { name, cpf, password: passwordHash };

    Object.keys(updatedUser).forEach(key =>
      updatedUser[key] === undefined ? delete updatedUser[key] : {},
    );

    this.usersRepository.update(id, updatedUser);
  }
}

export { UpdateUserUseCase };

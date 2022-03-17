import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICompaniesRepository } from '../../../company/infra/repositories/ICompaniesRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../infra/repositories/IUsersRepository';
import { hash } from 'bcrypt';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({ name, email, password, cpf, company }: ICreateUserDTO) {
    const emailAlreadyExits = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExits) {
      throw new AppError('User already exists!');
    }

    const companyExits = await this.companiesRepository.findById(company);

    if (!companyExits) {
      throw new AppError("This company doesn't exists!");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      cpf,
      company,
    });
  }
}

export { CreateUserUseCase };

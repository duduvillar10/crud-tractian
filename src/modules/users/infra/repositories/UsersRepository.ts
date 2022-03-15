import { IUsersRepository } from './IUsersRepository';
import { Model } from 'mongoose';
import { IUser, User } from '../entities/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private usersRepository: Model<IUser>;

  constructor() {
    this.usersRepository = User;
  }

  async create({
    name,
    email,
    password,
    cpf,
    company,
  }: ICreateUserDTO): Promise<IUser> {
    const user = new this.usersRepository({
      name,
      email,
      password,
      cpf,
      company,
    });

    await user.save();

    return user;
  }

  async findByEmail(email: string): Promise<IUser> {
    const user = await this.usersRepository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<IUser> {
    const user = await this.usersRepository.findOne({ _id: id });
    return user;
  }

  async listAll(): Promise<IUser[]> {
    const all = await this.usersRepository
      .find()
      .populate({ path: 'unit', select: '-assets' });
    return all;
  }

  async update(id: string, user: ICreateUserDTO): Promise<void> {
    await this.usersRepository.updateOne({ _id: id }, user);
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.deleteOne({ _id: id });
  }
}

export { UsersRepository };

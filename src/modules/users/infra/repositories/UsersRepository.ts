import { IUsersRepository } from './IUsersRepository';
import { Model } from 'mongoose';
import { IUser, User } from '../entities/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';

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
    const all = await this.usersRepository.find();
    return all;
  }
  async listByCompany(id: string): Promise<IUser[]> {
    const all = await this.usersRepository.find({ company: id });
    return all;
  }

  async update(id: string, user: IUpdateUserDTO): Promise<void> {
    await this.usersRepository.updateOne({ _id: id }, user);
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.deleteOne({ _id: id });
  }
}

export { UsersRepository };

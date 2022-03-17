import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { IUser } from '../entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  findById(id: string): Promise<IUser>;
  listAll(): Promise<IUser[]>;
  listByCompany(id: string): Promise<IUser[]>;
  update(id: string, user: IUpdateUserDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository };

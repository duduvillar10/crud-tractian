import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUser } from '../entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<IUser>;
  findByName(name: string): Promise<IUser>;
  findById(id: string): Promise<IUser>;
  listAll(): Promise<IUser[]>;
  update(id: string, user: ICreateUserDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository };

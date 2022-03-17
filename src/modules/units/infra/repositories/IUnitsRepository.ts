import { ObjectId } from 'mongodb';
import { IAsset } from '../../../assets/infra/entities/Asset';
import { ICreateUnitDTO } from '../../dtos/ICreateUnitDTO';
import { IUpdateUnitDTO } from '../../dtos/IUpdateUnitDTO';
import { IUnit } from '../entities/Unit';

interface IUnitsRepository {
  create(data: ICreateUnitDTO): Promise<IUnit>;
  findByName(name: string): Promise<IUnit>;
  findById(id: string): Promise<IUnit>;
  listAll(): Promise<IUnit[]>;
  listByCompany(id: string): Promise<IUnit[]>;
  update(id: string, unit: IUpdateUnitDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUnitsRepository };

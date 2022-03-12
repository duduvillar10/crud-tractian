import { ICreateUnitDTO } from '../../dtos/ICreateUnitDTO';
import { IUpdateUnitDTO } from '../../dtos/IUpdateUnitDTO';
import { IUnit } from './entities/Unit';

interface IUnitsRepository {
  create(data: ICreateUnitDTO): Promise<IUnit>;
  findByName(name: string): Promise<IUnit>;
  findById(id: string): Promise<IUnit>;
  listAll(): Promise<IUnit[]>;
  update(id: string, asset: IUpdateUnitDTO): Promise<void>;
}

export { IUnitsRepository };

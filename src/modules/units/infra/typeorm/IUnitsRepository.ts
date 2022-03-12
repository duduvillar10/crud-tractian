import { ICreateUnitDTO } from '../../dtos/ICreateUnitDTO';
import { IUpdateUnitDTO } from '../../dtos/IUpdateUnitDTO';
import { Unit } from './entities/Unit';

interface IUnitsRepository {
  create(data: ICreateUnitDTO): Promise<Unit>;
  findByName(name: string): Promise<Unit>;
  findById(id: string): Promise<Unit>;
  listAll(): Promise<Unit[]>;
  update(id: string, asset: IUpdateUnitDTO): Promise<void>;
}

export { IUnitsRepository };

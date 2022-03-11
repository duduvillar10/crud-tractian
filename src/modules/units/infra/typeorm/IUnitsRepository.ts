import { Unit } from './entities/Unit';

interface IUnitsRepository {
  create(data: any): Promise<Unit>;
  findById(id: string): Promise<Unit>;
  listAll(name: string): Promise<Unit[]>;
}

export { IUnitsRepository };

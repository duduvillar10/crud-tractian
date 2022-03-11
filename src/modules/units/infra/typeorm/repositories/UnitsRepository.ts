import { getMongoRepository, MongoRepository } from 'typeorm';
import { ICreateUnitDTO } from '../../../dtos/ICreateUnitDTO';
import { Unit } from '../entities/Unit';
import { IUnitsRepository } from '../IUnitsRepository';

class UnitsRepository implements IUnitsRepository {
  private assetsRepository: MongoRepository<Unit>;

  constructor() {
    this.assetsRepository = getMongoRepository(Unit);
  }

  async create({ name, description, company }: ICreateUnitDTO): Promise<Unit> {
    const unit = new Unit();

    Object.assign(unit, {
      name,
      description,
      company,
    });

    this.assetsRepository.save(unit);

    return unit;
  }

  async findById(id: string): Promise<Unit> {
    return this.assetsRepository.findOne({ id });
  }

  async listAll(name: string): Promise<Unit[]> {
    const all = this.assetsRepository.find({ name });
    return all;
  }
}

export { UnitsRepository };

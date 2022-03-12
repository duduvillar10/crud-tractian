import { getMongoRepository, MongoRepository } from 'typeorm';
import { ICreateUnitDTO } from '../../../dtos/ICreateUnitDTO';
import { IUpdateUnitDTO } from '../../../dtos/IUpdateUnitDTO';
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

    await this.assetsRepository.save(unit);

    return unit;
  }

  async findByName(name: string): Promise<Unit> {
    const Unit = await this.assetsRepository.findOne({ name });
    return Unit;
  }

  async findById(id: string): Promise<Unit> {
    const unit = await this.assetsRepository.findOne({ id });
    return unit;
  }

  async listAll(): Promise<Unit[]> {
    const all = await this.assetsRepository.find();
    return all;
  }

  async update(id: string, unit: IUpdateUnitDTO): Promise<void> {
    await this.assetsRepository.update(id, unit);
  }
}

export { UnitsRepository };

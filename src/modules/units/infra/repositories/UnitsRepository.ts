import { ICreateUnitDTO } from '../../dtos/ICreateUnitDTO';
import { IUpdateUnitDTO } from '../../dtos/IUpdateUnitDTO';
import { IUnit, Unit } from '../entities/Unit';
import { IUnitsRepository } from './IUnitsRepository';
import { Model } from 'mongoose';

class UnitsRepository implements IUnitsRepository {
  private unitsRepository: Model<IUnit>;

  constructor() {
    this.unitsRepository = Unit;
  }

  async create({ name, description, company }: ICreateUnitDTO): Promise<IUnit> {
    const unit = new this.unitsRepository({
      name,
      description,
      company,
    });

    await unit.save();

    return unit;
  }

  async findByName(name: string): Promise<IUnit> {
    const Unit = await this.unitsRepository.findOne({ name });
    return Unit;
  }

  async findById(id: string): Promise<IUnit> {
    const unit = await this.unitsRepository.findOne({ _id: id });
    return unit;
  }

  async listAll(): Promise<IUnit[]> {
    const all = await this.unitsRepository.find().populate({ path: 'assets' });
    return all;
  }

  async update(id: string, unit: IUpdateUnitDTO): Promise<void> {
    await this.unitsRepository.updateOne({ _id: id }, unit);
  }

  async delete(id: string): Promise<void> {
    await this.unitsRepository.deleteOne({ _id: id });
  }
}

export { UnitsRepository };

import { ICreateAssetDTO } from '../../dtos/ICreateAssetDTO';
import { IUpdateAssetDTO } from '../../dtos/IUpdateAssetDTO';
import { IAsset, Asset } from '../entities/Asset';
import { IAssetsRepository } from './IAssetsRepository';
import { Model } from 'mongoose';

class AssetsRepository implements IAssetsRepository {
  private assetsRepository: Model<IAsset>;

  constructor() {
    this.assetsRepository = Asset;
  }

  async create({
    name,
    description,
    model,
    owner,
    unit,
    image,
  }: ICreateAssetDTO): Promise<IAsset> {
    const asset = new this.assetsRepository({
      name,
      description,
      model,
      owner,
      unit,
      image,
    });

    await asset.save();

    return asset;
  }

  async findByName(name: string): Promise<IAsset> {
    const asset = await this.assetsRepository.findOne({ name });
    return asset;
  }

  async findById(id: string): Promise<IAsset> {
    const asset = await this.assetsRepository.findOne({ _id: id });
    return asset;
  }

  async listAll(): Promise<IAsset[]> {
    const all = await this.assetsRepository.find();
    return all;
  }

  async listByUnitId(id: string): Promise<IAsset[]> {
    const all = await this.assetsRepository.find({ unit: id });
    return all;
  }

  async update(id: string, asset: IUpdateAssetDTO): Promise<void> {
    await this.assetsRepository.updateOne({ _id: id }, asset, {
      upsert: true,
      new: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    });
  }

  async delete(id: string): Promise<void> {
    await this.assetsRepository.deleteOne({ _id: id });
  }
}

export { AssetsRepository };

import { getMongoRepository, MongoRepository, Repository } from 'typeorm';
import { ICreateAssetDTO } from '../../../dtos/ICreateAssetDTO';
import { IUpdateAssetDTO } from '../../../dtos/IUpdateAssetDTO';
import { Asset } from '../entities/Asset';
import { IAssetsRepository } from '../IAssetsRepository';

class AssetsRepository implements IAssetsRepository {
  private assetsRepository: MongoRepository<Asset>;

  constructor() {
    this.assetsRepository = getMongoRepository(Asset);
  }

  async create({
    name,
    description,
    model,
    owner,
    status,
    health,
  }: ICreateAssetDTO): Promise<Asset> {
    const asset = new Asset();

    Object.assign(asset, {
      name,
      description,
      model,
      owner,
      status,
      health,
    });

    await this.assetsRepository.save(asset);

    return asset;
  }

  async findByName(name: string): Promise<Asset> {
    const asset = await this.assetsRepository.findOne({ name });
    return asset;
  }

  async listAll(): Promise<Asset[]> {
    const all = await this.assetsRepository.find();
    return all;
  }

  async update(id: string, asset: IUpdateAssetDTO): Promise<void> {
    await this.assetsRepository.update(id, asset);
  }
}

export { AssetsRepository };

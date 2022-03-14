import { ICreateAssetDTO } from '../../dtos/ICreateAssetDTO';
import { IUpdateAssetDTO } from '../../dtos/IUpdateAssetDTO';
import { Asset, IAsset } from '../entities/Asset';

interface IAssetsRepository {
  create(data: ICreateAssetDTO): Promise<IAsset>;
  findByName(name: string): Promise<IAsset>;
  findById(id: string): Promise<IAsset>;
  listAll(): Promise<IAsset[]>;
  update(id: string, asset: IUpdateAssetDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IAssetsRepository };

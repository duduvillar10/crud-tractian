import { ICreateAssetDTO } from '../../dtos/ICreateAssetDTO';
import { IUpdateAssetDTO } from '../../dtos/IUpdateAssetDTO';
import { Asset } from './entities/Asset';

interface IAssetsRepository {
  create(data: ICreateAssetDTO): Promise<Asset>;
  findByName(id: string): Promise<Asset>;
  listAll(): Promise<Asset[]>;
  update(id: string, asset: IUpdateAssetDTO): Promise<void>;
}

export { IAssetsRepository };

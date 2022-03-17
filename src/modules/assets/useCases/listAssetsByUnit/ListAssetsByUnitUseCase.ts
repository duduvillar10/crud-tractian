import { inject, injectable } from 'tsyringe';
import { IAsset } from '../../infra/entities/Asset';
import { IAssetsRepository } from '../../infra/repositories/IAssetsRepository';

@injectable()
class ListAssetsByUnitUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
  ) {}

  async execute(id: string): Promise<IAsset[]> {
    return await this.assetsRepository.listByUnitId(id);
  }
}

export { ListAssetsByUnitUseCase };

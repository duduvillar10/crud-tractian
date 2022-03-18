import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IAsset } from '../../infra/entities/Asset';
import { IAssetsRepository } from '../../infra/repositories/IAssetsRepository';

@injectable()
class GetAssetUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
  ) {}

  async execute(id: string): Promise<IAsset> {
    const assetExists = await this.assetsRepository.findById(id);

    if (!assetExists) {
      throw new AppError("This asset doesn't exists", 404);
    }
    return await this.assetsRepository.findById(id);
  }
}

export { GetAssetUseCase };

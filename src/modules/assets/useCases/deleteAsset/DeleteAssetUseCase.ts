import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IAssetsRepository } from '../../infra/typeorm/IAssetsRepository';

@injectable()
class DeleteAssetUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const assetExits = await this.assetsRepository.findById(id);

    if (!assetExits) {
      throw new AppError("This asset doesn't exists!");
    }

    await this.assetsRepository.delete(id);
  }
}

export { DeleteAssetUseCase };

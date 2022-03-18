import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUnitsRepository } from '../../../units/infra/repositories/IUnitsRepository';
import { IAssetsRepository } from '../../infra/repositories/IAssetsRepository';

@injectable()
class DeleteAssetUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const assetExists = await this.assetsRepository.findById(id);

    if (!assetExists) {
      throw new AppError("This asset doesn't exists!", 404);
    }

    await this.assetsRepository.delete(id);
  }
}

export { DeleteAssetUseCase };

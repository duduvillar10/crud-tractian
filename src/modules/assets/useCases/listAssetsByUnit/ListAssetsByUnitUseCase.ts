import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUnitsRepository } from '../../../units/infra/repositories/IUnitsRepository';
import { IAsset } from '../../infra/entities/Asset';
import { IAssetsRepository } from '../../infra/repositories/IAssetsRepository';

@injectable()
class ListAssetsByUnitUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
    @inject('UnitsRepository')
    private unitsRepository: IUnitsRepository,
  ) {}

  async execute(id: string): Promise<IAsset[]> {
    const unitExists = await this.unitsRepository.findById(id);

    if (!unitExists) {
      throw new AppError("This unit doesn't exists!", 404);
    }

    return await this.assetsRepository.listByUnitId(id);
  }
}

export { ListAssetsByUnitUseCase };

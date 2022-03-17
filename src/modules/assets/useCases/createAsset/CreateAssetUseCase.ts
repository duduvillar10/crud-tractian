import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUnitsRepository } from '../../../units/infra/repositories/IUnitsRepository';
import { ICreateAssetDTO } from '../../dtos/ICreateAssetDTO';
import { IAssetsRepository } from '../../infra/repositories/IAssetsRepository';

@injectable()
class CreateAssetUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
    @inject('UnitsRepository')
    private unitsRepository: IUnitsRepository,
  ) {}

  async execute({ name, description, model, owner, unit }: ICreateAssetDTO) {
    const assetNameAlreadyExits = await this.assetsRepository.findByName(name);

    if (assetNameAlreadyExits) {
      throw new AppError('This name already exists!');
    }

    const unitExits = await this.unitsRepository.findById(unit);

    if (!unitExits) {
      throw new AppError("This unit doesn't exists!");
    }

    const asset = await this.assetsRepository.create({
      name,
      description,
      model,
      owner,
      unit,
    });

    return asset;
  }
}

export { CreateAssetUseCase };

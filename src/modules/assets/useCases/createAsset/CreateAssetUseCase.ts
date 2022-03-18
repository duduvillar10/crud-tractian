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
    const assetNameAlreadyExists = await this.assetsRepository.findByName(name);

    if (assetNameAlreadyExists) {
      throw new AppError('This name already exists!', 400);
    }

    const unitExists = await this.unitsRepository.findById(unit);

    if (!unitExists) {
      throw new AppError("This unit doesn't exists!", 404);
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

import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../../shared/errors/AppError';
import { IUpdateAssetDTO } from '../../../dtos/IUpdateAssetDTO';
import { Asset } from '../../typeorm/entities/Asset';
import { IAssetsRepository } from '../../typeorm/IAssetsRepository';

@injectable()
class UpdateAssetUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
  ) {}

  async execute(
    id: string,
    { name, description, model, owner, status, health }: IUpdateAssetDTO,
  ) {
    const assetAlreadyExits = await this.assetsRepository.findByName(name);

    if (assetAlreadyExits) {
      throw new AppError('This name already exists!');
    }

    const updatedAsset = new Asset();

    Object.assign(updatedAsset, {
      name,
      description,
      model,
      owner,
      status,
      health,
    });

    Object.keys(updatedAsset).forEach(key =>
      updatedAsset[key] === undefined ? delete updatedAsset[key] : {},
    );

    this.assetsRepository.update(id, updatedAsset);
  }
}

export { UpdateAssetUseCase };

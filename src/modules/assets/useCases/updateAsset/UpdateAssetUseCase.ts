import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUpdateAssetDTO } from '../../dtos/IUpdateAssetDTO';
import { Status } from '../../infra/entities/Asset';
import { IAssetsRepository } from '../../infra/repositories/IAssetsRepository';

@injectable()
class UpdateAssetUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
  ) {}

  async execute(
    id: string,
    { name, description, model, owner, status, health, image }: IUpdateAssetDTO,
  ) {
    const assetExits = await this.assetsRepository.findById(id);

    if (!assetExits) {
      throw new AppError("This asset doesn't exists!", 404);
    }

    const assetNameAlreadyExits = await this.assetsRepository.findByName(name);

    if (assetNameAlreadyExits) {
      throw new AppError('This name already exists!');
    }

    const updatedAsset = {
      name,
      description,
      model,
      owner,
      status,
      health,
      image,
    };

    Object.keys(updatedAsset).forEach(key =>
      updatedAsset[key] === undefined ? delete updatedAsset[key] : {},
    );

    try {
      await this.assetsRepository.update(id, updatedAsset);
    } catch {
      throw new AppError('Invalid inputs!!');
    }
  }
}

export { UpdateAssetUseCase };

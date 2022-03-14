import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICreateAssetDTO } from '../../dtos/ICreateAssetDTO';
import { IAssetsRepository } from '../../infra/repositories/IAssetsRepository';

@injectable()
class CreateAssetUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
  ) {}

  async execute({
    name,
    description,
    model,
    owner,
    status,
    health,
    unit,
  }: ICreateAssetDTO) {
    const assetNameAlreadyExits = await this.assetsRepository.findByName(name);

    if (assetNameAlreadyExits) {
      throw new AppError('This name already exists!');
    }

    const asset = await this.assetsRepository.create({
      name,
      description,
      model,
      owner,
      status,
      health,
      unit,
    });
    return asset;
  }
}

export { CreateAssetUseCase };

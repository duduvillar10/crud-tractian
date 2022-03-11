import { inject, injectable } from 'tsyringe';
import { ICreateAssetDTO } from '../../../dtos/ICreateAssetDTO';
import { IAssetsRepository } from '../../typeorm/IAssetsRepository';

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

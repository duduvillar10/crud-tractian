import { inject, injectable } from 'tsyringe';
import { IAsset } from '../../infra/typeorm/entities/Asset';
import { IAssetsRepository } from '../../infra/typeorm/IAssetsRepository';

@injectable()
class ListAssetsUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
  ) {}

  async execute(): Promise<IAsset[]> {
    return await this.assetsRepository.listAll();
  }
}

export { ListAssetsUseCase };

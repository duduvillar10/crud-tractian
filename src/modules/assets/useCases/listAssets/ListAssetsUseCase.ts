import { inject, injectable } from 'tsyringe';
import { IAsset } from '../../infra/entities/Asset';
import { IAssetsRepository } from '../../infra/repositories/IAssetsRepository';

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

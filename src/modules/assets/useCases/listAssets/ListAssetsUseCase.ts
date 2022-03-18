import NodeCache from 'node-cache';
import { inject, injectable } from 'tsyringe';
import { IAsset } from '../../infra/entities/Asset';
import { IAssetsRepository } from '../../infra/repositories/IAssetsRepository';

@injectable()
class ListAssetsUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
    @inject('NodeCache')
    private nodeCache: NodeCache,
  ) {}

  async execute(): Promise<IAsset[]> {
    const all = await this.assetsRepository.listAll();
    this.nodeCache.set('/assets', all, 3);
    return all;
  }
}

export { ListAssetsUseCase };

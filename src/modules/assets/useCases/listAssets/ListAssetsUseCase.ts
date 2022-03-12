import { inject, injectable } from 'tsyringe';
import { Asset } from '../../infra/typeorm/entities/Asset';
import { IAssetsRepository } from '../../infra/typeorm/IAssetsRepository';

@injectable()
class ListAssetsUseCase {
  constructor(
    @inject('AssetsRepository')
    private assetsRepository: IAssetsRepository,
  ) {}

  async execute(): Promise<Asset[]> {
    return await this.assetsRepository.listAll();
  }
}

export { ListAssetsUseCase };

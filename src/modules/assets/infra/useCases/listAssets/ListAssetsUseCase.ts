import { inject, injectable } from 'tsyringe';
import { Asset } from '../../typeorm/entities/Asset';
import { IAssetsRepository } from '../../typeorm/IAssetsRepository';

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

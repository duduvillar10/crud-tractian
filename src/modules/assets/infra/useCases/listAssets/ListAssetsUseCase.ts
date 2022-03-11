import { inject, injectable } from "tsyringe";
import { Asset } from "../../typeorm/entities/Asset";
import { IAssetsRepository } from "../../typeorm/IAssetsRepository";

@injectable()
class ListAssetsUseCase {
  constructor(
    @inject("AssetsRepository")
    private assetsRepository: IAssetsRepository
  ) {}

  async execute(name: string): Promise<Asset[]> {
    return await this.assetsRepository.listAll(name);
  }
}

export { ListAssetsUseCase };

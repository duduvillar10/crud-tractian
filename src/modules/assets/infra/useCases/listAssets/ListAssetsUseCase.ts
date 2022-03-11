import { Asset } from "../../typeorm/entities/Asset";
import { IAssetsRepository } from "../../typeorm/IAssetsRepository";

class ListAssetsUseCase {
    constructor (
        private assetsRepository: IAssetsRepository
    ){}

    async execute(name: string): Promise<Asset[]>{
        return await this.assetsRepository.listAll(name)
    }
}

export { ListAssetsUseCase }
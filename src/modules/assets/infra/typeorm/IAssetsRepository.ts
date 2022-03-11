import { Asset } from "./entities/Asset";


interface IAssetsRepository {
    create(data: any): Promise<Asset>;
    findById(id: string): Promise<Asset>
    listAll(name: string): Promise<Asset[]>
}

export{ IAssetsRepository }
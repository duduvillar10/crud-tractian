import { getMongoRepository, MongoRepository, Repository } from "typeorm";
import { ICreateAssetDTO } from "../../../dtos/ICreateAssetDTO";
import { Asset } from "../entities/Asset";
import { IAssetsRepository } from "../IAssetsRepository";

class AssetsRepository implements IAssetsRepository {
    private assetsRepository: MongoRepository<Asset>

    constructor() {
        this.assetsRepository = getMongoRepository(Asset)
    }

    async create({
        name, 
        description, 
        model, 
        owner, 
        status, 
        health
    }: ICreateAssetDTO): Promise<Asset> {
        const asset = new Asset();
        
        Object.assign(asset,{
            name, 
            description, 
            model, 
            owner, 
            status, 
            health
        })
        
        this.assetsRepository.save(asset)
        
        return asset
    }
    
    async findById(id: string): Promise<Asset> {
        return this.assetsRepository.findOne({id})
    }
    
    async listAll(name: string): Promise<Asset[]> {
        const all = this.assetsRepository.find({name})
        return all
    }
}

export { AssetsRepository }
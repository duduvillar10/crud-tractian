import { ICreateAssetDTO } from "../../../dtos/ICreateAssetDTO";
import { Asset } from "../entities/Asset";
import { IAssetsRepository } from "../IAssetsRepository";



class AssetsRepository implements IAssetsRepository {
    private assets: Asset[];
    
    private static INSTANCE: AssetsRepository;

    private constructor() {
        this.assets = [];
    }

    public static getInstance(): AssetsRepository {
        if(!AssetsRepository.INSTANCE){
            AssetsRepository.INSTANCE = new AssetsRepository()
        }
        return AssetsRepository.INSTANCE
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
        
        this.assets.push(asset)
        
        return asset
    }
    
    async findById(id: string): Promise<Asset> {
        return this.assets.find(asset => asset.id ===id)
    }
    
    async listAll(name: string): Promise<Asset[]> {
        const all = this.assets.filter( assets => assets.name === name)
        return all
    }
}

export { AssetsRepository }
import { Request, Response } from "express";
import { AssetsRepository } from "../../typeorm/repositories/AssetsRepository";
import { CreateAssetUseCase } from "./CreateAssetUseCase";

class CreateAssetController {
    async handle(request: Request, response: Response): Promise<any> {
        const {name, 
            description, 
            model, 
            owner, 
            status, 
            health,
            unit
        } = request.body;
        
        const assetsRepository = AssetsRepository.getInstance()
        const createAssetUseCase = new CreateAssetUseCase(assetsRepository)

        const asset = await createAssetUseCase.execute({name, 
            description, 
            model,
            owner, 
            status, 
            health,
            unit
        })
        
        return response.status(201).json(asset)
    }

}
export { CreateAssetController }
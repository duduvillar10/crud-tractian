import { Request, Response } from "express";
import { AssetsRepository } from "../../typeorm/repositories/AssetsRepository";
import { ListAssetsUseCase } from "./ListAssetsUseCase";


class ListAssetsController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const assetsRepository = AssetsRepository.getInstance()
        const listAssetsUseCase = new ListAssetsUseCase(assetsRepository)

        const assets = await listAssetsUseCase.execute(name);

        return response.json(assets)
    }
}

export { ListAssetsController }
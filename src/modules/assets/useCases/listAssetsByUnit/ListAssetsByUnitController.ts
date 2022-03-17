import { Request, Response } from 'express';
import { ListAssetsByUnitUseCase } from './ListAssetsByUnitUseCase';

import { container } from 'tsyringe';

class ListAssetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listAssetsByUnitUseCase = container.resolve(ListAssetsByUnitUseCase);

    const assets = await listAssetsByUnitUseCase.execute(id);

    return response.json(assets);
  }
}

export { ListAssetsController };

import { Request, Response } from 'express';
import { ListAssetsByUnitUseCase } from './ListAssetsByUnitUseCase';

import { container } from 'tsyringe';

class ListAssetsByUnitController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listAssetsByUnitUseCase = container.resolve(ListAssetsByUnitUseCase);

    const assets = await listAssetsByUnitUseCase.execute(id);

    return response.status(200).json(assets);
  }
}

export { ListAssetsByUnitController };

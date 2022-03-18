import { Request, Response } from 'express';
import { GetAssetUseCase } from './GetAssetUseCase';

import { container } from 'tsyringe';

class GetAssetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getAssetUseCase = container.resolve(GetAssetUseCase);

    const asset = await getAssetUseCase.execute(id);

    return response.status(200).json(asset);
  }
}

export { GetAssetController };

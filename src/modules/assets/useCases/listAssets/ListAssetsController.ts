import { Request, Response } from 'express';
import { ListAssetsUseCase } from './ListAssetsUseCase';

import { container } from 'tsyringe';

class ListAssetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAssetsUseCase = container.resolve(ListAssetsUseCase);

    const assets = await listAssetsUseCase.execute();

    return response.json(assets);
  }
}

export { ListAssetsController };

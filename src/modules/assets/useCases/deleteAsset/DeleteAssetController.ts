import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteAssetUseCase } from './DeleteAssetUseCase';

class DeleteAssetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteAssetUseCase = container.resolve(DeleteAssetUseCase);

    const { id } = request.params;

    await deleteAssetUseCase.execute(id);

    return response.status(204).send();
  }
}

export { DeleteAssetController };

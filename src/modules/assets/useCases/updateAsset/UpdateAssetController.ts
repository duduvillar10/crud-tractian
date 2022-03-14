import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateAssetUseCase } from './UpdateAssetUseCase';

class UpdateAssetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, model, owner, status, health } = request.body;

    const { id } = request.params;

    const updateAssetsUseCase = container.resolve(UpdateAssetUseCase);

    await updateAssetsUseCase.execute(id, {
      name,
      description,
      model,
      owner,
      status,
      health,
    });

    return response.status(204).send();
  }
}

export { UpdateAssetController };

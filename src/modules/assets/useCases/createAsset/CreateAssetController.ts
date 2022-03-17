import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAssetUseCase } from './CreateAssetUseCase';

class CreateAssetController {
  async handle(request: Request, response: Response): Promise<any> {
    const { name, description, model, owner, unit, image } = request.body;

    const createAssetUseCase = container.resolve(CreateAssetUseCase);

    const asset = await createAssetUseCase.execute({
      name,
      description,
      model,
      owner,
      unit,
    });

    return response.status(201).json(asset);
  }
}
export { CreateAssetController };

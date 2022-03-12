import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUnitUseCase } from './CreateUnitUseCase';

class CreateUnitController {
  async handle(request: Request, response: Response): Promise<any> {
    const { name, description, company } = request.body;

    const createUnitUseCase = container.resolve(CreateUnitUseCase);

    const asset = await createUnitUseCase.execute({
      name,
      description,
      company,
    });

    return response.status(201).json(asset);
  }
}
export { CreateUnitController };

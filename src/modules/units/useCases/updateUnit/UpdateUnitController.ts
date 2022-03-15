import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateUnitUseCase } from './UpdateUnitUseCase';

class UpdateUnitController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const { id } = request.params;

    const updateUnitUseCase = container.resolve(UpdateUnitUseCase);

    await updateUnitUseCase.execute(id, {
      name,
      description,
    });

    return response.status(204).send();
  }
}

export { UpdateUnitController };

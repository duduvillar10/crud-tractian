import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteUnitUseCase } from './DeleteUnitUseCase';

class DeleteUnitController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteUnitUseCase = container.resolve(DeleteUnitUseCase);
    const { id } = request.params;

    await deleteUnitUseCase.execute(id);

    return response.status(204).send();
  }
}

export { DeleteUnitController };

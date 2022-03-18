import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { GetUnitUseCase } from './GetUnitUseCase';

class GetUnitController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getUnitUseCase = container.resolve(GetUnitUseCase);

    const unit = await getUnitUseCase.execute(id);

    return response.status(200).json(unit);
  }
}

export { GetUnitController };

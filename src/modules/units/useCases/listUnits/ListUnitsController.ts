import { Request, Response } from 'express';
import { ListUnitsUseCase } from './ListUnitsUseCase';

import { container } from 'tsyringe';

class ListUnitsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUnitsUseCase = container.resolve(ListUnitsUseCase);

    const units = await listUnitsUseCase.execute();

    return response.json(units);
  }
}

export { ListUnitsController };

import { Request, Response } from 'express';
import { ListUnitsByCompanyUseCase } from './ListUnitsByCompanyUseCase';

import { container } from 'tsyringe';

class ListUnitsByCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listUnitsByCompanyUseCase = container.resolve(
      ListUnitsByCompanyUseCase,
    );

    const units = await listUnitsByCompanyUseCase.execute(id);

    return response.json(units);
  }
}

export { ListUnitsByCompanyController };

import { Request, Response } from 'express';
import { ListUsersByCompanyUseCase } from './ListUsersByCompanyUseCase';

import { container } from 'tsyringe';

class ListUsersByCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listUsersByCompanyUseCase = container.resolve(
      ListUsersByCompanyUseCase,
    );

    const units = await listUsersByCompanyUseCase.execute(id);

    return response.json(units);
  }
}

export { ListUsersByCompanyController };

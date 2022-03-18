import { Request, Response } from 'express';
import { GetCompanyUseCase } from './GetCompanyUseCase';

import { container } from 'tsyringe';

class GetCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getCompanyUseCase = container.resolve(GetCompanyUseCase);

    const company = await getCompanyUseCase.execute(id);

    return response.status(200).json(company);
  }
}

export { GetCompanyController };

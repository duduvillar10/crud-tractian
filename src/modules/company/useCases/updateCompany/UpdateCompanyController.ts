import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateCompanyUseCase } from './UpdateCompanyUseCase';

class UpdateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const { id } = request.params;

    const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase);

    await updateCompanyUseCase.execute(id, {
      name,
      description,
    });

    return response.status(204).send();
  }
}

export { UpdateCompanyController };

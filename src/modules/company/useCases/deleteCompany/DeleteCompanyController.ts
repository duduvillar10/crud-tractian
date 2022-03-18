import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteCompanyUseCase } from './DeleteCompanyUseCase';

class DeleteCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteCompanyUseCase = container.resolve(DeleteCompanyUseCase);

    const { id } = request.params;

    await deleteCompanyUseCase.execute(id);

    return response.status(204).send();
  }
}

export { DeleteCompanyController };

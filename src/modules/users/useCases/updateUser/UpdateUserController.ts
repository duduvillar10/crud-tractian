import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, cpf, company } = request.body;
    const { id } = request.user;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute(id, {
      name,
      email,
      password,
      cpf,
      company,
    });

    return response.status(204).send();
  }
}

export { UpdateUserController };

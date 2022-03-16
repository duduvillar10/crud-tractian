import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteUserUseCase } from './DeleteUserUseCase';

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<any> {
    const { id } = request.user;
    const celeteUserUseCase = container.resolve(DeleteUserUseCase);

    await celeteUserUseCase.execute(id);

    return response.status(201).send();
  }
}
export { DeleteUserController };

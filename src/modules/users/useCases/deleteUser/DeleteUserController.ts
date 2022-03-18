import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteUserUseCase } from './DeleteUserUseCase';

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<any> {
    const { id } = request.params;

    const celeteUserUseCase = container.resolve(DeleteUserUseCase);

    await celeteUserUseCase.execute(id);

    return response.status(204).send();
  }
}
export { DeleteUserController };

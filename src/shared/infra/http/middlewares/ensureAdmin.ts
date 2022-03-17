import { Request, Response, NextFunction } from 'express';
import { UsersRepository } from '../../../../modules/users/infra/repositories/UsersRepository';
import { AppError } from '../../../errors/AppError';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const { id } = request.user;

  const usersRespository = new UsersRepository();
  const user = await usersRespository.findById(id);

  if (!user.isAdmin) {
    throw new AppError("user isn't admin!");
  }

  return next();
}

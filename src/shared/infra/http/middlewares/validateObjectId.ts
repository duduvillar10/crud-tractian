import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { AppError } from '../../../errors/AppError';

export async function validateObjectId(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const { id } = request.params;

  const isValid = isValidObjectId(id);

  if (!isValid) {
    throw new AppError('Invalid id!', 403);
  }

  next();
}

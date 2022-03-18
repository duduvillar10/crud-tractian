import NodeCache from 'node-cache';
import { container } from 'tsyringe';
import { Response, Request, NextFunction } from 'express';
import { IAsset } from '../../../../modules/assets/infra/entities/Asset';

export default async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void | Response> => {
  const nodeCache = container.resolve<NodeCache>('NodeCache');

  const value = nodeCache.get(request.baseUrl);

  if (value) {
    return response.json(value);
  }

  next();
};

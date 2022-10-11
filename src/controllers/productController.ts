import { RequestHandler, Request, Response, NextFunction } from 'express';
import { ResponseStatus } from '../abstracts/enums';
import { ResponseData } from '../abstracts/interfaces';

export const getAllProducts: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const response: ResponseData = {
    status: ResponseStatus.success,
    message: 'Hello from the server side!',
  };

  return res.status(200).json(response);
};

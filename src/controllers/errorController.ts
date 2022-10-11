import { NextFunction, Request, RequestHandler, Response } from 'express';
import { NODE_ENV, ResponseStatus } from '../abstracts/enums';
import { ResponseData } from '../abstracts/interfaces';
import AppError from '../utils/appError';

const sendErrorDev: Function = (err: AppError, res: Response) => {
  const response: ResponseData = {
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  };

  res.status(err.statusCode).json(response);
};

const sendErrorProd: Function = (err: AppError, res: Response) => {
  if (err.isOperational) {
    // Operational Errors: Errors invoked my developer
    const response: ResponseData = {
      status: err.status,
      message: err.message,
    };

    res.status(err.statusCode).json(response);
  } else {
    // Programming error: Unknown error, do not leak details

    // 1) Log Error
    console.error('ERROR 💥', err);

    // 2) Send Generic Message
    const response: ResponseData = {
      status: ResponseStatus.error,
      message: 'Something went wrong!',
    };

    res.status(500).json(response);
  }
};

const globalErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || ResponseStatus.error;

  if (process.env.NODE_ENV === NODE_ENV.development) {
    sendErrorDev(err, res);
  } else {
    sendErrorProd(err, res);
  }
};

export default globalErrorHandler;

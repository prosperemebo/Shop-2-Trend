import { ResponseStatus } from './enums';

export interface AppErrorInterface {
  statusCode: number;
  isOperational: boolean;
  status: ResponseStatus;
  message: string;
}

export interface ResponseData {
  status: ResponseStatus;
  message?: string;
  data?: any;
  error?: any;
  stack?: any;
}

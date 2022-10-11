import express, { Application, Request, Response, NextFunction } from 'express';
import { NODE_ENV } from './abstracts/enums';
import globalErrorHandler from './controllers/errorController';
import { productRouter } from './routes/productRouter';
import AppError from './utils/appError';

const morgan = require('morgan');

const app: Application = express();

// Development Logging
if (process.env.NODE_ENV === NODE_ENV.development) {
  app.use(morgan('dev'));
}

// Add requetTime to Request
app.use((req: Request, res: Response, next: NextFunction) => {
  Object.assign(req, { requestTime: new Date().toISOString() });

  next();
});

app.use('/api/v1/products', productRouter);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;

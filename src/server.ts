import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

import app from './app';

declare global {
  namespace Express {
    interface Request {
      requestTime: string;
      user: {};
    }
  }
}

// SAFETY NET BEFORE MAIN APPLICATON: CATCHES ALL EXCEPTION
process.on('uncaughtException', ({ name, message, stack }: Error) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log('ERROR', { name, message, stack });

  process.exit(1);
});

const port: number = 3000 || process.env.PORT;

const server = app.listen(port, () =>
  console.log(`App running on port ${port}`)
);

// SERVER HAS AN UNHANDLED ERROR
process.on('unhandledRejection', ({ name, message, stack }: Error) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log('ERROR', { name, message, stack });

  server.close(() => process.exit(1));
});

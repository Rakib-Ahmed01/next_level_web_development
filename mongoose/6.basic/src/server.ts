import cors from 'cors';
import express, { Application } from 'express';
import {
  globalErrorHandler,
  notFoundHandler,
} from './app/middlewares/error.middleware';
import userRouter from './app/modules/user/user.route';
import { connectDb } from './app/utils/db';
export const app: Application = express();

// use middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use('/api/v1/user', userRouter);

// error middleware
app.use(notFoundHandler);
app.use(globalErrorHandler);

import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

interface CustomError extends Error {
  status?: number;
}

export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const error: CustomError = new Error('404 Resource Not Found!');
  error.status = 404;
  next(error);
}

export function globalErrorHandler(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof mongoose.Error.ValidationError) {
    const errors = Object.values(err.errors).map((err) => err.message);

    return res.status(400).json({
      message: 'Validation error',
      errors,
    });
  }

  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      message: err.message,
      error: err,
    });
  }

  const statusCode = err.status ? err.status : 500;

  return res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : null,
    status: statusCode,
  });
}

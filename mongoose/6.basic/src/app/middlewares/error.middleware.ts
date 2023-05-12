import { NextFunction, Request, Response } from 'express';

interface CustomError extends Error {
  status?: number;
}

export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const error: CustomError = new Error('404 Page Not Found');
  error.status = 404;
  next(error);
}

export function globalErrorHandler(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.status ? err.status : 500;

  return res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : null,
    status: statusCode,
  });
}

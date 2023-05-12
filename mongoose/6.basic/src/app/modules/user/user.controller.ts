import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { createUserToDb, getAllUsers, getUserById } from './user.services';

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await createUserToDb(user);

  res.status(200).json({
    status: 'success',
    data: result,
  });
});

export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await getAllUsers();

  res.status(200).json({
    status: 'success',
    data: users,
  });
});

export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await getUserById(userId);

  res.status(200).json({
    status: 'success',
    data: user,
  });
});

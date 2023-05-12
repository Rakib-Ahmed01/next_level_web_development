import { Request, Response } from 'express';
import { createUserToDb, getAllUsers } from './user.services';

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  const result = await createUserToDb(user);

  res.status(200).json({
    status: 'success',
    data: result,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsers();

  res.status(200).json({
    status: 'success',
    data: users,
  });
};

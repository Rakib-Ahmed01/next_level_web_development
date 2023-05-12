import { Request, Response } from 'express';
import { createUserToDb } from './user.services';

export const createUser = async (req: Request, res: Response) => {
  const user = await createUserToDb();

  res.json(user);
};

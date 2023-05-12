import { IUser } from './user.interface';
import User from './user.model';

export const createUserToDb = async (user: IUser) => {
  const createdUser = new User(user);

  await createdUser.save();

  return createdUser;
};

export const getAllUsers = async () => {
  const users = await User.find({});

  return users;
};

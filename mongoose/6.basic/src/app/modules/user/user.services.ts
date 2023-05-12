import { IUser } from './user.interface';
import User from './user.model';

export const createUserToDb = async (user: IUser): Promise<IUser> => {
  const createdUser = new User(user);

  await createdUser.save();

  return createdUser;
};

export const getAllUsers = async (): Promise<IUser[]> => {
  const users = await User.find({});

  return users;
};

export const getUserById = async (userId: string) => {
  const user = await User.findOne({ _id: userId });

  return user;
};

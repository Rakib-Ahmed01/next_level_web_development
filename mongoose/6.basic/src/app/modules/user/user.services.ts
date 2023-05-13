import { HydratedDocument } from 'mongoose';
import { IUser } from './user.interface';
import User from './user.model';

export const createUserToDb = async (user: IUser): Promise<IUser> => {
  const createdUser: HydratedDocument<IUser> = new User(user);

  await createdUser.save();

  return createdUser;
};

export const getAllUsers = async (): Promise<IUser[]> => {
  const users = await User.find({});

  return users;
};

export const getUserById = async (
  userId: string
): Promise<Partial<IUser> | null> => {
  const user = await User.findOne(
    { _id: userId },
    {
      name: 1,
      id: 1,
    }
  );

  console.log(user?.fullName());

  return user;
};

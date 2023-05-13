import { HydratedDocument, Model } from 'mongoose';

export interface IUser {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
}

export interface IUserMethods {
  fullName: () => string;
}

// export type UserModel = Model<IUser, {}, IUserMethods>;

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  findByName(name: string): HydratedDocument<IUser, IUserMethods>;
}

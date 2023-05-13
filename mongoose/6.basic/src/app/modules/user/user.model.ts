import { Schema, model } from 'mongoose';
import { IUser, IUserMethods, UserModel } from './user.interface';

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
});

userSchema.methods.fullName = function () {
  return `${this.name.firstName} ${this.name.lastName}`;
};

userSchema.static('findByName', function findBName(name) {
  return this.findOne({ name });
});

const User = model<IUser, UserModel>('User', userSchema);

export default User;

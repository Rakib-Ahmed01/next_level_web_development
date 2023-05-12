import User from './user.model';

export const createUserToDb = async () => {
  const user = new User({
    id: 1,
    name: {
      firstName: 'Rakib',
      lastName: 'Ahmed',
    },
  });

  await user.save();

  return user;
};

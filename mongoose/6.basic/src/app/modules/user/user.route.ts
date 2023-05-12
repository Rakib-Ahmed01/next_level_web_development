import express from 'express';
import { createUser } from './user.controller';

const userRouter = express.Router();

userRouter.get('/', createUser);

export default userRouter;

import express from 'express';
import { createUser, getUsers } from './user.controller';

const router = express.Router();

router.route('/').get(getUsers).post(createUser);

export default router;

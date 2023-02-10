import express from 'express';
import { UserController } from './controller';
const router = express.Router();
const controller = new UserController();

router.post('/',controller.createUser);
router.post('/verify',controller.findUser);

export default router;
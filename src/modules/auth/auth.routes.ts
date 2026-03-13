import { Router } from 'express';
import * as authController from './auth.controller';
import { sessionAuth } from '../../middleware/sessionAuth';

const router = Router();

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/logout-all', sessionAuth, authController.logoutAll);
router.get('/sessions', sessionAuth, authController.getSessions);

export const authRoutes = router;
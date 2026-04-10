import { Router } from 'express';
import { AIController } from './ai.controller.js';

const router = Router();

router.post('/chat', AIController.chat);
router.post('/roadmap', AIController.generateRoadmap);

export const AIRoutes = router;

import { Router } from 'express';
import { upload } from '../../lib/cloudinary.js';
import { UploadController } from './upload.controller.js';
import { auth } from '../../lib/auth.js';
import { fromNodeHeaders } from 'better-auth/node';

const router = Router();

// Middleware to check if user is logged in (using better-auth)
const checkAuth = async (req: any, res: any, next: any) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  req.user = session.user;
  next();
};

router.post('/image', checkAuth, upload.single('image'), UploadController.uploadImage);

export default router;

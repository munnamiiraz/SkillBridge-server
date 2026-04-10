import { Request, Response } from 'express';

export class UploadController {
  static async uploadImage(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'No file uploaded',
        });
      }

      // Multer-storage-cloudinary adds the cloudinary path and url to the file object
      const file = req.file as any;

      res.status(200).json({
        success: true,
        message: 'Image uploaded successfully',
        data: {
          url: file.path, // This is the Cloudinary URL
          public_id: file.filename,
        },
      });
    } catch (error: any) {
      console.error('Upload error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to upload image',
        error: error.message,
      });
    }
  }
}

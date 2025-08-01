import { Router, Request, Response, NextFunction } from 'express';
import sendContactEmail from '../brevoService';
import multer from 'multer';
import sendCvEmail from '../brevoServiceCV';

const router = Router();


router.post('/getintouch', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const formData = req.body;
  // console.log("formdata backend:", formData);

  // Validate required fields
  if (!formData.name || !formData.email || !formData.phone) {
    res.status(400).json({ error: 'Name, email, and phone are required.' });
    return; // Early return after sending the response
  }

  try {
    // Call the email sending service
    await sendContactEmail(formData);
    res.status(200).json({ message: 'Form submitted successfully, email sent.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error, email not sent.' });
  }
});

////////////////////////////////////////////////////////////


// const storage = multer.memoryStorage();
// const upload = multer({ storage });

const upload = multer();

router.post('/sendcv', upload.single('cv'), async (req: Request, res: Response): Promise<void> => {
  const { name, email } = req.body;
  const cv = req.file;  // This will contain the uploaded file

  if (!cv) {
    res.status(400).json({ error: 'CV file is required.' });
    return; // Make sure to return early after sending the response
  }

  try {
    // Log file info for debugging
    // console.log('Received form data:', { name, email });
    // console.log('File information:', req.file);

    // Call your function to send the email with the CV as an attachment
    await sendCvEmail({ name, email, cv });

    res.status(200).json({ message: 'CV sent successfully.' });
  } catch (error) {
    console.error('Error sending CV:', error);
    res.status(500).json({ error: 'Internal Server Error, CV not sent.' });
  }
});

export default router;

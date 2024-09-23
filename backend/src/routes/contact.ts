import { Router, Request, Response, NextFunction } from 'express';
import sendContactEmail from '../brevoService';
import multer from 'multer';
import sendCvEmail from '../brevoServiceCV';

const router = Router();

// Define the POST route for contact form submission
router.post('/getintouch', async (req: Request, res: Response, next: NextFunction) => {
  const formData = req.body;

  // Validate required fields
  if (!formData.name || !formData.email || !formData.phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required.' });
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

// // Set up multer to store files in memory
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // Define the POST route to handle CV submission
// router.post('/sendcv', upload.single('cv'), async (req: Request, res: Response) => {
//   const { name, email } = req.body;

//   // Log the incoming request
//   console.log('Received form data:', { name, email });
//   console.log('File information:', req.file);

//   if (!req.file) {
//     return res.status(400).json({ error: 'CV file is required.' });
//   }

//   try {
//     // Send the email with the CV as an attachment
//     await sendCvEmail({
//       name,
//       email,
//       cv: req.file,  // Attach the file
//     });
//     res.status(200).json({ message: 'CV sent successfully.' });
//   } catch (error) {
//     // Log the error
//     console.error('Error sending CV:', error);
//     res.status(500).json({ error: 'Internal Server Error, CV not sent.' });
//   }
// });

const storage = multer.memoryStorage();
const upload = multer({ storage });


// Define the route to handle the CV submission
router.post('/sendcv', upload.single('cv'), async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const cv = req.file;  // This will contain the uploaded file

  if (!cv) {
    return res.status(400).json({ error: 'CV file is required.' });
  }

  try {
    // Log file info for debugging
    console.log('Received form data:', { name, email });
    console.log('File information:', req.file);

    // Call your function to send the email with the CV as an attachment
    await sendCvEmail({ name, email, cv });
    res.status(200).json({ message: 'CV sent successfully.' });
  } catch (error) {
    console.error('Error sending CV:', error);
    res.status(500).json({ error: 'Internal Server Error, CV not sent.' });
  }
});

export default router;

import express, { Request, Response, NextFunction } from 'express';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';
import helmet from 'helmet';
import path from 'path';

dotenv.config();

const app = express();

// Define the CORS options
const corsOptions: CorsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};

// Add security headers to requests using Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'", // Allow inline scripts
          "'unsafe-eval'", // Allow eval (if necessary)
          'https://cdnjs.cloudflare.com', // Allow Font Awesome
          'https://kit.fontawesome.com', // Allow Font Awesome Kit (if used)
        ],
        styleSrc: [
          "'self'",
          "'unsafe-inline'", // Allow inline styles
          'https://fonts.googleapis.com', // Allow Google Fonts
        ],
        imgSrc: [
          "'self'",
          'data:',
          'https://apt-media-video.s3.eu-north-1.amazonaws.com',
          'https://your_image_source.com', // Add any other image sources if necessary
        ],
        fontSrc: [
          "'self'",
          'https://fonts.gstatic.com', // Allow Google Fonts
        ],
        connectSrc: [
          "'self'",
          'https://apt-media-video.s3.eu-north-1.amazonaws.com',
          process.env.FRONTEND_URL || 'http://localhost:5173',
        ],
      },
    },
  })
);

// Other middleware and route definitions...

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express, { Request, Response, NextFunction } from 'express';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';  // Use import instead of require
import helmet from 'helmet';
// import compression from 'compression';
import path from 'path';

dotenv.config();

// deployment
const app = express();

const corsOptions: CorsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};

// Add security headers to requests using Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        // Allow only your own domain and the S3 bucket
        defaultSrc: ["'self'"],
        // Allow media (video/audio) from S3 bucket
        mediaSrc: ["'self'", 'https://apt-media-video.s3.eu-north-1.amazonaws.com'],
        // Allow inline scripts and scripts from 'self'
        scriptSrc: [
          "'self'",
          "'unsafe-inline'", // Allow inline scripts
          "'unsafe-eval'", // Allow eval (if necessary)
          'https://cdnjs.cloudflare.com', // Allow Font Awesome
          'https://kit.fontawesome.com', // Allow Font Awesome Kit (if used)
        ], // Include 'unsafe-inline' for script tag if needed
        // Allow inline styles, Google Fonts, and self-hosted styles
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          'https://fonts.googleapis.com',
          'https://cdnjs.cloudflare.com',
        ],
        // Allow images from S3 bucket and self
        imgSrc: ["'self'", 'data:', 'https://apt-media-video.s3.eu-north-1.amazonaws.com'],
        // Allow fonts from Google Fonts and self
        fontSrc: ["'self'", 'https://fonts.gstatic.com', 'https://cdnjs.cloudflare.com',],
        // Allow connections to the S3 bucket
        connectSrc: ["'self'",
           'https://apt-media-video.s3.eu-north-1.amazonaws.com',
          process.env.FRONTEND_URL || 'http://localhost:5173',
           process.env.BACKEND_URL || 'http://localhost:5001',
        ],
      },
    },
  })
);


// Enable response compression using Compression middleware
// app.use(compression());

// Use CORS with the options
app.use(cors(corsOptions));

// Enable preflight requests for all routes (OPTIONS method)
app.options('*', cors(corsOptions));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
// });

let correct_path = process.env.NODE_ENV === 'development' ? '../../frontend/' : '../../frontend/dist';

app.use(express.static(path.join(__dirname, correct_path)));

app.use('/api', contactRoutes);

let correct_path2 = process.env.NODE_ENV === 'development' ? '../../frontend/index.html' : '../../frontend/dist/index.html';

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, correct_path2));
});


// Add app.listen to start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

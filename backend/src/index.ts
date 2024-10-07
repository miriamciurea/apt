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

// Define the CORS options
const corsOptions: CorsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};

// Add security headers to requests using Helmet
// app.use(helmet());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        mediaSrc: ["'self'", 'https://apt-media-video.s3.eu-north-1.amazonaws.com'], // Allow your S3 bucket
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https://apt-media-video.s3.eu-north-1.amazonaws.com'], // Allow images from S3
        connectSrc: ["'self'", 'https://apt-media-video.s3.eu-north-1.amazonaws.com'], // Allow connections to S3
        fontSrc: ["'self'", 'https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
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

app.use(express.static(path.join(__dirname, '../../frontend/dist')));
// dist/backend/src/index.js
// '/Users/miriamciurea/code/miriamciurea/apt/dist/frontend/index.html'


// node backend/dist/index.js"

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

// Use the contact form routes
app.use('/api', contactRoutes);

// Add app.listen to start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

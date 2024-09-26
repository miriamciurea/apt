// import express, { Request, Response, NextFunction } from 'express';
// import cors, { CorsOptions } from 'cors';  // Import cors with its types
// import dotenv from 'dotenv';
// // import contactRoutes from './routes/contact';
// const contactRoutes = require('./routes/contact');
// import helmet from 'helmet';
// import compression from 'compression';

// dotenv.config();  // Load environment variables

// // deployment

// const path = require('path');



// // deployment

// const app = express();

// // Define the CORS options
// const corsOptions: CorsOptions = {
//   origin: 'http://localhost:5173',  // Your frontend origin
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
//   credentials: true,  // If you need to send cookies or HTTP credentials
// };

// // Add security headers to requests using Helmet
// app.use(helmet());

// // Enable response compression using Compression middleware
// app.use(compression());

// // Use CORS with the options
// app.use(cors(corsOptions));

// // Enable preflight requests for all routes (OPTIONS method)
// app.options('*', cors(corsOptions));

// // Middleware to parse incoming JSON requests
// app.use(express.json());

// app.use(express.static(path.join(__dirname, '../../frontend/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
// });

// // Use the contact form routes
// app.use('/api', contactRoutes);  // '/api/getintouch' will now hit your route

// // app.post('/api/getintouch', (req: Request, res: Response, next: NextFunction) => {
// //   res.json({ message: 'Success' });
// // });

// // Add app.listen to start the server
// const PORT = process.env.PORT || 5001;  // Use environment variable or default to port 5001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import express, { Request, Response, NextFunction } from 'express';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';  // Use import instead of require
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';

dotenv.config();

// deployment
const app = express();

// Define the CORS options
const corsOptions: CorsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};

// Add security headers to requests using Helmet
app.use(helmet());

// Enable response compression using Compression middleware
app.use(compression());

// Use CORS with the options
app.use(cors(corsOptions));

// Enable preflight requests for all routes (OPTIONS method)
app.options('*', cors(corsOptions));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

// Use the contact form routes
app.use('/api', contactRoutes);

// Add app.listen to start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

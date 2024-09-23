import express, { Request, Response, NextFunction } from 'express';
import cors, { CorsOptions } from 'cors';  // Import cors with its types
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';

dotenv.config();  // Load environment variables

const app = express();

// Define the CORS options
const corsOptions: CorsOptions = {
  origin: 'http://localhost:5173',  // Your frontend origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true,  // If you need to send cookies or HTTP credentials
};

// Use CORS with the options
app.use(cors(corsOptions));

// Enable preflight requests for all routes (OPTIONS method)
app.options('*', cors(corsOptions));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the contact form routes
app.use('/api', contactRoutes);  // '/api/getintouch' will now hit your route

// app.post('/api/getintouch', (req: Request, res: Response, next: NextFunction) => {
//   res.json({ message: 'Success' });
// });

// Add app.listen to start the server
const PORT = process.env.PORT || 5001;  // Use environment variable or default to port 5001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

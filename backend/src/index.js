"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var contact_1 = require("./routes/contact"); // Use import instead of require
var helmet_1 = require("helmet");
// import compression from 'compression';
var path_1 = require("path");
dotenv_1.default.config();
// deployment
var app = (0, express_1.default)();
// Define the CORS options
var corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
};
// Add security headers to requests using Helmet
app.use((0, helmet_1.default)({
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
                'https://www.aptelecommunication.co.uk',
            ],
        },
    },
}));
// Enable response compression using Compression middleware
// app.use(compression());
// Use CORS with the options
app.use((0, cors_1.default)(corsOptions));
// Enable preflight requests for all routes (OPTIONS method)
app.options('*', (0, cors_1.default)(corsOptions));
// Middleware to parse incoming JSON requests
app.use(express_1.default.json());
// Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, '../../frontend/dist')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
// });
app.use(express_1.default.static(path_1.default.join(__dirname, '../../frontend/dist')));
// dist/backend/src/index.js
// '/Users/miriamciurea/code/miriamciurea/apt/dist/frontend/index.html'
// node backend/dist/index.js"
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../frontend/dist/index.html'));
});
// Use the contact form routes
app.use('/api', contact_1.default);
// Add app.listen to start the server
var PORT = process.env.PORT || 5001;
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});

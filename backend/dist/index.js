"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const contact_1 = __importDefault(require("./routes/contact")); // Use import instead of require
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
// deployment
const app = (0, express_1.default)();
// Define the CORS options
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
};
// Add security headers to requests using Helmet
app.use((0, helmet_1.default)());
// Enable response compression using Compression middleware
app.use((0, compression_1.default)());
// Use CORS with the options
app.use((0, cors_1.default)(corsOptions));
// Enable preflight requests for all routes (OPTIONS method)
app.options('*', (0, cors_1.default)(corsOptions));
// Middleware to parse incoming JSON requests
app.use(express_1.default.json());
// Serve static files from the React frontend app
app.use(express_1.default.static(path_1.default.join(__dirname, '../../frontend/dist')));
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../frontend/dist', 'index.html'));
});
// Use the contact form routes
app.use('/api', contact_1.default);
// Add app.listen to start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

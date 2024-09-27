"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brevoService_1 = __importDefault(require("../brevoService"));
const multer_1 = __importDefault(require("multer"));
const brevoServiceCV_1 = __importDefault(require("../brevoServiceCV"));
const router = (0, express_1.Router)();
// Define the POST route for contact form submission
// router.post('/getintouch', async (req: Request, res: Response, next: NextFunction) => {
//   const formData = req.body;
//   // Validate required fields
//   if (!formData.name || !formData.email || !formData.phone) {
//     return res.status(400).json({ error: 'Name, email, and phone are required.' });
//   }
//   try {
//     // Call the email sending service
//     await sendContactEmail(formData);
//     res.status(200).json({ message: 'Form submitted successfully, email sent.' });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error, email not sent.' });
//   }
// });
router.post('/getintouch', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const formData = req.body;
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
        res.status(400).json({ error: 'Name, email, and phone are required.' });
        return; // Early return after sending the response
    }
    try {
        // Call the email sending service
        yield (0, brevoService_1.default)(formData);
        res.status(200).json({ message: 'Form submitted successfully, email sent.' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error, email not sent.' });
    }
}));
////////////////////////////////////////////////////////////
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
// Define the route to handle the CV submission
// router.post('/sendcv', upload.single('cv'), async (req: Request, res: Response) => {
//   const { name, email } = req.body;
//   const cv = req.file;  // This will contain the uploaded file
//   if (!cv) {
//     return res.status(400).json({ error: 'CV file is required.' });
//   }
//   try {
//     // Log file info for debugging
//     console.log('Received form data:', { name, email });
//     console.log('File information:', req.file);
//     // Call your function to send the email with the CV as an attachment
//     await sendCvEmail({ name, email, cv });
//     res.status(200).json({ message: 'CV sent successfully.' });
//   } catch (error) {
//     console.error('Error sending CV:', error);
//     res.status(500).json({ error: 'Internal Server Error, CV not sent.' });
//   }
// });
router.post('/sendcv', upload.single('cv'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const cv = req.file; // This will contain the uploaded file
    if (!cv) {
        res.status(400).json({ error: 'CV file is required.' });
        return; // Make sure to return early after sending the response
    }
    try {
        // Log file info for debugging
        console.log('Received form data:', { name, email });
        console.log('File information:', req.file);
        // Call your function to send the email with the CV as an attachment
        yield (0, brevoServiceCV_1.default)({ name, email, cv });
        res.status(200).json({ message: 'CV sent successfully.' });
    }
    catch (error) {
        console.error('Error sending CV:', error);
        res.status(500).json({ error: 'Internal Server Error, CV not sent.' });
    }
}));
exports.default = router;
//# sourceMappingURL=contact.js.map
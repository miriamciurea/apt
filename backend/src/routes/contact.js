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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var brevoService_1 = require("../brevoService");
var multer_1 = require("multer");
var brevoServiceCV_1 = require("../brevoServiceCV");
var router = (0, express_1.Router)();
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
router.post('/getintouch', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var formData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                formData = req.body;
                // Validate required fields
                if (!formData.name || !formData.email || !formData.phone) {
                    res.status(400).json({ error: 'Name, email, and phone are required.' });
                    return [2 /*return*/]; // Early return after sending the response
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                // Call the email sending service
                return [4 /*yield*/, (0, brevoService_1.default)(formData)];
            case 2:
                // Call the email sending service
                _a.sent();
                res.status(200).json({ message: 'Form submitted successfully, email sent.' });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error:', error_1);
                res.status(500).json({ error: 'Internal Server Error, email not sent.' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
////////////////////////////////////////////////////////////
var storage = multer_1.default.memoryStorage();
var upload = (0, multer_1.default)({ storage: storage });
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
router.post('/sendcv', upload.single('cv'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, cv, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email;
                cv = req.file;
                if (!cv) {
                    res.status(400).json({ error: 'CV file is required.' });
                    return [2 /*return*/]; // Make sure to return early after sending the response
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                // Log file info for debugging
                console.log('Received form data:', { name: name, email: email });
                console.log('File information:', req.file);
                // Call your function to send the email with the CV as an attachment
                return [4 /*yield*/, (0, brevoServiceCV_1.default)({ name: name, email: email, cv: cv })];
            case 2:
                // Call your function to send the email with the CV as an attachment
                _b.sent();
                res.status(200).json({ message: 'CV sent successfully.' });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                console.error('Error sending CV:', error_2);
                res.status(500).json({ error: 'Internal Server Error, CV not sent.' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = router;

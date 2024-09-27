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
const SibApiV3Sdk = require('sib-api-v3-sdk');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sendCvEmail = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, email, cv }) {
    const client = SibApiV3Sdk.ApiClient.instance;
    const apiKey = client.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;
    const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();
    // Convert the CV file to base64 and attach it
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
        to: [{ email: 'miriamciurea777@icloud.com' }],
        sender: { email: 'miriamciurea@gmail.com', name: 'APT' },
        subject: `New CV Submission from ${name}`,
        textContent: `You have received a new CV submission from:\nName: ${name}\nEmail: ${email}`,
        attachment: [
            {
                name: cv.originalname,
                content: cv.buffer.toString('base64'),
            },
        ],
    });
    try {
        const response = yield emailApi.sendTransacEmail(sendSmtpEmail);
        console.log('Email with CV sent successfully:', response);
    }
    catch (error) {
        console.error('Error sending email with CV:', error);
        throw error;
    }
});
exports.default = sendCvEmail;
//# sourceMappingURL=brevoServiceCV.js.map
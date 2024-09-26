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
Object.defineProperty(exports, "__esModule", { value: true });
const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();
const sendContactEmail = (formData) => __awaiter(void 0, void 0, void 0, function* () {
    let defaultClient = SibApiV3Sdk.ApiClient.instance;
    // Configure API key authorization
    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.to = [{ email: 'miriamciurea777@icloud.com' }]; // Replace with your email
    sendSmtpEmail.sender = { email: 'miriamciurea@gmail.com', name: 'APT' }; // Your verified sender email
    sendSmtpEmail.subject = `New Contact Form Submission from ${formData.name}`;
    sendSmtpEmail.textContent = `
    You have received a new contact form submission.
    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Interest: ${formData.interest}
    More Information: ${formData.moreInfo}
  `;
    try {
        yield apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Email sent successfully via Brevo');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
});
exports.default = sendContactEmail;
//# sourceMappingURL=brevoService.js.map
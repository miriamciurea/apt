const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();

interface SendCvEmailParams {
  name: string;
  email: string;
  cv: Express.Multer.File;  // The CV file uploaded by multer
}

const sendCvEmail = async ({ name, email, cv }: SendCvEmailParams) => {
  let defaultClient = SibApiV3Sdk.ApiClient.instance;

    // Configure API key authorization
  let apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.to = [{ email: process.env.BREVO_TO }];
  sendSmtpEmail.sender = { email: process.env.BREVO_TO, name: 'IT Support' };

  sendSmtpEmail.subject = `New CV Submission from ${name}`;
  sendSmtpEmail.textContent = `You have received a new CV submission from:\nName: ${name}\nEmail: ${email}`;

  sendSmtpEmail.attachment = [
      {
        name: cv.originalname,
        content: cv.buffer.toString('base64'),
      },
    ]

  try {
    const response = apiInstance.sendTransacEmail(sendSmtpEmail);
  } catch (error) {
    console.error('Error sending email with CV:', error);
    throw error;
  }
};

export default sendCvEmail;

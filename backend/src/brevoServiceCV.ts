const SibApiV3Sdk = require('sib-api-v3-sdk');
import dotenv from 'dotenv';
dotenv.config();

interface SendCvEmailParams {
  name: string;
  email: string;
  cv: Express.Multer.File;  // The CV file uploaded by multer
}

const sendCvEmail = async ({ name, email, cv }: SendCvEmailParams) => {
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
    const response = await emailApi.sendTransacEmail(sendSmtpEmail);
    console.log('Email with CV sent successfully:', response);
  } catch (error) {
    console.error('Error sending email with CV:', error);
    throw error;
  }
};

export default sendCvEmail;

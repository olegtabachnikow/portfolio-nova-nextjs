import { NextApiResponse, NextApiRequest } from 'next';
const nodemailer = require('nodemailer');

export default async function POST(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const formData = await request.body;

  const { email, name, message } = JSON.parse(formData);

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: username,
      pass: password,
    },
  });
  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      subject: `Portfolio Website activity from ${email}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
        `,
    });

    response.json({ message: 'Success: email was sent' });
  } catch (error) {
    response.status(500).json({ message: 'COULD NOT SEND MESSAGE' });
  }
}

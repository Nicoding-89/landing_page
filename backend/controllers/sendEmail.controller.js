import nodemailer from 'nodemailer';
import validateEmail from '../utils/validateEmail.js';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (req, res) => {
  const { firstName, lastName, email, subject, text } = req.body;
  if (!email.trim() || !firstName.trim() || !lastName.trim() || !subject.trim() || !text.trim()) {
    return res.status(400).json({ "message": "All fields are required." });
  };
  if(!validateEmail(email)) {
    return res.status(400).json({ "message": "Your email address appears to be invalid. Please check for any extra spaces or incorrect characters." });
  };
  const fullName = `${firstName} ${lastName}`;

  const mailConfig = {
    from: `${fullName} ${email}`, // sender address
    to: process.env.EMAIL_USER, // list of receivers
    subject: subject, // Subject line
    text: `Full name: ${fullName}\nEmail: ${email}\nMessage: ${text}`, // plain text body
  };

  try {
    const info = await transporter.sendMail(mailConfig);
    res.status(200).json({"id": `${info.messageId}`, "message": 'All done! Your message is on its way.'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ "error": error, "message": "Oops! Something went wrong" });
  };
};
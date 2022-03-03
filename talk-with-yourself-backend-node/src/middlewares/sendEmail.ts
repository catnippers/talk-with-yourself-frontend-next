import nodemailer from "nodemailer";
import { google } from "googleapis";

interface UserTypes {
  subject: string;
  email: string;
  html: string;
}

export const sendEmail = ({ subject, email, html }: UserTypes) => {
  const OAuth2 = google.auth.OAuth2;

  const myOAuth2Client = new OAuth2(process.env.CLIENT_ID_TOKEN, process.env.CLIENT_SECRET_TOKEN);

  myOAuth2Client.setCredentials({
    refresh_token: process.env.CLIENT_REFRESH_TOKEN,
  });

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      type: "OAuth2",
      user: process.env.USER_EMAIL,
      clientId: process.env.USER_ID_TOKEN,
      clientSecret: process.env.USER_SECRET_TOKEN,
      refreshToken: process.env.USER_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: "Talk with yourself catsnippers@gmail.com",
    to: email,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
};

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ResponseData = {
    message:string;
    error?:string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message ) {
        res.status(400).json({ message: "Invalid form data." });
        return;
      }


    const transporter = nodemailer.createTransport({
      service: "mailosaur",
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email,
        to: process.env.RECIPIENT_EMAIL, 
        subject: `New message from ${name}`,
        text: message,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

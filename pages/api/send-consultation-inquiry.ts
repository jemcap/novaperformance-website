import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Cors from "cors";

// Initialize CORS middleware
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'], // Allowed methods
  origin: process.env.NEXT_PUBLIC_API_URL || '*', // Allow specific origins or use '*' for all
  credentials: true, // Allow credentials if needed
});

// Helper method to run CORS middleware
const runCors = (req: NextApiRequest, res: NextApiResponse) =>
  new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });

type ResponseData = {
    message: string;
    error?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  // Run CORS middleware
  await runCors(req, res);
  
  if (req.method === "POST") {
    const { name, email, mobile } = req.body;

    if (!name || !email || !mobile) {
      res.status(400).json({ message: "Invalid Form Data" });
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
        subject: `Potential Client — New Consultation Inquiry from ${name}`,
        text: `Hello,\n\nI'm interested in joining Nova Performance and would love to discuss membership options that best suit my needs.\n\nPlease feel free to reach out at your earliest convenience via:\n\nEmail: ${email}\n\nMobile: ${mobile}\n\nI look forward to hearing from you. Thank you!\n\nBest regards,\n\n${name}`,
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

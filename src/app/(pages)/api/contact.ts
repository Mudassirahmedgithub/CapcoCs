import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { appendToSheet } from "../../lib/googleSheets";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, email, company, type, message } = req.body;

    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: ["capcocsqa@gmail.com"],
      subject: `New Contact Form Submission - ${type}`,
      html: `<p>${message}</p>`,
    });

    await appendToSheet([
      name,
      email,
      company,
      type,
      message,
      new Date().toISOString(),
    ]);

    res.status(200).json({ success: true });

  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { appendToSheet } from "../../lib/googleSheets";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, company, type, message } = body;

  try {
    // 1️⃣ Send Email via Resend
    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: ["capcocsqa@gmail.com"],
      subject: `New Contact Form Submission - ${type}`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // 2️⃣ Save to Google Sheet
    await appendToSheet([name, email, company, type, message, new Date().toISOString()]);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

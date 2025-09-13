import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({

      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const filePath = path.join(process.cwd(), "src", "app", "api", "sendEmail", "emailTemplate.html");
    let htmlContent = fs.readFileSync(filePath, "utf-8");

    const info = await transporter.sendMail({
      from: `"Jhonatan Quihuiri" <jhonatan.quihuiri@gmail.com>`,
      to: email,
      subject: "Message received | Will reply soon",
      text: message,
      html: htmlContent
    });

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return NextResponse.json(
      { message: "Email sent successfully", messageId: info.messageId },
      { status: 200 }
    );

  } catch (error: Error | unknown) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error("Error sending email:", errorMessage);
    return NextResponse.json(
      { error: "Failed to send email", details: errorMessage },
      { status: 500 }
    );
  }
}

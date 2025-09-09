// src/app/api/sendEmail/route.ts
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: testAccount.user,
        pass: testAccount.pass,
    },
  });

  const filePath = path.join(process.cwd(), "src", "app", "api", "sendEmail", "emailTemplate.html");
  let htmlContent = fs.readFileSync(filePath, "utf-8");

  const info = await transporter.sendMail({
    //from: `"${name}" <${email}>`,
    from: `"${name}" <${testAccount.user}>`,
    to: email,
    subject: "Message received | Will reply soon",
    text: message,
    html: htmlContent
  });
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


  return NextResponse.json({ messageId: info.messageId });
}

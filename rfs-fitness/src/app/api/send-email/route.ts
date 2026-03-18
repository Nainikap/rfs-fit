import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


export async function POST(req: Request) {
  const { name, email, contact, timeSlot, honeypot } = await req.json();
    try{
  if (honeypot) {
    return NextResponse.json({ success: true });
  }
  if (!name || !email || !contact || !timeSlot) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'New User Registration',
    html: `
        <h2>New User Registration from Website</h2>
         <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact number:</strong> ${contact}</p>
        <p><strong>Time Slot:</strong> ${timeSlot}</p>
        `, 
     });

  return NextResponse.json({ success: true });
    }
    catch(error){
        console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
    }
}

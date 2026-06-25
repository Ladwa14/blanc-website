import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "Blanc Esthetics <noreply@blancesthetics.com>",
      to: ["info@blancesthetics.com"],
      subject: "New Consultation Booking",

      html: `
      <h2>New Consultation Booking</h2>

      <p><strong>Name:</strong> ${body.name}</p>

      <p><strong>Phone:</strong> ${body.phone}</p>

      <p><strong>Email:</strong> ${body.email}</p>

      <p><strong>Location:</strong> ${body.location}</p>

      <p><strong>Date:</strong> ${body.date}</p>

      <p><strong>Time:</strong> ${body.time}</p>

      <p><strong>Message:</strong></p>

      <p>${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
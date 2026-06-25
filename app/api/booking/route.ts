import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: "Blanc Esthetics <noreply@blancesthetics.com>",
      to: ["denthealclinics@gmail.com"], // <-- TEMPORARY
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

    console.log("Resend Result:", result);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("RESEND ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}
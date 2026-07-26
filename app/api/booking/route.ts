import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Blanc Esthetics <info@blancesthetics.com>",
      to: ["info@blancesthetics.com"],
      subject: "New Consultation Booking",

      replyTo: body.email,

      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.7;">
          <h2>New Consultation Booking</h2>

          <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${body.name}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${body.phone}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${body.email}</td>
            </tr>

            <tr>
              <td><strong>Location</strong></td>
              <td>${body.location}</td>
            </tr>

            <tr>
              <td><strong>Date</strong></td>
              <td>${body.date}</td>
            </tr>

            <tr>
              <td><strong>Time</strong></td>
              <td>${body.time}</td>
            </tr>

            <tr>
              <td><strong>Message</strong></td>
              <td>${body.message || "No message provided."}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return NextResponse.json(
        {
          success: false,
          error,
        },
        {
          status: 500,
        }
      );
    }

    console.log("Email sent:", data);

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error("Booking API Error:", err);

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
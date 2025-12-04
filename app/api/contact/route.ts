import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Send email with your preferred provider (Resend, Nodemailer, etc.)
    // Example (pseudo-code):
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New contact from ${name}`,
    //   text: `Email: ${email}\n\nMessage:\n${message}`,
    // });

    // TODO: Send WhatsApp notification using a provider like Twilio
    // Example (pseudo-code):
    // await sendWhatsApp({
    //   to: process.env.WHATSAPP_NUMBER!,
    //   text: `New LaunchPad inquiry from ${name} (${email})`,
    // });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}



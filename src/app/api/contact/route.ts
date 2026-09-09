import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface ContactRequest {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message?: string;
}

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactRequest;
    const name = data.name?.trim();
    const email = data.email?.trim();
    const service = data.service?.trim();
    const message = data.message?.trim();

    if (!name || !email || !service || !message) {
      return Response.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    const smtpHost = requiredEnv("SMTP_HOST");
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = requiredEnv("SMTP_USER");
    const smtpPassword = requiredEnv("SMTP_PASSWORD");
    const fromEmail = process.env.SMTP_FROM || smtpUser;
    const toEmail = process.env.SMTP_TO || "kallemdesign@gmail.com";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name} - ${service}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${data.phone?.trim() || "Not provided"}`,
        `Service: ${service}`,
        `Budget: ${data.budget?.trim() || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed", error);
    return Response.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}

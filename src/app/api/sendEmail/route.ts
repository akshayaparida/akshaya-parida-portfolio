import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parse the incoming JSON data securely
    const { email, subject, message } = await req.json();

    // Transporter configuration using environment variables
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // replace with your email provider's SMTP server if needed
      port: 587, // use 587 for TLS with STARTTLS, or 465 for SMTPS
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER, // email from environment variables
        pass: process.env.GMAIL_PASSWORD, // password from environment variables
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER, // from your authenticated email
      replyTo: email, // sender's email for replies
      to: 'akshayaparida2811@gmail.com', // recipient email address
      subject: subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error: unknown) {
    console.error('Error sending email:', error);

    // More secure error response to avoid exposing internal error details
    return new Response(
      JSON.stringify({
        message: 'Error sending email',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500 }
    );
  }
}

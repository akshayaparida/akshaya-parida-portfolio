import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'akshayaparida2811@gmail.com',
      subject: subject,
      text: message,
    };

    console.log('GMAIL_USER:', process.env.GMAIL_USER);
console.log('GMAIL_PASSWORD:', process.env.GMAIL_PASSWORD);


    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error: unknown) {
    console.error('Error sending email:', error);

    return new Response(
      JSON.stringify({
        message: 'Error sending email',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500 }
    );
  }
}

import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {

  // Add environment validation here
  if (!process.env.MY_EMAIL || !process.env.MY_PASSWORD) {
    console.error('Missing email credentials');
    return NextResponse.json(
      { message: 'Server configuration error' },
      { status: 500 }
    );
  }
  
  const { email, name, message } = await request.json();

  console.log('Incoming request:', { name, email, message });

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:

      host: "smtp.gmail.com",
      port: 465,
      secure: true

      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    // return NextResponse.json({ message: 'Email sent' });
    return NextResponse.json({ 
      message: 'Message sent successfully!' 
    });
  } catch (err) {
    console.error('Email sending error:', err);
    // return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    return NextResponse.json({ 
      message: 'Failed to send email' 
    }, { status: 500 });
  }
}






// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request: Request) {
//   const { email, name, message } = await request.json();

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_APP_PASSWORD,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: `"FYIC Contact" <${process.env.GMAIL_USER}>`,
//       to: process.env.GMAIL_USER,
//       subject: `New message from ${name}`,
//       text: message,
//       html: `
//         <p><strong>From:</strong> ${name} (${email})</p>
//         <p>${message}</p>
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('Email error:', error);
//     return NextResponse.json(
//       { error: 'Failed to send message' },
//       { status: 500 }
//     );
//   }
// }

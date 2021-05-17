import nodemailer from 'nodemailer'


export default async function SendMessage ({message, to, title, from, sender, subject }) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: from, // sender address
        to: to, // list of receivers
        sender: sender,
        subject: subject,
        title: title,
        html: `<p>${message}</p>`
      });
      return info
}
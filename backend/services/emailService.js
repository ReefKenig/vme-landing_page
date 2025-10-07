import nodemailer from "nodemailer";
import dotenv from "dotenv";

export async function sendConfirmationEmail(to, firstname) {
  dotenv.config();

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: { user, pass },
    });

    const mailOptions = {
      from: `"V-Me Team" <${process.env.EMAIL_USER}>`,
      to,
      subject: "תודה שנרשמת ל-V-Me🎉",
      html: `
      <div style="direction:rtl;font-family:sans-serif">
        <h2>היי ${firstname}!</h2>
        <p>תודה שנרשמת לגרסת הבטא שלנו. בקרוב ניצור איתך קשר</p>
        <p>
          ניתן כבר לקבוע שיחת היכרות קצרה כאן:
          <a href="https://calendly.com/vme-intro/5min">Calendly</a>
        </p>
        <p>צוות V-Me❤</p>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to", to);
  } catch (error) {
    console.error("Email send failed:", error.message);
  }
}

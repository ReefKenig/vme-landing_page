import nodemailer from "nodemailer";
import dotenv from "dotenv";

export async function sendConfirmationEmail(to, firstname) {
  dotenv.config();
  const calendlyLink = process.env.CALENDLY_LINK;
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
      subject: "תודה שנרשמת ל-Vme🎉",
      html: `
      <div style="direction:rtl;font-family:sans-serif">
        <h2>היי ${firstname}!</h2>
        <p>
          תודה שנרשמת לגרסת הפיילוט שלנו.
          <br/>
          בקרוב ניצור איתך קשר ונשתף בצעד הבא.
          <br/>
          <br/>
          לכל שאלה ניתן לפנות אלינו במייל: <a href="mailto: eran@vme-value.com">eran@vme-value.com</a>
          <br/>
          <br/>
          מחכים להכיר אותך
          <br/>
          צוות Vme❤
        </p>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to", to);
  } catch (error) {
    console.error("Email send failed:", error.message);
  }
}

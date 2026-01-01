import { Link } from "react-router-dom";
import logo_heart from "../assets/images/Vme_logo-heart.png";
import "../styles/thankyou.css";

export default function ThankYouPage() {
  return (
    <section>
      <img src={logo_heart} alt="Logo with heart" className="logo" />
      <h2>מדהים!</h2>
      <h2 className="heading-wide">בחרתם לקחת צעד של אמון למען זוגיות ואהבה</h2>
      <div>
        <p className="thankyou-text">
          המיזם שלנו נמצא כרגע בשלב פיילוט ואינו פתוח עדיין לקהל הרחב.
          <br />
          בשלב זה אנחנו מלווים כל מצטרף ומצטרפת באופן אישי, כדי לוודא חוויה
          מדויקת, בטוחה ומשמעותית.
          <br />
          הצוות שלנו עובר על הפרטים שהשארתם, וניצור איתכם קשר בימים הקרובים
          להמשך היכרות - לקראת הצעד הבא.
        </p>
      </div>
      <h2 style={{ marginTop: "40px" }}>מחכים להכיר אתכם!</h2>
      <Link to="/" className="link">
        חזרה לדף הראשי
      </Link>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <section>
      <h2>מדיניות פרטיות</h2>
      <p>
        כאן תופיע מדיניות הפרטיות המלאה שתסופק על ידי הצוות המשפטי. לעת עתה זוהי
        דוגמא למבנה העמוד.
      </p>
      <p>
        <Link to="/">חזרה לדף הראשי</Link>
      </p>
    </section>
  );
}

import arrow from "../assets/images/leftArrow-complex.png";
import logo from "../assets/images/Vme_logo-heart.png";
import checkmark from "../assets/images/checkmark.png";
import phone from "../assets/images/phone.png";
import "../styles/uniqueness.css";

export default function UniquenessSection() {
  return (
    <section>
      <div className="headline">
        <img src={arrow} alt="Left complex arrow" id="arrow" />
        <h1>מה שונה ב</h1>
        <img src={logo} alt="Logo with heart" id="logo" />
      </div>
      <div className="checklist">
        <div className="box">
          <img src={checkmark} alt="checkmark" />
          <p>תכירו אנשים אמיתיים ותחוו אותם באופן אותנטי</p>
        </div>
        <div className="box">
          <img src={checkmark} alt="checkmark" />
          <p>תצפו בפרופילים מבוססי וידאו שיאפשרו לעוד חושים שלכם לעבוד</p>
        </div>
        <div className="box">
          <img src={checkmark} alt="checkmark" />
          <p>תצפו בפרופילים מבוססי וידאו שיאפשרו לעוד חושים שלכם לעבוד</p>
        </div>
        <div className="box">
          <img src={checkmark} alt="checkmark" />
          <p>תחסכו אנרגיה וזמן יקר שיושקע רק במקומות שהרגשתם חיבור אמיתי</p>
        </div>
        <div className="box">
          <img src={checkmark} alt="checkmark" />
          <p>תיהנו מתהליך חוויתי ומעצים בדרך למציאת אהבה </p>
        </div>
      </div>
      <div className="bottom-line">
        <a href="#registration" id="registrationLink">
          איפה נרשמים?
        </a>
        <img src={phone} alt="phone" />
      </div>
    </section>
  );
}

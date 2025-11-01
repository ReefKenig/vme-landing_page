import "../styles/problemsSection.css";
import downArrow from "../assets/images/down_arrow.png";

export default function ProblemsSection() {
  return (
    <section className="problems-section">
      <div className="container">
        <h2 className="heading">
          אם גם אתם מרגישים שהאפליקציות
          <br />
          של היום..
        </h2>

        <div className="list-container">
          <div className="list-item">
            <img src={downArrow} alt="arrow" className="arrow"/>
            <p className="list-text">שטחיות מידי</p>
          </div>
          <div className="list-item">
            <img src={downArrow} alt="arrow" className="arrow"/>
            <p className="list-text">מתמקדות בעיקר בנראות</p>
          </div>
          <div className="list-item">
            <img src={downArrow} alt="arrow" className="arrow"/>
            <p className="list-text">מלאות בפרופילים מזויפים או ריקים מתוכן</p>
          </div>
          <div className="list-item">
            <img src={downArrow} alt="arrow" className="arrow"/>
            <p className="list-text">
              יוצרות יותר גוסטינג מאשר חיבורים אמיתיים
            </p>
          </div>
        </div>

        <p className="transition-text">
          אם חשבתם כבר לא פעם לוותר,
          <br />
          אבל עמוק בפנים עדיין בוער בכם הרצון לאהבה
        </p>

        <h2 className="call-to-action">
          כאן בדיוק Vme נכנסת ועושה את כל ההבדל
        </h2>
      </div>
    </section>
  );
}

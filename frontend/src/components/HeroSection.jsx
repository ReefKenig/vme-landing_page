import "../styles/videoSection.css";
import logoHeart from "../assets/images/Vme_logo-heart.png";

const VIDEO =
  "https://vme-landingpage-videos.s3.eu-north-1.amazonaws.com/newIntro.mp4";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <video src={VIDEO} controls className="video"></video>
      </div>

      <div className="text-container">
        <h2>
          צוות מופלא של אנשי מקצוע מתחום הטיפול והאימון שליוו מאות מחפשי אהבה,
          החליטו ליצור שינוי ובנו את
        </h2>
      </div>

      <div className="logo-container">
        <img src={logoHeart} alt="Vme Logo" />
      </div>

      <h2 className="platform-heading">
        פלטפורמה שהופכת את המסע למציאת אהבה ליותר קל, זורם ואותנטי
      </h2>
    </section>
  );
}

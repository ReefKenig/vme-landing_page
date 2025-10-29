import logoHeart from '../assets/images/Vme_logo-heart.png';

export default function HeroSection() {
  return (
    <section style={styles.section}>
      <div style={styles.videoContainer}>
        <video
          src="https://vme-landingpage-videos.s3.eu-north-1.amazonaws.com/intro+vme.mp4"
          controls
          style={styles.video}
        />
      </div>
      
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>
          צוות מופלא של<br />
          אנשי מקצוע מתחום הטיפול והאימון<br />
          שליוו מאות מחפשי אהבה,<br />
          החליטו ליצור שינוי ובנו את
        </h1>
      </div>

      <div style={styles.logoContainer}>
        <img 
          src={logoHeart} 
          alt="Vme Logo" 
          style={styles.logo}
        />
      </div>

      <div style={styles.textContainer}>
        <h2 style={styles.platformText}>
          פלטפורמה שהופכת את<br />
          המסע למציאת אהבה ליותר<br />
          קל, זורם ואותנטי
        </h2>
      </div>
    </section>
  );
}

// ===== Styles =====
const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    padding: "clamp(1rem, 3vw, 2rem) clamp(0.5rem, 2vw, 1rem)",
    direction: "rtl",
  },
  videoContainer: {
    width: "100%",
    maxWidth: "min(450px, 90vw)",
    display: "flex",
    justifyContent: "center",
    marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
  },
  video: {
    width: "100%",
    height: "auto",
    borderRadius: "clamp(8px, 2vw, 12px)",
    aspectRatio: "9/16",
    objectFit: "cover",
  },
  textContainer: {
    width: "100%",
    maxWidth: "700px",
    textAlign: "center",
    padding: "0 1rem",
  },
  heading: {
    color: "#cf1c71",
    fontSize: "clamp(1.2rem, 4.5vw, 2rem)",
    fontWeight: "700",
    lineHeight: "1.5",
    margin: 0,
    textAlign: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "clamp(1.5rem, 4vw, 2rem) 0",
  },
  logo: {
    height: "150px",
    width: "auto",
    maxWidth: "300px",
    objectFit: "contain",
    opacity: 1,
  },
  platformText: {
    color: "#cf1c71",
    fontSize: "clamp(1.1rem, 4vw, 1.8rem)",
    fontWeight: "700",
    lineHeight: "1.5",
    margin: 0,
    textAlign: "center",
  },
};
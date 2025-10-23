export default function HeroSection() {
  return (
    <section style={styles.section}>
      <h1 style={styles.h1}>בשלים ומוכנים לזוגיות ואהבה?</h1>
      <p style={styles.p}>זו הזדמנות להשתתף בפיילוט חדשני </p>
      <video
        src="https://vme-landingpage-videos.s3.eu-north-1.amazonaws.com/intro+vme.mp4"
        controls
        style={styles.video}
      />
      <h1>
        צוות מופלא של אנשי מקצוע מתחום הטיפול והאימון שליוו מאות מחפשי אהבה,
        החליטו ליצור שינוי ובנו את
      </h1>
      {/* Logo with heart in the middle */}
      <h1>פלטפורמה שהופכת את המסע למציאת אהבה ליותר קל, זורם ואותנטי</h1>
    </section>
  );
}

// ===== Styles =====
const styles = {
  section: {
    display: "flex", // flex for centering
    flexDirection: "column", // stack elements vertically
    alignItems: "center", // horizontal center
    justifyContent: "center", // vertical center
    textAlign: "center", // center text inside elements
    minHeight: "100vh", // fill the full viewport height
    padding: "0 20px", // small side padding
  },
  h1: {
    marginBottom: "20px",
  },
  p: {
    fontSize: "1.25rem",
    marginBottom: "20px",
  },
  video: {
    width: "100%",
    maxWidth: "800px", // optional, so it doesn’t get too huge
    borderRadius: "12px",
  },
};

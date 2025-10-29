import logoHeart from '../assets/images/Vme_logo-heart.png';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <img 
            src={logoHeart} 
            alt="Vme Logo" 
            style={styles.logo}
          />
        </div>
        <p style={styles.text}>
          פלטפורמה ייחודית שעומדת לשנות<br />
          את עולם ההכרויות כפי שהכרתם אותו
        </p>
      </div>
    </header>
  );
}

// ===== Styles =====
const styles = {
  header: {
    backgroundColor: "#ffffff",
    padding: "2rem 0.5rem",
    direction: "rtl",
    width: "100%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem 0.5rem",
    gap: "0.75rem",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    height: "150px",
    width: "auto",
    maxWidth: "300px",
    objectFit: "contain",
  },
  text: {
    color: "#cf1c71",
    fontSize: "38px",
    fontWeight: "500",
    textAlign: "center",
    margin: 0,
    lineHeight: "1.5",
    padding: "0 0.5rem",
    maxWidth: "100%",
    wordWrap: "break-word",
  },
};


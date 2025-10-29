import checkIcon from "../assets/check.png";
import leftArrowComplex from "../assets/left_arrow-complex.png";
import phoneImage from "../assets/phone.png";
import vmeLogo from "../assets/Vme_logo-heart.png";
import buttonImage from "../assets/button.png";
import mobileImage from "../assets/mobile.png";
import "../styles/uniqueness.css";

export default function UniquenessSection() {
  return (
    <section  >
      {/* Background shapes */}

      <div style={styles.container}>
        {/* Header with title */}
        <div style={styles.header} className="uniqueness-header">
          <h1 style={styles.title} className="uniqueness-title">
            <div style={styles.decorativeIcons} className="uniqueness-decorative-icons">
            <div style={styles.dot}></div>

              <div style={styles.arrowMagenta}></div>
              <div style={styles.arrowOrange}></div>
            </div>
            <span style={styles.titleText}>מה שונה ב </span>
            <img src={vmeLogo} alt="Vme Logo" style={styles.logoImage} className="uniqueness-logo-image" />
          </h1>
        </div>

        {/* Feature cards */}
        <div style={styles.featuresContainer} className="uniqueness-features-container">
          <div style={styles.featureCard} className="uniqueness-feature-card">
            <img src={checkIcon} alt="check" style={styles.checkIcon} className="uniqueness-check-icon" />
            <p style={styles.featureText} className="uniqueness-feature-text">
              תכירו אנשים אמיתיים ותחוו אותם באופן אותנטי
            </p>
          </div>

          <div style={styles.featureCard} className="uniqueness-feature-card">
            <img src={checkIcon} alt="check" style={styles.checkIcon} className="uniqueness-check-icon" />
            <p style={styles.featureText} className="uniqueness-feature-text">
              תצפו בפרופילים מבוססי וידאו שיאפשרו לעוד חושים שלכם לעבוד
            </p>
          </div>

          <div style={styles.featureCard} className="uniqueness-feature-card">
            <img src={checkIcon} alt="check" style={styles.checkIcon} className="uniqueness-check-icon" />
            <p style={styles.featureText} className="uniqueness-feature-text">
              תתמגנטו לאופי ואנרגיה מעבר למראה
            </p>
          </div>

          <div style={styles.featureCard} className="uniqueness-feature-card">
            <img src={checkIcon} alt="check" style={styles.checkIcon} className="uniqueness-check-icon" />
            <p style={styles.featureText} className="uniqueness-feature-text">
              תחסכו אנרגיה וזמן יקר שיושקע רק במקומות שהרגשתם חיבור אמיתי
            </p>
          </div>

          <div style={styles.featureCard} className="uniqueness-feature-card">
            <img src={checkIcon} alt="check" style={styles.checkIcon} className="uniqueness-check-icon" />
            <p style={styles.featureText} className="uniqueness-feature-text">
              תיהנו מתהליך חוויתי ומעצים בדרך למציאת אהבה
            </p>
          </div>
        </div>

        {/* Promotional Section - Button and Phone */}
        <div style={styles.promoSection} className="uniqueness-promo-section">
          {/* Registration Button - Center */}
          <div style={styles.leftContent} className="uniqueness-left-content">
            <div style={styles.buttonWrapper} className="uniqueness-button-wrapper">
              <img src={buttonImage} alt="button" style={styles.buttonImg} />
              <span style={styles.buttonText}>איפה נרשמים?</span>
            </div>
          </div>

          {/* Mobile Phone - Right Edge */}
          <div style={styles.phoneContainer} className="uniqueness-phone-container">
            <img src={mobileImage} alt="mobile" style={styles.phoneImage} className="uniqueness-phone-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Styles =====
const styles = {
  section: {
    position: "relative",
    backgroundColor: "#e0f2f7",
    padding: "3rem 0 4rem 0",
    direction: "rtl",
    width: "100%",
    overflow: "hidden",
    minHeight: "100vh",
  },
  backgroundShapeBeige: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "45%",
    height: "35%",
    backgroundColor: "#f5e0d8",
    borderTopRightRadius: "50% 40%",
    borderBottomRightRadius: "0%",
    zIndex: 0,
  },
  backgroundShapePurple: {
    position: "absolute",
    bottom: "5%",
    left: "5%",
    width: "25%",
    height: "20%",
    backgroundColor: "#d8a0d8",
    borderRadius: "30% 50% 40% 60%",
    zIndex: 0,
  },
  container: {
    position: "relative",
    maxWidth: "100%",
    margin: "0",
    padding: "0",
    zIndex: 1,
    overflowX: "hidden",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "3rem",
    gap: "1rem",
    padding: "0 1.5rem",
  },
  arrowsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
  },
  arrowIcon: {
    width: "30px",
    height: "30px",
    objectFit: "contain",
  },
  title: {
    margin: 0,
    fontSize: "44px",
    fontWeight: "700",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
    lineHeight: 1.2,
  },
  titleText: {
    color: "#cf1c71",
    fontSize: "58px",
    transform: "translateY(30px)",
  },
  logoImage: {
    height: "150px",
    width: "300px",
    objectFit: "contain",
    verticalAlign: "middle",
    filter: "brightness(1.1) contrast(1.2) saturate(1.4) drop-shadow(0 2px 10px rgba(207, 28, 113, 0.4))",
  },
  featuresContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginBottom: "3rem",
    padding: "0 1.5rem",
    maxWidth: "800px",
    margin: "0 auto 3rem auto",
  },
  featureCard: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "1.5rem 2rem",
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  checkIcon: {
    width: "60px",
    height: "60px",
    flexShrink: 0,
    objectFit: "contain",
    transform: "translateY(-15px)",
  },
  featureText: {
    margin: 0,
    fontSize: "35px",
    fontWeight: "400",
    color: "#cf1c71",
    lineHeight: 1.4,
    textAlign: "right",
    flex: 1,
  },
  bottomSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    marginTop: "4rem",
    flexWrap: "wrap",
    padding: "0 1.5rem",
  },
  phoneContainer: {
    position: "relative",
    zIndex: 2,
    flex: "0 0 auto",
  },
  phoneImage: {
    width: "280px",
    height: "auto",
    objectFit: "contain",
    transform: "rotate(-5deg)",
  },
  ctaButton: {
    background: "linear-gradient(90deg, #ff8c42 0%, #cf1c71 100%)",
    color: "#ffffff",
    fontSize: "32px",
    fontWeight: "700",
    padding: "1.2rem 3rem",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(207, 28, 113, 0.3)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    fontFamily: "Rubik, sans-serif",
    whiteSpace: "nowrap",
    flex: "0 0 auto",
  },
  promoSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0",
    marginTop: "4rem",
    padding: "0",
    width: "100%",
    maxWidth: "100%",
    margin: "4rem 0 0 0",
    boxSizing: "border-box",
    position: "relative",
  },
  leftContent: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "2rem",
    paddingRight: "0",
  },
  phoneContainer: {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: "0",
    paddingRight: "0",
  },
  phoneImage: {
    width: "320px",
    height: "auto",
    objectFit: "contain",
    transform: "rotate(8deg)",
    filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))",
    marginRight: "-20px",
  },
  buttonWrapper: {
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    flexShrink: 0,
  },
  buttonImg: {
    width: "100%",
    maxWidth: "450px",
    height: "auto",
    display: "block",
    margin: "0",
    filter: "drop-shadow(0 6px 15px rgba(207, 28, 113, 0.25))",
  },
  buttonText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -20%)",
    fontSize: "32px",
    fontWeight: "700",
    color: "#ffffff",
    whiteSpace: "nowrap",
    pointerEvents: "none",
  },
  decorativeIcons: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    marginRight: "15px",
    transform: "translateY(30px)",
  },
  arrowOrange: {
    width: 0,
    height: 0,
    borderTop: "25px solid transparent",
    borderBottom: "25px solid transparent",
    borderRight: "32px solid #e58958",
    position: "relative",
    marginLeft: "-5px",
  },
  arrowMagenta: {
    width: 0,
    height: 0,
    borderTop: "15px solid transparent",
    borderBottom: "15px solid transparent",
    borderRight: "20px solid #cf1c71",
    position: "relative",
    marginLeft: "-15px",
    transform: "translateY(0px)",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#e58958",
    marginLeft: "5px",
  },
  buttonDecorativeArrows: {
    display: "flex",
    alignItems: "flex-end",
    gap: "10px",
    marginBottom: "1rem",
    alignSelf: "flex-end",
    paddingRight: "5rem",
  },
  buttonArrowOrange: {
    width: 0,
    height: 0,
    borderLeft: "80px solid transparent",
    borderRight: "80px solid transparent",
    borderBottom: "100px solid #e58958",
    position: "relative",
    marginBottom: "-5px",
  },
  buttonArrowMagenta: {
    width: 0,
    height: 0,
    borderLeft: "65px solid transparent",
    borderRight: "65px solid transparent",
    borderBottom: "80px solid #cf1c71",
    position: "relative",
    marginBottom: "-50px",
    transform: "translateX(-15px)",
  },
};

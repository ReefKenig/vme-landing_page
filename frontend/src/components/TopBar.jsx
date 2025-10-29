export default function TopBar() {
    return (
      <header style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.heading}>בשלים ומוכנים לזוגיות ואהבה?</h1>
          <p style={styles.text}>
            זו הזדמנות להשתתף <br />
            בפיילוט חדשני
          </p>
        </div>
      </header>
    );
  }
  
  // ===== Styles =====
  const styles = {
    header: {
      position: "relative",
      backgroundColor: "#c2d4d4",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      padding: "0.5rem 0",
      direction: "rtl",
      width: "100%",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      maxWidth: "100%",
      margin: "0 auto",
      padding: "0 0.5rem",
    },
    heading: {
      color: "#cf1c71",
      fontSize: "38px",
      fontWeight: "700",
      margin: "0 0 0.2rem 0",
      lineHeight: "1.2",
      padding: 0,
    },
    text: {
      color: "#cf1c71",
      fontSize: "38px",
      fontWeight: "400",
      margin: 0,
      lineHeight: "1.3",
      padding: 0,
    },
  };
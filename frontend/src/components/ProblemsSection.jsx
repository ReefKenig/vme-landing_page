export default function ProblemsSection() {
    return (
        <section style={styles.section} className="problems-section">
            <div style={styles.container}>
                <h2 style={styles.heading}>
                    אם גם אתם מרגישים שהאפליקציות<br />
                    של היום..
                </h2>

                <div style={styles.listContainer}>
                    <div style={styles.listItem}>
                        <span style={styles.triangle}>▼</span>
                        <p style={styles.listText}>שטחיות מידי</p>
                    </div>
                    <div style={styles.listItem}>
                        <span style={styles.triangle}>▼</span>
                        <p style={styles.listText}>מתמקדות בעיקר בנראות</p>
                    </div>
                    <div style={styles.listItem}>
                        <span style={styles.triangle}>▼</span>
                        <p style={styles.listText}>מלאות בפרופילים מזויפים או ריקים מתוכן</p>
                    </div>
                    <div style={styles.listItem}>
                        <span style={styles.triangle}>▼</span>
                        <p style={styles.listText}>יוצרות יותר גוסטינג מאשר חיבורים אמיתיים</p>
                    </div>
                </div>

                <p style={styles.transitionText}>
                    אם חשבתם כבר לא פעם לוותר,<br />
                    אבל עמוק בפנים עדיין בוער בכם הרצון לאהבה
                </p>

                <h2 style={styles.callToAction}>
                    כאן בדיוק Vme נכנסת ועושה את כל ההבדל
                </h2>
            </div>
        </section>
    );
}

// ===== Styles =====
const styles = {
     section: {
         backgroundColor: "#ffffff",
         padding: "3rem 0",
         margin: 0,
         direction: "rtl",
         width: "100%",
         overflow: "hidden",
         boxSizing: "border-box",
     },
     container: {
         display: "flex",
         flexDirection: "column",
         alignItems: "stretch",
         maxWidth: "1200px",
         margin: "0 auto",
         padding: "0 clamp(1rem, 4vw, 3rem)",
         width: "100%",
         boxSizing: "border-box",
     },
    heading: {
        color: "#cf1c71",
        fontSize: "44px",
        fontWeight: "700",
        textAlign: "center",
        lineHeight: "1.4",
        margin: "0 0 2rem 0",
    },
    listContainer: {
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginBottom: "2rem",
    },
    listItem: {
        display: "flex",
        alignItems: "flex-start",
        gap: "1rem",
        textAlign: "right",
        justifyContent: "flex-end",
        width: "100%",
    },
    triangle: {
        color: "#ff8c42",
        fontSize: "2.5rem",
        lineHeight: "1.4",
        flexShrink: 0,
    },
    listText: {
        color: "#cf1c71",
        fontSize: "35px",
        fontWeight: "400",
        margin: 0,
        lineHeight: "1.4",
        flex: 1,
    },
     transitionText: {
         color: "#cf1c71",
         fontSize: "35px",
         fontWeight: "400",
         textAlign: "center",
         lineHeight: "1.5",
         margin: "2rem 0",
         padding: 0,
     },
    callToAction: {
        color: "#cf1c71",
        fontSize: "35px",
        fontWeight: "700",
        textAlign: "center",
        lineHeight: "1.4",
        margin: "2rem 0 0 0",
    },
};


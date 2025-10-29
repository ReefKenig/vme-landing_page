export default function ProblemsSection() {
    return (
        <div style={styles.section} className="problems-section">
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
        </div>
    );
}

// ===== Styles =====
const styles = {
    section: {
        backgroundColor: "#ffffff",
        padding: "clamp(2rem, 5vw, 3rem) 0",
        direction: "rtl",
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        overflow: "hidden",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1200px",
        padding: "0 clamp(1rem, 4vw, 3rem)",
        width: "100%",
        boxSizing: "border-box",
        textAlign: "center",
    },
    heading: {
        color: "#cf1c71",
        fontSize: "clamp(28px, 5vw, 44px)",
        fontWeight: "700",
        lineHeight: "1.4",
        margin: "0 0 2rem 0",
    },
    listContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.5rem",
        marginBottom: "2rem",
        maxWidth: "800px",
    },
    listItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "clamp(0.5rem, 2vw, 1rem)",
        width: "auto",
        maxWidth: "100%",
        
    },
    triangle: {
        color: "#ff8c42",
        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
        flexShrink: 0,
        lineHeight: "1.4",
    },
    listText: {
        color: "#cf1c71",
        fontSize: "clamp(20px, 4vw, 35px)",
        fontWeight: "400",
        margin: 0,
        lineHeight: "1.4",
        textAlign: "right",
        direction: "rtl",
    },
    transitionText: {
        color: "#cf1c71",
        fontSize: "clamp(20px, 4vw, 35px)",
        fontWeight: "400",
        lineHeight: "1.5",
        margin: "2rem 0",
    },
    callToAction: {
        color: "#cf1c71",
        fontSize: "clamp(20px, 4vw, 35px)",
        fontWeight: "700",
        lineHeight: "1.4",
        margin: "2rem 0 0 0",
    },
};

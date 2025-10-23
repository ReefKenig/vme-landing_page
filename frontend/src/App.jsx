import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RegistrationForm from "./components/RegistrationForm";
import ThankYouPage from "./components/ThankYouPage";

function App() {
  const [referrer, setReferrer] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get("ref") || "unknown";
    setReferrer(ref);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              {/* <AboutSection /> */}
              <RegistrationForm referrer={referrer} />
            </>
          }
        />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;

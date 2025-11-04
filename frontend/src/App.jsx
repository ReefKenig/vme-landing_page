import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import UniqunessSection from "./components/UniquenessSection";
import PersonalNotesSection from "./components/PersonalNotesSection";
import RegistrationForm from "./components/RegistrationForm";
import ThankYouPage from "./components/ThankYouPage";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import ProblemsSection from "./components/ProblemsSection";
function App() {
  const [referrer, setReferrer] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get("ref") || null;
    setReferrer(ref);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TopBar />
              <Header />
              <HeroSection />
              <ProblemsSection />
              <UniqunessSection />
              <PersonalNotesSection />
              <RegistrationForm referrer={referrer} />
            </>
          }
        />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs/AboutUs";
import Pricing from "./pages/Pricing/Pricing";
import ContatctUs from "./pages/ContactUs/ContatctUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contactUs" element={<ContatctUs />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/forgot" element={<ForgotPassword />} /> */}
          {/* <Route path="/forgot-token" element={<ForgotPasswordToken />} /> */}
          {/* <Route path="/create-new-password" element={<CreateNewPassword />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

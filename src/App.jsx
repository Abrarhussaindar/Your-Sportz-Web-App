import { BrowserRouter as Router, Routes, Route,  useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import AboutUs from "./pages/AboutUs/AboutUs";
import Pricing from "./pages/Pricing/Pricing";
import ContatctUs from "./pages/ContactUs/ContatctUs";
import Payment from "./pages/Payment/Payment";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import CreateNewPassword from "./pages/CreateNewPassword/CreateNewPassword";
import VerifyCode from "./pages/VerifyCode/VerifyCode";
import Feature from "./pages/Feature/Feature";
import "./18n"
import { useEffect } from "react";
import EarlyAccess from "./pages/EarlyAccess/EarlyAccess/EarlyAccess";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contactUs" element={<ContatctUs />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/forgot-token" element={<VerifyCode />} />
          <Route path="/early-access" element={<EarlyAccess />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// src/App.jsx
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import TopBar from './components/Header/HeaderTop';
import Navbar from './components/Header/Navbar';
import FssaiRegistrationForm from './components/Form/RegistrationForm'; 
import InstructionsSidebar from './components/Form/InstructionsSidebar';
import ProcedureSection from './components/Sections/ProcedureSection';
import BenefitsSection from './components/Sections/BenefitsSection';
import FaqSection from './components/Sections/FaqSection';
import MainFooter from './components/Footer/MainFooter';
import FssaiPaymentSummary from './components/Payment/PaymentSummary';
import DisclaimerPage from './components/Pages/DisclaimerPage';
import HeroCarousel from './components/Sections/HeroCarousel';
import ContactPage from './components/Pages/ContactPage';
import TermsAndConditionsPage from './components/Pages/TermsAndConditionsPage';
import RefundPolicyPage from './components/Pages/RefundPolicyPage';
import FSSAIPolicyPage from './components/Pages/FSSAIPolicyPage';
import ScrollToHash from './components/common/ScrollToHash';

import AdminDashboard from './components/Admin/AdminDashboard';
import AdminLogin from './components/Admin/AdminLogin';
import DocumentsRequiredSection from './components/Sections/DocumentsRequiredSection';
import GSTAboutUsPage from './components/Pages/About';

// ✅ Clear storage
function ClearStorageOnLoad() {
  useEffect(() => {
    localStorage.removeItem("fssaiFormDraft"); 
    sessionStorage.removeItem("fssaiSubmittedData");
    console.log("✅ Storage cleared on app initial load");
  }, []);
  return null;
}

// ✅ Scroll to top
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// ✅ Protected Route
function ProtectedRoute({ children }) {
  const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
  if (!isLoggedIn) {
    return <Navigate to="/gst/admin" replace />;
  }
  return children;
}

// ✅ Private Consultancy Marquee - GST Version (Blue Theme)
function PrivateConsultancyMarquee() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-2.5 shadow-md overflow-hidden z-10">
      <div className="marquee-container relative w-full">
        <div className="marquee inline-flex whitespace-nowrap text-sm font-medium tracking-wide animate-marquee">
          <span className="mx-16">
            This is a private consultancy self-registration portal Owned By <b>EASQUES</b> for GST Registration. 
            Portal fees are consultancy in nature.
          </span>
          <span className="mx-16">
            This is a private consultancy self-registration portal Owned By <b>EASQUES</b> for GST Registration. 
            Portal fees are consultancy in nature.
          </span>
        </div>
      </div>
    </div>
  );
}

// ✅ Back to Top Button (Blue Theme)
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
    >
      <FaArrowUp size={22} />
    </button>
  );
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/gst' || location.pathname === '/gst/';

  return (
    <div className="min-h-screen flex flex-col">

      <ClearStorageOnLoad />
      <TopBar />

      {/* Navbar - Only on Home */}
      {isHome && (
        <Navbar
          navItems={[
            { label: "GST REGISTRATION", to: "#registration-form" },
            { label: "GST MODIFICATION", to: "#registration-form" },
            { label: "GST CANCELLATION", to: "#registration-form" },
            { label: "ABOUT US", to: "/about" },
            { label: "PROCEDURE", to: "#procedure" },
            { label: "DOCUMENTS", to: "#documents" },     // Documents section ke liye
            { label: "BENEFITS", to: "#benefits" },
            { label: "FAQ'S", to: "#faq" },
          ]}
          handleScroll={(e, target) => {
            if (target.startsWith('#')) {
              e.preventDefault();
              const element = document.querySelector(target);
              if (element) {
                const headerOffset = 140;
                const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }
          }}
        />
      )}

      {/* Private Consultancy Marquee - Only on Home */}
      {isHome && <PrivateConsultancyMarquee />}

      {/* HeroCarousel - GST Version */}
      {isHome && (
        <div className="-mt-4 md:-mt-5 lg:-mt-6">
          <HeroCarousel />
        </div>
      )}

      {!isHome && <HeroCarousel />}

      <ScrollToTop />
      <ScrollToHash />

      <main className="flex-grow">
        <Routes>

          {/* Home Page - GST Version */}
          <Route
            path="/"
            element={
              <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-10 md:py-12">
                <div className="mx-auto max-w-screen-2xl mt-10">
                  <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
                    <div className="lg:col-span-2">
                      <FssaiRegistrationForm />   {/* ← Is component ka naam GSTRegistrationForm kar sakte ho baad mein */}
                    </div>
                    <div className="lg:col-span-1">
                      <InstructionsSidebar />
                    </div>
                  </div>
                </div>

                <div className="mx-auto max-w-screen-2xl mt-16 space-y-20">
                  <ProcedureSection />
                  <DocumentsRequiredSection id="documents" />   {/* id add kiya navbar ke liye */}
                  <BenefitsSection />
                  <FaqSection />
                </div>
              </div>
            }
          />

          {/* Other Routes */}
          <Route path="/payment-summary" element={<FssaiPaymentSummary />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/about' element={<GSTAboutUsPage/>} />
          <Route path="/term-condition" element={<TermsAndConditionsPage />} />
          <Route path="/privacy-policy" element={<FSSAIPolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-[60vh] flex items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-700">
                  404 — Page Not Found
                </h1>
              </div>
            }
          />

        </Routes>
      </main>

      <MainFooter />
      <BackToTop />
    </div>
  );
}

export default AppContent;
import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100">
        <div className="p-8 bg-white/80 backdrop-blur-md rounded-xl shadow-2xl">
          <svg className="animate-spin h-12 w-12 text-purple-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-4 text-lg text-gray-700 font-semibold">Cargando...</p>
        </div>
      </div>
    }>
      <I18nextProvider i18n={i18n}>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/sobre-nosotros" element={<About />} />
                <Route path="/testimonios" element={<Testimonials />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/privacy-policy" element={<div><h1>Privacy Policy Page - Placeholder</h1></div>} />
                <Route path="/terms-of-service" element={<div><h1>Terms of Service Page - Placeholder</h1></div>} />
                <Route path="/faq" element={<div><h1>FAQ Page - Placeholder</h1></div>} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
          </div>
        </Router>
      </I18nextProvider>
    </Suspense>
  );
}

export default App;
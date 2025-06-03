import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/4aa20083-d699-4b96-93a1-b6e2b2c73ff7/04571c61ad65987822651c1c3dc748de.png";

const Navbar = () => {
  const { t, i18n } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t('navbar.home'), path: "/" },
    { name: t('navbar.services'), path: "/servicios" },
    { name: t('navbar.about'), path: "/sobre-nosotros" },
    { name: t('navbar.testimonials'), path: "/testimonios" },
    { name: t('navbar.contact'), path: "/contacto" },
  ];

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  const mobileLinkVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src={logoUrl}
              alt="HypnotherapyChangeYourMind Logo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-16 md:h-[68px] w-auto"
            />
          </Link>

          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-3 lg:space-x-5">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`text-xs lg:text-sm font-medium transition-colors duration-200 hover:text-purple-600 ${
                      location.pathname === link.path ? "text-purple-600" : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={linkVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 + 0.3 }}
              >
                <Button asChild size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-3 py-1.5 text-xs lg:text-sm">
                  <Link to="/contacto">{t('navbar.scheduleSession')}</Link>
                </Button>
              </motion.div>
            </nav>

            <div className="ml-3 flex items-center">
               <Button
                variant="ghost"
                size="sm"
                onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                aria-label={t('navbar.language')}
                className="text-gray-700 hover:text-purple-600 px-1.5"
              >
                <Globe size={18} className="mr-1 md:mr-1.5"/> 
                <span className="text-xs font-semibold">{i18n.language === 'es' ? 'EN' : 'ES'}</span>
              </Button>
            </div>

            <div className="md:hidden ml-1.5">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label={isOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
                className="text-gray-700 hover:text-purple-600 w-8 h-8"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl"
          >
            <div className="container mx-auto px-4 py-5">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    variants={mobileLinkVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block text-md font-medium py-1.5 transition-colors duration-200 hover:text-purple-600 ${
                        location.pathname === link.path ? "text-purple-600" : "text-gray-800"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={mobileLinkVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2, delay: navLinks.length * 0.05 }}
                >
                  <Button asChild className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white w-full py-2.5 text-md">
                     <Link to="/contacto" onClick={() => setIsOpen(false)}>{t('navbar.scheduleSession')}</Link>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
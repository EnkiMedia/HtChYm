import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation('homePage');
  const [currentOverlayText, setCurrentOverlayText] = useState(0);
  const overlayTexts = [
    t('hero.subtitle2'),
    `${t('hero.subtitle1')}, ${t('hero.subtitle2')}`
  ];

  const originalHeroImageUrl = "https://images.unsplash.com/photo-1531306728359-97545a080aac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cm9uJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentOverlayText((prev) => (prev + 1) % overlayTexts.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [overlayTexts.length]);

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };
  
  const overlayTextVariants = {
    enter: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.7, ease: "easeIn" } },
  };

  return (
    <AnimatedSection className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 order-first lg:order-last mb-12 lg:mb-0"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] rounded-xl shadow-2xl group overflow-hidden">
              <img  
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                alt="Red neuronal abstracta simbolizando neurogénesis y transformación mental"
               src={originalHeroImageUrl} />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentOverlayText}
                    variants={overlayTextVariants}
                    initial="exit"
                    animate="enter"
                    exit="exit"
                    className="text-white text-center font-['Point_Sample',_serif] opacity-70 pointer-events-none" 
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}
                  >
                    {overlayTexts[currentOverlayText]}
                  </motion.h2>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
            <motion.h1 
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p 
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
            >
              {t('hero.subtitle1')}
            </motion.p>
            <motion.p 
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-gray-700 mb-8"
            >
              {t('hero.description')}
            </motion.p>
            <motion.div 
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-md">
                <Link to="/servicios">{t('hero.ourServices')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 px-8 py-6 text-md">
                <Link to="/contacto">{t('hero.scheduleNow')}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
export default HeroSection;
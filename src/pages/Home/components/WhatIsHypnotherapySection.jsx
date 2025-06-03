import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from 'react-i18next';

const WhatIsHypnotherapySection = () => {
  const { t } = useTranslation('homePage');
  const { t: tAbout } = useTranslation('aboutPage');

  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('whatIsHypnotherapy.title')}</h2>
            <p className="text-xl text-gray-700 mb-6">
              {t('whatIsHypnotherapy.p1')}
            </p>
            <p className="text-xl text-gray-700 mb-8">
              {t('whatIsHypnotherapy.p2')}
            </p>
            <Button asChild size="lg" variant="link" className="text-purple-600 hover:text-purple-800 text-lg px-0">
              <Link to="/sobre-nosotros#neurogenesis">
                {t('whatIsHypnotherapy.moreAboutNeurogenesis')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay:0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl blur-lg opacity-30 transform group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                <img  className="w-full h-auto rounded-xl transform group-hover:scale-105 transition-transform duration-500 ease-in-out" style={{maxHeight: "calc(100vh * 0.4)"}} alt="Cerebro con conexiones neuronales iluminadas, representando la neurogénesis" src="https://images.unsplash.com/photo-1612058633399-49246186dbe0" />
                <motion.div 
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="image-overlay-text">
                    {tAbout('neurogenesis.imageOverlay')}
                  </h2>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};
export default WhatIsHypnotherapySection;
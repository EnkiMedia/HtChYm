import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from 'react-i18next';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const CTASection = () => {
  const { t } = useTranslation('homePage');
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('cta.title')}</h2>
          <p className="text-2xl mb-6">
            {t('cta.p1')}
          </p>
          <p className="text-xl mb-10">
            {t('cta.p2')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-10 py-7 text-lg font-semibold transform hover:scale-105 transition-transform duration-300">
              <Link to="/contacto">
                <CalendarDays className="mr-2 h-5 w-5" /> {t('cta.scheduleRegression')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 px-10 py-7 text-lg font-semibold transform hover:scale-105 transition-transform duration-300">
              <Link to="/contacto">
                <MessageCircle className="mr-2 h-5 w-5" /> {t('cta.askMoreInfo')}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
export default CTASection;
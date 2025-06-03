import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from 'react-i18next';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const ServicesPreviewSection = () => {
  const { t } = useTranslation('homePage');
  const servicesPreview = [
    {
      title: t('servicesPreview.pastLifeRegressions'),
      description: t('servicesPreview.pastLifeDesc'),
      icon: <Sparkles className="h-10 w-10 text-purple-600" />,
      bannerText: t('servicesPreview.pastLifeBanner')
    },
    {
      title: t('servicesPreview.anxietyManagement'),
      description: t('servicesPreview.anxietyDesc'),
      icon: <ShieldCheck className="h-10 w-10 text-purple-600" />,
      bannerText: t('servicesPreview.anxietyBanner')
    },
    {
      title: t('servicesPreview.phobiaOvercoming'),
      description: t('servicesPreview.phobiaDesc'),
      icon: <Users className="h-10 w-10 text-purple-600" />,
      bannerText: t('servicesPreview.phobiaBanner')
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('servicesPreview.title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('servicesPreview.description')}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {servicesPreview.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="service-card bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 p-8 text-center group relative transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 inline-block p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors duration-300">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-lg mb-6">{service.description}</p>
              <Button asChild variant="ghost" className="text-purple-600 hover:text-purple-800 group-hover:underline">
                <Link to="/servicios">
                  {t('servicesPreview.knowMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <motion.div 
                className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="image-overlay-text">
                  {service.bannerText}
                </h2>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transform hover:scale-105 transition-transform duration-300">
            <Link to="/servicios">
              {t('servicesPreview.seeAllServices')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};
export default ServicesPreviewSection;
import React from "react";
import { motion } from "framer-motion";
import { Brain, ShieldCheck, Sparkles, Users, Heart, Lightbulb, CalendarDays, MessageCircle, CheckCircle, Zap, Clock, Package, Users2, MonitorPlay, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1, 
    }
  }
};

const originalHeroImageUrl = "https://images.unsplash.com/photo-1531306728359-97545a080aac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cm9uJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80";


const HeroServices = () => {
  const { t } = useTranslation('servicesPage');
  return (
  <AnimatedSection className="pt-40 pb-24 hero-gradient relative overflow-hidden">
    <img 
        src={originalHeroImageUrl} 
        alt="Abstract background representing neural connections" 
        className="absolute inset-0 w-full h-full object-cover opacity-20"
    />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        variants={fadeIn}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          {t('hero.title')}
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"> {t('hero.subtitle')}</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          {t('hero.description')}
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
  );
};

const ServicesList = () => {
  const { t } = useTranslation('servicesPage');
  const servicesData = [
    { key: 'freeConsultation', icon: <MessageCircle className="h-10 w-10 text-purple-600" /> },
    { key: 'customAudios', icon: <Zap className="h-10 w-10 text-purple-600" /> },
    { key: 'pastLifeRegression', icon: <Sparkles className="h-10 w-10 text-purple-600" /> },
    { key: 'individualRegression', icon: <Users className="h-10 w-10 text-purple-600" /> },
    { key: 'anxietyStressManagement', icon: <ShieldCheck className="h-10 w-10 text-purple-600" /> },
    { key: 'phobiaFearOvercoming', icon: <Zap className="h-10 w-10 text-purple-600" /> },
    { key: 'quitSmoking', icon: <Heart className="h-10 w-10 text-purple-600" /> },
    { key: 'weightControl', icon: <Brain className="h-10 w-10 text-purple-600" /> },
    { key: 'sleepImprovement', icon: <Clock className="h-10 w-10 text-purple-600" /> },
    { key: 'selfEsteemBoost', icon: <Sparkles className="h-10 w-10 text-purple-600" /> },
    { key: 'emotionalBlockages', icon: <Heart className="h-10 w-10 text-purple-600" /> },
    { key: 'examPreparation', icon: <Lightbulb className="h-10 w-10 text-purple-600" /> },
    { key: 'concentrationFocus', icon: <Brain className="h-10 w-10 text-purple-600" /> },
    { key: 'groupWorkshops', icon: <Users2 className="h-10 w-10 text-purple-600" /> },
    { key: 'onlineSessions', icon: <MonitorPlay className="h-10 w-10 text-purple-600" /> }
  ];

  return (
  <AnimatedSection className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {servicesData.map((service, index) => (
          <motion.div 
            key={index}
            variants={fadeIn}
          >
            <Card className="service-card bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 h-full flex flex-col group relative">
              <CardHeader className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">{service.icon}</div>
                  <CardTitle className="text-2xl leading-tight">{t(`servicesList.${service.key}.title`)}</CardTitle>
                </div>
                <CardDescription className="text-sm text-purple-700 font-medium">{t(`servicesList.${service.key}.category`)}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <p className="text-gray-700 text-lg">{t(`servicesList.${service.key}.description`)}</p>
              </CardContent>
              <CardFooter className="p-6 bg-gray-50">
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                  <Link to="/contacto">
                    {t('servicesList.moreInfo')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
              <motion.div 
                className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="image-overlay-text !text-3xl">
                  {t(`servicesList.${service.key}.bannerText`)}
                </h2>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </AnimatedSection>
  );
};

const PricingSection = () => {
  const { t } = useTranslation('servicesPage');
  const pricingPackages = [
    { key: 'package1', popular: false },
    { key: 'package3', popular: true },
    { key: 'package6', popular: false },
    { key: 'package10', popular: false },
  ];

  return (
  <AnimatedSection className="py-24 bg-gray-50" delay={0.2}>
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-20"
        variants={fadeIn}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('pricing.title')}</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {t('pricing.description')}
          <br/> <span className="font-semibold">{t('pricing.individualPrice')}</span>
        </p>
         <p className="text-lg text-gray-600 mt-4">
          {t('pricing.paymentNote')}
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {pricingPackages.map((pkgInfo, index) => {
          const price = t(`pricing.${pkgInfo.key}Price`, { returnObjects: true });
          const numSessions = pkgInfo.key === 'package1' ? 1 : parseInt(pkgInfo.key.replace('package',''));
          const save = t(`pricing.${pkgInfo.key}Save`, { returnObjects: true });

          return (
          <motion.div 
            key={index}
            variants={fadeIn}
          >
            <Card className={`rounded-xl shadow-xl border h-full flex flex-col ${pkgInfo.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-gray-200'}`}>
              {pkgInfo.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">{t('pricing.mostPopular')}</div>
              )}
              <CardHeader className="p-6 text-center">
                <CardTitle className="text-3xl font-bold mb-2">{t(`pricing.${pkgInfo.key}Name`)}</CardTitle>
                <p className="text-4xl font-extrabold text-purple-600 mb-2">${price}</p>
                {save && save !== null && <p className="text-green-600 font-semibold">{t('pricing.save', { amount: save })}</p>}
                {numSessions > 0 && <p className="text-gray-500 text-sm">(${(price / numSessions).toFixed(2)} {t('pricing.pricePerSession')})</p>}
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <p className="text-gray-700 text-lg mb-4 text-center">{t(`pricing.${pkgInfo.key}Desc`)}</p>
                <ul className="space-y-2">
                  {t('pricing.features', { returnObjects: true }).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature.replace('Session(s)', numSessions === 1 ? 'Session' : 'Sessions')}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 mt-auto">
                <Button asChild size="lg" className={`w-full ${pkgInfo.popular ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                  <Link to="/contacto">
                    {t('pricing.selectPackage')}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )})}
      </motion.div>
    </div>
  </AnimatedSection>
  );
};


const FAQSection = () => {
  const { t } = useTranslation('servicesPage');
  const faqs = ['q1', 'q2', 'q3', 'q4'];
  return(
  <AnimatedSection className="py-24 bg-white" delay={0.2}>
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-20"
        variants={fadeIn}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('faq.title')}</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {t('faq.description')}
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-8">
        {faqs.map((faqKey, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="p-8 bg-gray-50 rounded-xl shadow-md border border-gray-200"
            >
              <h3 className="text-2xl font-semibold mb-3">{t(`faq.${faqKey}`)}</h3>
              <p className="text-gray-700 text-lg">{t(`faq.a${index + 1}`)}</p>
            </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
  );
};

const CTAServices = () => {
  const { t } = useTranslation('servicesPage');
  return (
  <AnimatedSection className="py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        variants={fadeIn}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('cta.title')}</h2>
        <p className="text-2xl mb-10">
          {t('cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-10 py-7 text-lg font-semibold">
            <Link to="/contacto">
              <CalendarDays className="mr-2 h-5 w-5" /> {t('cta.scheduleFreeConsultation')}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 px-10 py-7 text-lg font-semibold">
            <Link to="/contacto">
              <MessageCircle className="mr-2 h-5 w-5" /> {t('cta.askMore')}
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
  );
};


const Services = () => {
  return (
    <>
      <HeroServices />
      <ServicesList />
      <PricingSection />
      <FAQSection />
      <CTAServices />
    </>
  );
};

export default Services;
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, Facebook, Instagram, Twitter, CalendarDays, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const originalHeroImageUrl = "https://images.unsplash.com/photo-1531306728359-97545a080aac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cm9uJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80";

const Contact = () => {
  const { t } = useTranslation('contactPage');

  return (
    <>
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
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"> {t('hero.companyName')}</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold mb-10">{t('sendMessage.title')}</h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('sendMessage.description')}
              </p>
              <ContactForm />
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold mb-10">{t('contactInfo.title')}</h2>
              
              <div className="space-y-10">
                {[
                  { icon: <Phone className="h-7 w-7 text-purple-600" />, title: t('contactInfo.phoneTitle'), lines: [t('contactInfo.phoneLine1'), t('contactInfo.phoneLine2')] },
                  { icon: <Mail className="h-7 w-7 text-purple-600" />, title: t('contactInfo.emailTitle'), lines: [t('contactInfo.emailLine1')] },
                  { icon: <Clock className="h-7 w-7 text-purple-600" />, title: t('contactInfo.hoursTitle'), lines: [t('contactInfo.hoursLine1'), t('contactInfo.hoursLine2')] }
                ].map(item => (
                  <div key={item.title} className="flex items-start">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-5 flex-shrink-0 shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                      {item.lines.map(line => <p key={line} className="text-gray-700 text-lg">{line}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6">{t('followUs.title')}</h3>
                <div className="flex space-x-5">
                  {[
                    { icon: <Facebook className="h-6 w-6" />, label: t('followUs.facebook'), url: "#" },
                    { icon: <Instagram className="h-6 w-6" />, label: t('followUs.instagram'), url: "#" },
                    { icon: <Twitter className="h-6 w-6" />, label: t('followUs.twitter'), url: "#" } 
                  ].map(social => (
                    <a key={social.label} href={social.url} target={social.url === "#" ? "_self" : "_blank"} rel="noopener noreferrer" aria-label={social.label} className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-all duration-300 transform hover:scale-110 shadow-md">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gray-50" delay={0.2}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('howToSchedule.title')}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('howToSchedule.description')}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-10 w-10 text-purple-600 mr-4"/>
                <h3 className="text-3xl font-semibold">{t('howToSchedule.freeConsultTitle')}</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                {t('howToSchedule.freeConsultDesc')}
              </p>
              <Button asChild className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                <Link to="#contact-form">{t('howToSchedule.requestFreeConsult')}</Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeIn} transition={{delay:0.1}} className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Clock className="h-10 w-10 text-purple-600 mr-4"/>
                <h3 className="text-3xl font-semibold">{t('howToSchedule.realSessionTitle')}</h3>
              </div>
              <p className="text-lg text-gray-700 mb-2">
                {t('howToSchedule.realSessionDesc1')}
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>{t('howToSchedule.realSessionDesc2')}</strong>
              </p>
               <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                 <Link to="#contact-form">{t('howToSchedule.scheduleRealSession')}</Link>
               </Button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('askMoreInfoCTA.title')}</h2>
            <p className="text-2xl mb-10">
              {t('askMoreInfoCTA.description')}
            </p>
            <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-10 py-7 text-lg font-semibold">
              <Link to="#contact-form">
                <MessageCircle className="inline-block mr-2 h-5 w-5" /> {t('askMoreInfoCTA.sendMessageButton')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Contact;
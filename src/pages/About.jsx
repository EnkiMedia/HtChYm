import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, ArrowRight, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from 'react-i18next';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const teamMemberImages = {
  julian: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  sandra: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
};

const originalHeroImageUrl = "https://images.unsplash.com/photo-1531306728359-97545a080aac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cm9uJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80";


const HeroAbout = () => {
  const { t } = useTranslation('aboutPage');
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
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"> {t('hero.companyName')}</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          {t('hero.description')}
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
  );
};

const MissionVisionSection = () => {
  const { t } = useTranslation('aboutPage');
  return (
  <AnimatedSection className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          variants={fadeIn}
          className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-10 rounded-xl shadow-xl border border-gray-200 transform hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center mb-6">
            <Heart className="h-10 w-10 text-purple-600 mr-4 flex-shrink-0" />
            <h2 className="text-4xl font-bold">{t('missionVision.missionTitle')}</h2>
          </div>
          <p className="text-xl text-gray-700">
            {t('missionVision.missionText')}
          </p>
        </motion.div>

        <motion.div 
          variants={fadeIn}
          transition={{delay: 0.2}}
          className="bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 p-10 rounded-xl shadow-xl border border-gray-200 transform hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center mb-6">
            <Zap className="h-10 w-10 text-teal-600 mr-4 flex-shrink-0" />
            <h2 className="text-4xl font-bold">{t('missionVision.visionTitle')}</h2>
          </div>
          <p className="text-xl text-gray-700">
            {t('missionVision.visionText')}
          </p>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
  );
};

const WhoWeAreSection = () => {
  const { t } = useTranslation('aboutPage');
  return (
  <AnimatedSection className="py-24 bg-gray-50" delay={0.2}>
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur-lg opacity-30 transform group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl group">
              <img  className="w-full h-auto rounded-xl dynamic-image" style={{maxHeight: "calc(100vh * 0.4)"}} alt="Equipo de hipnoterapeutas profesionales en un ambiente acogedor" src="https://images.unsplash.com/photo-1683226170046-a6794c48eefb" />
              <motion.div 
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="image-overlay-text">
                  {t('whoWeAre.imageOverlay')}
                </h2>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('whoWeAre.title')}</h2>
          <p className="text-xl text-gray-700 mb-6">
            {t('whoWeAre.p1')}
          </p>
          <p className="text-xl text-gray-700 mb-8">
            {t('whoWeAre.p2')}
          </p>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
  );
};

const NeurogenesisSection = () => {
  const { t } = useTranslation('aboutPage');
  return (
  <AnimatedSection id="neurogenesis" className="py-24 bg-white" delay={0.2}>
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-cyan-500 rounded-xl blur-lg opacity-30 transform group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl group">
              <img  className="w-full h-auto rounded-xl dynamic-image" style={{maxHeight: "calc(100vh * 0.4)"}} alt="Ilustración abstracta de la neurogénesis y neuroplasticidad cerebral" src="https://images.unsplash.com/photo-1612058633399-49246186dbe0" />
              <motion.div 
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="image-overlay-text">
                  {t('neurogenesis.imageOverlay')}
                </h2>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex items-center mb-6">
            <Brain className="h-10 w-10 text-green-600 mr-4 flex-shrink-0" />
            <h2 className="text-4xl md:text-5xl font-bold">{t('neurogenesis.title')}</h2>
          </div>
          <p className="text-xl text-gray-700 mb-6">
            {t('neurogenesis.p1')}
          </p>
          <p className="text-xl text-gray-700 mb-8">
            {t('neurogenesis.p2')}
          </p>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
  );
};


const OurTeamSection = () => {
  const { t } = useTranslation('aboutPage');
  const teamMembers = [
    {
      nameKey: 'julianName',
      roleKey: 'julianRole',
      bioKey: 'julianBio',
      image: teamMemberImages.julian,
      bannerKey: 'julianBanner'
    },
    {
      nameKey: 'sandraName',
      roleKey: 'sandraRole',
      bioKey: 'sandraBio',
      image: teamMemberImages.sandra,
      bannerKey: 'sandraBanner'
    },
  ];

  return (
  <AnimatedSection className="py-24 bg-gray-50" delay={0.2}>
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-20"
        variants={fadeIn}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('ourTeam.title')}</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {t('ourTeam.description')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-xl overflow-hidden group border border-gray-200 transform hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 dynamic-image" alt={`Retrato de ${t(`ourTeam.${member.nameKey}`)}`} src={member.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">{t(`ourTeam.${member.nameKey}`)}</h3>
                <p className="text-white/90 text-lg">{t(`ourTeam.${member.roleKey}`)}</p>
              </div>
              <motion.div 
                className="absolute inset-0 bg-black/50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="image-overlay-text">
                  {t(`ourTeam.${member.bannerKey}`)}
                </h2>
              </motion.div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg">{t(`ourTeam.${member.bioKey}`)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
  );
};


const CompetitiveDifferenceSection = () => {
  const { t } = useTranslation('aboutPage');
  return (
  <AnimatedSection className="py-24 bg-white" delay={0.2}>
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-16"
        variants={fadeIn}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('competitiveDifference.title')}</h2>
      </motion.div>
      <motion.div 
        variants={fadeIn}
        className="max-w-3xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-10 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
      >
        <Users className="h-12 w-12 mx-auto mb-6" />
        <p className="text-2xl md:text-3xl text-center font-semibold mb-6">
          {t('competitiveDifference.mainText')}
        </p>
        <p className="text-xl text-center">
          {t('competitiveDifference.subText')}
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
  );
};


const CTAAbout = () => {
  const { t } = useTranslation('aboutPage');
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
          <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-10 py-7 text-lg font-semibold transform hover:scale-105 transition-transform duration-300">
            <Link to="/contacto">
              {t('cta.scheduleFreeConsultation')}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 px-10 py-7 text-lg font-semibold transform hover:scale-105 transition-transform duration-300">
            <Link to="/servicios">
              {t('cta.viewServices')}
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
  );
};

const About = () => {
  return (
    <>
      <HeroAbout />
      <MissionVisionSection />
      <WhoWeAreSection />
      <NeurogenesisSection />
      <OurTeamSection />
      <CompetitiveDifferenceSection />
      <CTAAbout />
    </>
  );
};

export default About;
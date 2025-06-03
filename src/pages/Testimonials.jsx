import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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

const testimonialImages = {
  ana: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  luis: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  sofia: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  javier: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  elena: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  carlos: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
};

const videoTestimonialImages = {
  laura: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  pedro: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
};

const originalHeroImageUrl = "https://images.unsplash.com/photo-1531306728359-97545a080aac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cm9uJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80";


const HeroTestimonials = () => {
  const { t } = useTranslation('testimonialsPage');
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

const FeaturedTestimonial = () => {
  const { t } = useTranslation('testimonialsPage');
  const featured = {
    name: t('featuredTestimonial.name'),
    role: t('featuredTestimonial.role'),
    content: t('featuredTestimonial.content'),
    service: t('featuredTestimonial.service'),
    imageOverlay: t('featuredTestimonial.imageOverlay'),
    image: testimonialImages.ana, 
    rating: 5
  };

  return (
  <AnimatedSection className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <motion.div 
        variants={fadeIn}
        className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-2xl p-10 md:p-16 relative overflow-hidden group shadow-xl border border-gray-200 transform hover:scale-105 transition-transform duration-300"
      >
        <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
          <Quote className="w-full h-full text-purple-600" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 text-center">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-lg opacity-30 transform group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative overflow-hidden rounded-full shadow-lg">
                <img  className="w-full h-full object-cover dynamic-image" alt={`Retrato de ${featured.name}`} src={featured.image} />
                 <motion.div 
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="image-overlay-text !text-2xl sm:!text-3xl">
                      {featured.imageOverlay}
                    </h2>
                  </motion.div>
              </div>
            </div>
            <h3 className="text-2xl font-bold">{featured.name}</h3>
            <p className="text-gray-600 text-lg">{featured.role}</p>
            <div className="flex justify-center mt-3 text-yellow-400">
              {[...Array(featured.rating)].map((_, i) => (
                <Sparkles key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-8">
            <Quote className="h-12 w-12 text-purple-600 mb-6" />
            <p className="text-2xl text-gray-700 italic mb-8">
             "{featured.content}"
            </p>
            <p className="text-purple-700 font-semibold text-lg">{t('featuredTestimonial.service')}: {featured.service}</p>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
  );
};

const TestimonialsGrid = () => {
  const { t } = useTranslation('testimonialsPage');
  const testimonialsData = [
    { nameKey: 'luis', rating: 5, image: testimonialImages.luis },
    { nameKey: 'sofia', rating: 5, image: testimonialImages.sofia },
    { nameKey: 'javier', rating: 5, image: testimonialImages.javier },
    { nameKey: 'elena', rating: 4, image: testimonialImages.elena },
    { nameKey: 'carlos', rating: 5, image: testimonialImages.carlos },
  ].map(item => ({
    name: t(`moreSuccessStories.${item.nameKey}Name`),
    role: t(`moreSuccessStories.${item.nameKey}Role`),
    content: t(`moreSuccessStories.${item.nameKey}Content`),
    service: t(`moreSuccessStories.${item.nameKey}Service`),
    rating: item.rating,
    image: item.image,
  }));


  return (
  <AnimatedSection className="py-24 bg-gray-50" delay={0.2}>
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-20"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('moreSuccessStories.title')}</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {t('moreSuccessStories.description')}
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div 
            key={index}
            variants={fadeIn}
          >
            <Card className="testimonial-card bg-white rounded-xl shadow-xl overflow-hidden border-gray-200 h-full flex flex-col transform hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                   <div className="relative w-14 h-14 rounded-full mr-4 overflow-hidden shadow-inner">
                     <img className="w-full h-full object-cover dynamic-image" alt={`Retrato de ${testimonial.name}`} src={testimonial.image} />
                   </div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 text-base">"{testimonial.content}"</p>
                <p className="text-purple-700 font-semibold mt-4 text-sm">Servicio: {testimonial.service}</p>
              </CardContent>
              <CardFooter>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Sparkles key={i} className="h-5 w-5 fill-current" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Sparkles key={i} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </AnimatedSection>
  );
};

const VideoTestimonials = () => {
  const { t } = useTranslation('testimonialsPage');
  const videoTestimonialsData = [
    { nameKey: 'laura', thumbnail: videoTestimonialImages.laura },
    { nameKey: 'pedro', thumbnail: videoTestimonialImages.pedro },
  ].map(item => ({
    name: t(`videoTestimonials.${item.nameKey}Name`),
    role: t(`videoTestimonials.${item.nameKey}Role`),
    service: t(`videoTestimonials.${item.nameKey}Service`),
    bannerText: t(`videoTestimonials.${item.nameKey}Banner`),
    thumbnail: item.thumbnail,
  }));

  return (
  <AnimatedSection className="py-24 bg-white" delay={0.2}>
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-20"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('videoTestimonials.title')}</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {t('videoTestimonials.description')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {videoTestimonialsData.map((video, index) => (
          <motion.div 
            key={index}
            variants={fadeIn}
            className="relative rounded-xl overflow-hidden shadow-2xl group border border-gray-200 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img  className="w-full h-full object-cover dynamic-image" alt={`Video testimonial de ${video.name}`} src={video.thumbnail} />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/80 flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-lg">
                  <div className="w-0 h-0 border-t-8 sm:border-t-10 border-t-transparent border-l-[14px] sm:border-l-[18px] border-l-purple-600 border-b-8 sm:border-b-10 border-b-transparent ml-1 sm:ml-1.5"></div>
                </div>
              </div>
              <motion.div 
                className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="image-overlay-text !text-2xl sm:!text-3xl">
                  {video.bannerText}
                </h2>
              </motion.div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-bold">{video.name}</h3>
              <p className="text-gray-600 text-lg">{video.role}</p>
              <p className="text-purple-700 font-semibold mt-2 text-base">Servicio: {video.service}</p>
            </div>
          </motion.div>
        ))}
      </div>
       <p className="text-center text-gray-600 mt-12 text-lg">
        {t('videoTestimonials.comingSoon')}
      </p>
    </div>
  </AnimatedSection>
  );
};

const SubmitStory = () => {
  const { t } = useTranslation('testimonialsPage');
  return (
  <AnimatedSection className="py-24 bg-gray-50" delay={0.2}>
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('submitStory.title')}</h2>
        <p className="text-xl text-gray-700 mb-10">
          {t('submitStory.description')}
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-7 text-lg font-semibold transform hover:scale-105 transition-transform duration-300">
          <Link to="/contacto#contact-form">
            {t('submitStory.submitMyTestimonial')} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </AnimatedSection>
  );
};

const CTATestimonials = () => {
  const { t } = useTranslation('testimonialsPage');
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
              {t('cta.knowServices')}
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
  );
};


const Testimonials = () => {
  return (
    <>
      <HeroTestimonials />
      <FeaturedTestimonial />
      <TestimonialsGrid />
      <VideoTestimonials />
      <SubmitStory />
      <CTATestimonials />
    </>
  );
};

export default Testimonials;
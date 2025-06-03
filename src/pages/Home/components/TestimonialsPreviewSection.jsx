import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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

const TestimonialsPreviewSection = () => {
  const { t } = useTranslation('homePage');
  const testimonials = [
    {
      name: t('testimonialsPreview.client1Name'),
      role: t('testimonialsPreview.client1Role'),
      content: t('testimonialsPreview.client1Content'),
    },
    {
      name: t('testimonialsPreview.client2Name'),
      role: t('testimonialsPreview.client2Role'),
      content: t('testimonialsPreview.client2Content'),
    },
    {
      name: t('testimonialsPreview.client3Name'),
      role: t('testimonialsPreview.client3Role'),
      content: t('testimonialsPreview.client3Content'),
    },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('testimonialsPreview.title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('testimonialsPreview.description')}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
            >
              <Card className="testimonial-card bg-white rounded-xl shadow-xl overflow-hidden border-gray-200 h-full flex flex-col transform hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mr-4 shadow-inner">
                      <span className="text-xl font-bold text-purple-600">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 text-base">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Sparkles key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transform hover:scale-105 transition-transform duration-300">
            <Link to="/testimonios">
              {t('testimonialsPreview.moreTestimonials')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};
export default TestimonialsPreviewSection;
import React from "react";
import { motion } from "framer-motion";
import { Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation(['common', 'homePage']); 
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/4aa20083-d699-4b96-93a1-b6e2b2c73ff7/04571c61ad65987822651c1c3dc748de.png";

  const therapists = [
    { nameKey: "julian", phone: t('footer.phoneJulian', { ns: 'common' }) },
    { nameKey: "sandra", phone: t('footer.phoneSandra', { ns: 'common' }) }
  ];

  const footerSections = [
    {
      title: t('footer.contactInfo', { ns: 'common' }),
      items: [
        { text: t('footer.therapists', { ns: 'common' }), type: "heading" },
        ...therapists.map(therapist => ({
          text: `${t(`footer.${therapist.nameKey}`, { ns: 'common' })}: ${therapist.phone.split(': ')[1]}`,
          icon: <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-purple-400" />,
          type: "contact"
        }))
      ],
    },
    {
      title: t('footer.quickContactApp', { ns: 'common' }),
      items: [
        { text: t('footer.contactAppDescription', { ns: 'common' }), type: "text" },
        {
          text: t('footer.launchApp', { ns: 'common' }),
          icon: <ExternalLink className="w-4 h-4 mr-2 text-purple-400" />,
          href: "#", 
          type: "link"
        },
      ],
    }
  ];

  const quickLinks = [
    { name: t('footer.privacyPolicy', { ns: 'common' }), path: "/privacy-policy" },
    { name: t('footer.termsOfService', { ns: 'common' }), path: "/terms-of-service" },
    { name: t('footer.faq', { ns: 'common' }), path: "/faq" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-gray-300 pt-16 pb-8"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div 
            className="md:col-span-1 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <Link to="/">
              <img src={logoUrl} alt={t('footer.companyName', { ns: 'common' })} className="h-16 md:h-[68px] w-auto mb-4 cursor-pointer"/>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm text-center md:text-left mt-2">
              {t('hero.description', { ns: 'homePage' })}
            </p>
          </motion.div>
          
          {footerSections.map((section, index) => (
            <motion.div 
              key={index} 
              className="md:col-span-1"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * index }}
            >
              <h4 className="text-lg font-semibold text-white mb-5">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    {item.icon}
                    {item.type === "link" ? (
                      <a
                        href={item.href}
                        target={item.href === "#" ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="hover:text-purple-300 transition-colors duration-200 flex items-center"
                      >
                        {item.text}
                      </a>
                    ) : item.type === "heading" ? (
                      <span className="font-medium text-gray-100">{item.text}</span>
                    ) : (
                      <span className="text-gray-400 flex items-center">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-4 md:mb-0">
              {t('footer.copyright', { ns: 'common', year: currentYear })}
            </p>
            <div className="flex space-x-5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xs text-gray-400 hover:text-purple-300 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactSection.module.css';
import ContactForm from './ContactForm';

const socialMedia = [
  { 
    name: 'Instagram', 
    icon: '/instagram-icon.png', 
    title: 'Instagram', 
    tagline: 'Visual journey.',
    size: '26px' // Control individual icon size here
  },
  { 
    name: 'TikTok', 
    icon: '/tiktok-icon.png', 
    title: 'TikTok', 
    tagline: 'Real-time news.',
    size: '24px' 
  },
  { 
    name: 'YouTube', 
    icon: '/youtube-icon.png', 
    title: 'LinkedIn', 
    tagline: 'Professional network.',
    size: '25px'
  },
  { 
    name: 'Facebook', 
    icon: '/facebook-icon.png', 
    title: 'Facebook', 
    tagline: 'Community hub.',
    size: '23px'
  }
];

const ContactSection = () => {
  return (
    <div className={styles.container}>
      
      {/* Left Side */}
      <section className={styles.leftSide}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          Email, call, or complete the form to learn how Stella can curate your perfect sanctuary.
        </p>

        <div className={styles.contactLinks}>
          <a href="mailto:info@stella.io" className={styles.linkItem}>info@stella.io</a>
          <a href="tel:321-221-231" className={styles.linkItem}>321-221-231</a>
          <a href="#support" className={styles.linkItem}>Customer Support</a>
        </div>

        {/* Single Row Social Grid */}
        <div className={styles.socialGrid}>
          {socialMedia.map((social, index) => (
            <motion.a 
              href={`#${social.name}`} 
              key={social.name}
              className={styles.socialCard}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={social.icon} 
                alt={social.name} 
                className={styles.socialIcon} 
                style={{ width: social.size, height: social.size }} // Dynamic size control
              />
              <h3 className={styles.socialTitle}>{social.title}</h3>
              <p className={styles.socialText}>{social.tagline}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Right Side: Empty Placeholder Box */}
      <section className={styles.rightSide}>
        <div className={styles.emptyFormBox}>
          <ContactForm />
        </div>
      </section>
      
    </div>
  );
};

export default ContactSection;
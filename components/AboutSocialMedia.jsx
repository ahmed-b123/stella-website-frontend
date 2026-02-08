import React from 'react';
import styles from './AboutSocialMedia.module.css';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Twitter, Youtube, Mail, Globe, Star } from 'lucide-react';

const socialLinks = [
  { id: 1, icon: Instagram, label: "Instagram", delay: 0 },
  { id: 2, icon: Facebook, label: "Facebook", delay: 1 },
  { id: 3, icon: Linkedin, label: "LinkedIn", delay: 2 },
  { id: 4, icon: Twitter, label: "Twitter", delay: 0.5 }, // Using Twitter icon for X
  { id: 5, icon: Youtube, label: "Youtube", delay: 1.5 },
  { id: 6, icon: Mail, label: "Newsletter", delay: 2.5 },
];

const AboutSocialMedia = () => {
  // Animation for the container of cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation for individual cards popping in
  const cardVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  // Continuous floating animation
  const floatTransition = (delay) => ({
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay // Offset the float so they don't move in unison
    }
  });

  return (
    <section className={styles.section}>
      {/* Background Glow Effect */}
      <motion.div 
        className={styles.glowBackground}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className={styles.container}>
        
        {/* Header Text */}
        <div className={styles.header}>
          <motion.span 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Socials
          </motion.span>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Connect with <span className={styles.highlight}>Stella</span>
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Follow our journey across platforms. We integrate seamlessly into your lifestyle, bringing you the latest updates and community stories.
          </motion.p>
        </div>

        {/* The "Puzzle" Grid */}
        <motion.div 
          className={styles.socialGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Wing Icons */}
          {socialLinks.slice(0, 3).map((social) => (
            <motion.div
              key={social.id}
              className={styles.socialCard}
              variants={cardVariants}
              animate={floatTransition(social.delay)}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(197, 160, 89, 0.15)" }}
            >
              <social.icon size={32} className={styles.icon} strokeWidth={1.5} />
            </motion.div>
          ))}

          {/* Center Main Node (The "Stella" Hub) */}
          {/*<motion.div 
            className={`${styles.socialCard} ${styles.centerCard}`}
            variants={cardVariants}
            animate={{ 
              y: [0, -5, 0],
              boxShadow: ["0 0 30px rgba(197, 160, 89, 0.2)", "0 0 50px rgba(197, 160, 89, 0.4)", "0 0 30px rgba(197, 160, 89, 0.2)"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Star size={56} className={styles.centerIcon} fill="#C5A059" fillOpacity={0.2} />
          </motion.div> */}

          {/* Right Wing Icons */}
          {socialLinks.slice(3, 6).map((social) => (
            <motion.div
              key={social.id}
              className={styles.socialCard}
              variants={cardVariants}
              animate={floatTransition(social.delay)}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(197, 160, 89, 0.15)" }}
            >
              <social.icon size={32} className={styles.icon} strokeWidth={1.5} />
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSocialMedia;
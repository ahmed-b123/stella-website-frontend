import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutHero.module.css';
import Navbar from "./Navbar";

const AboutHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className={styles.heroWrapper}>
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className={styles.videoBg}
      >
        <source src="/about-banner.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      <Navbar />

      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.textSide}>
          <div className={styles.titleContainer}>
            <motion.h1 variants={itemVariants} className={styles.mainTitle}>
              ABOUT
            </motion.h1>
            <motion.div variants={itemVariants} className={styles.bottomTitleRow}>
              <div className={styles.horizontalLine}></div>
              <h1 className={styles.brandName}>STELLA</h1>
            </motion.div>
          </div>

          <motion.p variants={itemVariants} className={styles.topDescription}>
            Our family's dedication to this noble material reflects a deep 
            respect for its history and potential and whatever it takes to do whatver and whatever.
          </motion.p>

          <motion.button 
                className={styles.primaryBtn}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
            >
                Commander maintenant
            </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
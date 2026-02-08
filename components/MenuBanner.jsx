import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar'; // Adjust path based on your folder structure
import styles from './MenuBanner.module.css';

const MenuBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <div className={styles.bannerWrapper}>
      <Navbar />
      
      <motion.section 
        className={styles.bannerContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.contentSide}>
          <motion.h1 variants={contentVariants} className={styles.title}>
            Enjoy a 
            <span className={styles.goldText}> journey of taste</span>
          </motion.h1>
          
          <motion.p variants={contentVariants} className={styles.description}>
            Experience the precision of Stella's master baristas. Every bean is 
            selected with purpose, and every pour is a testament to our craft.
          </motion.p>
          
          <motion.button 
            variants={contentVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaButton}
          >
            Explore Menu
          </motion.button>
        </div>

        <motion.div className={styles.imageSide} variants={imageVariants}>
          {/* Using background image from public directory as per instructions */}
          <div className={styles.heroImage}></div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default MenuBanner;
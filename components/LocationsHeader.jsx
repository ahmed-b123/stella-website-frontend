import React from 'react';
import { motion } from 'framer-motion';
import styles from './LocationsHeader.module.css';

const LocationsHeader = () => {
  // Animation variants for a smooth staggered entrance
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className={styles.headerContainer}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <img 
        src="/footer-logo.png"
        alt=""
        height="70px"
      />
      {/* <h1 className={styles.title}>
        Discover Stella around the city
      </h1> */}
            
      <p className={styles.subtitle}>
        Tunis, where your coffee journey takes you
      </p>
    </motion.div>
  );
};

export default LocationsHeader;
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProductsHeader.module.css';

const ProductHeader = () => {
  // Animation variants for a coordinated entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.header 
      className={styles.headerContainer}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1 
        className={styles.title}
        variants={itemVariants}
      >
        New Arrivals
      </motion.h1>
      
      <motion.p 
        className={styles.subtitle}
        variants={itemVariants}
      >
        Explore new arrivals from Stella. The collection offers a 
        wide range of different fabrics and silhouettes, crafted for 
        enduring elegance.
      </motion.p>
    </motion.header>
  );
};

export default ProductHeader;
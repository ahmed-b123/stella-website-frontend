import React from 'react';
import { motion } from 'motion/react';
import styles from './BrandRating.module.css';
import { Trophy } from "lucide-react";

const BrandRating = () => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 6, ease: "easeOut" }}
    >
      {/* <div className={styles.imageWrapper}> */}
        {/* Replace award.png with your local asset */}
        {/* <img src="/saveur.png" alt="Award" className={styles.awardImage} /> */}
      {/* </div> */}
      
      <div className={styles.content}>
        <Trophy size={17} color="#fff" />
        <span className={styles.text}>Selected product of the year</span>
      </div>
    </motion.div>
  );
};

export default BrandRating;
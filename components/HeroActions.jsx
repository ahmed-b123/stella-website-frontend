import React from 'react';
import { motion } from 'motion/react';
import styles from './HeroActions.module.css';

const HeroActions = () => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 6.0, ease: "easeOut" }}
    >
      <motion.button 
        className={styles.primaryBtn}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Commander maintenant
      </motion.button>

      <motion.button 
        className={styles.secondaryBtn}
        whileTap={{ scale: 0.96 }}
      >
        <span className={styles.btnText}>Découvrir la gamme</span>
      </motion.button>
    </motion.div>
  );
};

export default HeroActions;
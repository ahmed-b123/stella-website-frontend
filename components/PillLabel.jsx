import React from 'react';
import { motion } from 'motion/react';
import { Circle } from 'lucide-react';
import styles from './PillLabel.module.css';

const PillLabel = () => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 6.5, ease: "easeOut" }}
    >
      <span className={styles.text}>Torréfié avec soin</span>
      <Circle size={4} fill="white" className={styles.dot} />
      <span className={styles.text}>Depuis 2022</span>
    </motion.div>
  );
};

export default PillLabel;
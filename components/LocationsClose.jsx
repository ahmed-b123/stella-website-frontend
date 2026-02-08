import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './LocationsClose.module.css';

const LocationsClose = ({ onBack }) => {
  return (
    <motion.button 
      className={styles.closeButton}
      onClick={onBack}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileTap={{ scale: 0.95 }}
    >
      <X className={styles.icon} strokeWidth={2} />
      <span className={styles.text}>Fermer</span>
    </motion.button>
  );
};

export default LocationsClose;
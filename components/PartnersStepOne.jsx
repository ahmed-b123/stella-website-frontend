import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PartnersStepOne.module.css';

const Partners = () => {
  const [step, setStep] = useState(1);

  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.inputStack}>
        <div className={styles.inputGroup}>
          <label>Full name*</label>
          <input type="text" placeholder="Enter your name" className={styles.textInput} />
        </div>

        <div className={styles.inputGroup}>
          <label>Email*</label>
          <input type="email" placeholder="Enter your email" className={styles.textInput} />
        </div>

        <div className={styles.inputGroup}>
          <label>Phone number*</label>
          <input type="tel" placeholder="+1 (555) 000-0000" className={styles.textInput} />
        </div>
      </div>

      <button className={styles.continueBtn} onClick={() => setStep(2)}>
        Continue
      </button>

      <div className={styles.dotsContainer}>
        <div className={`${styles.dot} ${styles.dotActive}`} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </motion.div>
  );
};

export default Partners;
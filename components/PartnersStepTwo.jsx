import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PartnersStepTwo.module.css';

const Partners = () => {
  const [step, setStep] = useState(2); // Starting at 2 for this preview
  const [source, setSource] = useState('');

  const sources = [
    'Newsletter',
    'LinkedIn',
    'Indeed',
    'Seek',
    'Dribbble Jobs',
    'Somewhere else'
  ];

  const stepVariants = {
    initial: { opacity: 0, x: 20 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <motion.div key="step2" variants={stepVariants} initial="initial" animate="enter" exit="exit">
        <div className={styles.radioList}>
            {sources.map((item) => (
            <div key={item} onClick={() => setSource(item)}>
                <label className={styles.radioOption}>
                <div className={`${styles.customRadio} ${source === item ? styles.radioActive : ''}`}>
                    {source === item && <div className={styles.radioInner} />}
                </div>
                {item}
                </label>
                
                {/* Conditional input for "Somewhere else" */}
                {item === 'Somewhere else' && source === 'Somewhere else' && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }}
                    className={styles.conditionalInput}
                >
                    <input 
                    type="text" 
                    placeholder="Please specify..." 
                    className={styles.textInput} 
                    autoFocus
                    />
                </motion.div>
                )}
            </div>
            ))}
        </div>

        <button className={styles.continueBtn} onClick={() => setStep(3)}>
            Continue
        </button>

        <div className={styles.dotsContainer}>
            <div className={styles.dot} />
            <div className={`${styles.dot} ${styles.dotActive}`} />
            <div className={styles.dot} />
        </div>
    </motion.div>
  );
};

export default Partners;
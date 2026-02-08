import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PartnersForm.module.css';
import PartnersStepOne from "./PartnersStepOne";
import PartnersStepTwo from "./PartnersStepTwo";

const Partners = () => {
  const [step, setStep] = useState(2);
  const [intro, setIntro] = useState("");
  const maxChars = 480;

  const stepVariants = {
    initial: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className={styles.mainWrapper}>
      <section className={styles.formSection}>
        <div className={styles.stepContainer}>
          <header className={styles.formHeader}>
            <h2 className={styles.formTitle}>Professional Presence</h2>
            <p style={{ color: '#667085', fontSize: '0.9rem' }}>
              Finalize your partnership application details.
            </p>
          </header>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <PartnersStepOne />
            )}
            {step === 2 && (
              <PartnersStepTwo />
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Partners;
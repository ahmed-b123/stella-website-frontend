import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './partners.module.css';
import PartnersForm from "../components/PartnersForm";

const Partners = () => {
  const [step, setStep] = useState(1);

  return (
    <div className={styles.mainWrapper}>
      <section className={styles.formSection}>
        <PartnersForm />
      </section>

      <section className={styles.visualSection}>
        {/* <img src="/partners-hero.jpg" alt="Partnership" className={styles.backgroundImage} /> */}
        <div className={styles.overlay} />
        <div className={styles.contentBox}>
          <h1 className={styles.heroTitle}>A Partnership <br /> of Excellence.</h1>
        </div>
      </section>
    </div>
  );
};

export default Partners;
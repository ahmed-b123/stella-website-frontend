import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form className={styles.formWrapper} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.header}>
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>You can reach us anytime</p>
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="First name" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Last name" className={styles.inputField} />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <Mail size={18} className={styles.inputIcon} />
        <input 
          type="email" 
          placeholder="Your email" 
          className={`${styles.inputField} ${styles.iconInput}`} 
        />
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.phoneContainer}>
          <button type="button" className={styles.countrySelect}>
            +62 <ChevronDown size={14} />
          </button>
          <input 
            type="tel" 
            placeholder="Phone number" 
            className={`${styles.inputField} ${styles.phoneInput}`} 
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <textarea 
          placeholder="How can we help?" 
          className={`${styles.inputField} ${styles.textArea}`}
          maxLength={120}
        ></textarea>
        <span className={styles.counter}>0/120</span>
      </div>

      <motion.button 
        className={styles.submitBtn}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        Submit
      </motion.button>

      <p className={styles.legalText}>
        By contacting us, you agree to our <strong>Terms of service</strong> and <strong>Privacy Policy</strong>
      </p>
    </form>
  );
};

export default ContactForm;
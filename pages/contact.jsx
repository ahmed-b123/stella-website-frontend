import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; 
import styles from './contact.module.css';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  // Simple fade-in transition for the whole page
  const pageTransition = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar mode={2} />

      <motion.main 
        className={styles.mainContent}
        {...pageTransition}
      >
        <section className={styles.contentSection}>
          
          <ContactSection />

        </section>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Contact;
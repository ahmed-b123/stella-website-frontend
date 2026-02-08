import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, ShieldCheck } from 'lucide-react';
import styles from './about.module.css';
import AboutHero from "../components/AboutHero";
import AboutExperience from '../components/AboutExperience';
import AboutVideo from '../components/AboutVideo';
import StellaStats from '../components/StellaStats';
import Footer from "../components/Footer";
import AboutProcess from '../components/AboutProcess';
import AboutSocialMedia from '../components/AboutSocialMedia';

const About = () => {
  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.main 
      className={styles.aboutContainer}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AboutHero />
      <AboutExperience />
      <AboutVideo />
      <StellaStats />
      <AboutProcess />
      <AboutSocialMedia />
      <Footer />
    </motion.main>
  );
};

export default About;
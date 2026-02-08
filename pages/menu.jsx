import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Award, Users } from 'lucide-react';
import styles from './about.module.css';
import MenuBanner from '../components/MenuBanner';
import MenuListings from '../components/MenuListings';
import Footer from "../components/Footer";

const AboutBaristas = () => {
  // Animation variants for a smooth fade-in and slide-up
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className={styles.aboutContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MenuBanner />
      <MenuListings />
      <Footer />
    </motion.section>
  );
};

export default AboutBaristas;
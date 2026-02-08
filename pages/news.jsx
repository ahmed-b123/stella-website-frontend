import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import styles from './news.module.css';
import NewsHeader from '../components/NewsHeader';
import NewsBanner from '../components/NewsBanner';
import NewsGrid from '../components/NewsGrid';

const News = () => {
  // Page transition settings
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { 
        opacity: 1, 
        y: 0, 
        transition: { 
        duration: 0.8, 
        // Using a built-in easing string which is safer and looks great
        ease: "easeOut" 
        } 
    },
    exit: { 
        opacity: 0, 
        transition: { duration: 0.4 } 
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar mode={2} />

      <motion.main 
        className={styles.mainContent}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* The sections we figure out later will be injected here */}
        <NewsHeader />
        <NewsBanner />
        <NewsGrid />
      </motion.main>

      <Footer />
    </div>
  );
};

export default News;
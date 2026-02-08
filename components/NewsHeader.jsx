import React from 'react';
import { motion } from 'framer-motion';
import { PenLine, Lightbulb, BookOpen, Clapperboard } from 'lucide-react';
import styles from './NewsHeader.module.css';

const NewsHeader = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  };

  return (
    <section className={styles.headerSection}>
      <motion.div 
        className={styles.banner}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.p className={styles.eyebrow} variants={itemVariants}>
          Welcome to Bulletin
        </motion.p>
        
        <motion.h1 className={styles.headline} variants={itemVariants}>
          Craft narratives <PenLine className={styles.iconInline} size={20} /> {' '}
          that ignite <span className={styles.goldText}>inspiration</span> <Lightbulb className={styles.iconInline} size={20} /> 
          <br />
          <span className={styles.goldText}>knowledge</span> <BookOpen className={styles.iconInline} size={20} /> 
          and <span className={styles.goldText}>entertainment</span> <Clapperboard className={styles.iconInline} size={20} />
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default NewsHeader;
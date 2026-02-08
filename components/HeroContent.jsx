import React from 'react';
import { motion } from 'motion/react';
import styles from './HeroContent.module.css';

const HeroContent = () => {
  return (
    <div className={styles.wrapper}>
      <motion.h1 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 6, ease: "easeOut" }}
      >
        Savourez votre <br /> café du matin.
      </motion.h1>

      <motion.p 
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 6.3, ease: "easeOut" }}
      >
        Des grains sélectionnés, une torréfaction maîtrisée,
        et une fraîcheur qui se sent dès la première gorgée.
      </motion.p>
    </div>
  );
};

export default HeroContent;
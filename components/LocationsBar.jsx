import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Store, SlidersHorizontal, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './LocationsBar.module.css';

const LocationsBar = () => {
  // Animation for the bar sliding in
  const barVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
    }
  };

  return (
    <motion.div 
      className={styles.barContainer}
      initial="hidden"
      animate="visible"
      variants={barVariants}
    >
      {/* Left Group: Filters */}
      <div className={styles.leftGroup}>
        <button className={styles.filterBtn}>
          <MapPin className={styles.icon} strokeWidth={1.5} />
          Boutiques
        </button>
        
        <button className={styles.filterBtn}>
          <Store className={styles.icon} strokeWidth={1.5} />
          Retailers
        </button>
        
        <button className={styles.filterBtn}>
          <SlidersHorizontal className={styles.icon} strokeWidth={1.5} />
          Filter
        </button>
      </div>

      {/* Right Group: Search */}
      <div className={styles.rightGroup}>
        <button className={styles.searchBtn}>
          <Search className={styles.icon} strokeWidth={1.5} />
          Explore the map
        </button>

        <button className={`${styles.navButton} ${styles.navButtonLeft}`}>
          <ChevronLeft size={24} className={styles.navButtonIcon} />
        </button>

        <button className={`${styles.navButton} ${styles.navButtonRight}`}>
          <ChevronRight size={24} className={styles.navButtonIcon} />
        </button>
      </div>
    </motion.div>
  );
};

export default LocationsBar;
import React from 'react';
import { motion } from 'framer-motion';
import styles from './locations.module.css';
import LocationsHeader from '../components/LocationsHeader';
import LocationsBar from '../components/LocationsBar';
import LocationsCarousel from '../components/LocationsCarousel';
import LocationsIndicators from '../components/LocationsIndicators';
import LocationsClose from '../components/LocationsClose';

const Locations = () => {
  // Simple fade-in transition for the main container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.main 
      className={styles.pageCanvas}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <LocationsHeader />
      <LocationsIndicators />
      <LocationsClose />

      <div className={styles.contentWrapper}>
        <div className={styles.reservedSlot}>
          <LocationsBar /> 
          <LocationsCarousel />
        </div>
      </div>
    </motion.main>
  );
};

export default Locations;
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import styles from './LocationsIndicators.module.css';

const LOCATIONS = [
  { id: 1, name: "Stella Tunisia Mall", top: "25%", left: "60%" },
  { id: 2, name: "Stella La Marsa", top: "25%", left: "35%" },
  { id: 4, name: "Stella Sidi Bou Said", top: "20%", left: "15%" },
  { id: 5, name: "Stella Gammarth", top: "25%", left: "75%" },
];

const LocationsIndicators = () => {
  // Floating animation variant
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {LOCATIONS.map((loc) => (
        <motion.div
          key={loc.id}
          className={styles.indicator}
          style={{ top: loc.top, left: loc.left }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: loc.id * 0.2, duration: 0.5 }}
        >
          <motion.div 
            variants={floatingVariants}
            animate="animate"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <MapPin className={styles.pinIcon} size={32} fill="#C5A059" fillOpacity={0.2} />
            <div className={styles.labelContainer}>
              <span className={styles.labelText}>{loc.name}</span>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default LocationsIndicators;
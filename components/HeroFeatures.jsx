import React from 'react';
import { motion } from 'motion/react';
import { Truck, CreditCard, Headset } from 'lucide-react';
import styles from './HeroFeatures.module.css';

const features = [
  { icon: <Truck size={18} strokeWidth={1.5} />, text: "Livraison 24/7" },
  { icon: <CreditCard size={18} strokeWidth={1.5} />, text: "Paiement sécurisé" },
  { icon: <Headset size={18} strokeWidth={1.5} />, text: "Service client créatif" }
];

const HeroFeatures = () => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 6.2, ease: "easeOut" }}
    >
      {features.map((item, index) => (
        <div key={index} className={styles.featureItem}>
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.text}>{item.text}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default HeroFeatures;
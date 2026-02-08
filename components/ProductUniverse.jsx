import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProductUniverse.module.css';

const categories = [
  {
    id: 1,
    title: "Stella Baristas",
    description: "Un café espresso raffiné en capsules, parfait pour les machines Nespresso®.",
    image: "/arabic-coffee.png",
  },
  {
    id: 2,
    title: "Retail Blends",
    description: "Savourez nos cafés fraichement moulus, disponibles en grains ou moulus.",
    image: "/instant-coffee.png",
  },
  {
    id: 3,
    title: "Wholesale Partner",
    description: "Découvrez nos solutions pour les cafés, restaurants et partenaires à grande échelle.",
    image: "/merche.png",
  }
];

const CategoryCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we are on mobile to keep the button visible
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div 
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <div className={styles.imageWrapper}>
        <motion.img 
          src={item.image} 
          alt={item.title} 
          className={styles.image}
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>

      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardSubtitle}>{item.description}</p>

      <AnimatePresence>
        {(isHovered || isMobile) && (
          <motion.div 
            className={styles.buttonWrapper}
            initial={isMobile ? { opacity: 1, y: 0 } : { y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.button 
              className={styles.primaryBtn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Commander maintenant
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProductUniverse = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.mainTitle}>Découvrez l'univers Stella</h2>
        <div className={styles.divider} />
        <p className={styles.mainSubtitle}>
          L'excellence du café artisanal, du grain à la tasse, pour une expérience sensorielle inégalée.
        </p>
      </header>
      
      <div className={styles.grid}>
        {categories.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductUniverse;
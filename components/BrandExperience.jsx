import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './BrandExperience.module.css';
import { ChevronDown } from 'lucide-react';

const items = [
  { id: 1, title: "Cafés", desc: "Une sélection rigoureuse de grains d'exception, torréfiés avec une précision architecturale pour révéler des profils aromatiques profonds.", img: "/hotesse.jpeg" },
  { id: 2, title: "Machines", desc: "L'ingénierie de pointe rencontre le design minimaliste. Nos systèmes garantissent une pression constante pour un créma parfait.", img: "/brand-2.png" },
  { id: 3, title: "Accessoires", desc: "Des objets conçus pour sublimer votre rituel café. De la porcelaine fine aux outils de précision, chaque détail compte.", img: "/brand-3.png" },
  { id: 4, title: "Lifestyle", desc: "Au-delà du goût, un art de vivre. Découvrez nos collections exclusives et intégrez l'esthétique Stella dans votre quotidien.", img: "/brand-4.png" },
];

const doubledItems = [...items, ...items, ...items];

const BrandExperience = () => {
  const [stepSize, setStepSize] = useState(440); // Default Desktop (420 card + 20 gap)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // On mobile, the step is the full screen width to center the next card
        setStepSize(window.innerWidth * 0.85 + 20); 
      } else if (window.innerWidth <= 1024) {
        setStepSize(360); // Tablet
      } else {
        setStepSize(440); // Desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const xPositions = [0, 0, -stepSize, -stepSize, -stepSize*2, -stepSize*2, -stepSize*3, -stepSize*3, -stepSize*4];
  const stepTimes = [0, 0.20, 0.25, 0.45, 0.50, 0.70, 0.75, 0.95, 1];

  return (
    <section className={styles.section}>
      <div className={styles.backgroundOverlay} />
      
      <motion.div 
        className={styles.contentOverlay}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className={styles.videoTitle}>L'Expérience Stella</h2>
        <div className={styles.titleDivider} />
        <p className={styles.videoSubtitle}>L'artisanat en mouvement</p>

        <div className={styles.carouselContainer}>
          <motion.div 
            className={styles.carouselTrack}
            animate={{ x: xPositions }}
            transition={{
              duration: 24, 
              repeat: Infinity,
              ease: "easeInOut",
              times: stepTimes
            }}
          >
            {doubledItems.map((item, idx) => (
              <motion.div key={idx} className={styles.card} whileHover="hover">
                <div className={styles.imageContainer}>
                  <motion.img 
                    src={item.img} 
                    alt={item.title} 
                    className={styles.cardImage} 
                    variants={{ hover: { scale: 1.08 } }}
                  />
                  <div className={styles.cardOverlay} />
                </div>
                
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <div className={styles.cardGoldLine} />
                  <p className={styles.cardDescription}>{item.desc}</p>
                  <ChevronDown className={styles.cardIcon} size={20} />
                </div>

                <motion.div 
                  className={styles.cardFrame}
                  variants={{ hover: { opacity: 1, inset: '15px' } }}
                  initial={{ opacity: 0, inset: '0px' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrandExperience;
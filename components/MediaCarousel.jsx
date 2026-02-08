"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './MediaCarousel.module.css';

const mediaOutlets = [
  { id: 1, name: "Forbes", quote: "Stella is redefining modern luxury.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/3840px-Forbes_logo.svg.png", width: 150 },
  { id: 2, name: "TechCrunch", quote: "The innovation behind Stella is unmatched.", logo: "https://m.jawharafm.net/ar/img/logo_jfmtv_fini.png", width: 105 },
  { id: 3, name: "Vogue", quote: "Elegance meets functionality.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/3840px-TechCrunch_logo.svg.png", width: 110 },
  { id: 4, name: "Wired", quote: "The future of the industry is here.", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Herm%C3%A8s.svg/1280px-Logo_Herm%C3%A8s.svg.png", width: 120 },
  // Duplicate for seamless looping
];

// Double the array to ensure the loop is continuous
const duplicatedMedia = [...mediaOutlets, ...mediaOutlets];

const MediaCarousel = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Featured In</h2>
        <div className={styles.divider} />
        <p className={styles.subtitle}>Our Global Recognition</p>
      </div>

      <div className={styles.carouselWrapper}>
        <motion.div 
          className={styles.carouselTrack}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
        >
          {duplicatedMedia.map((item, index) => (
            <div key={index} className={styles.card}>
              <img 
                src={item.logo} 
                alt={item.name} 
                width={item.width}
                className={styles.mediaLogo}
              />
              {/*<h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardSub}>"{item.quote}"</p> */}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCarousel;
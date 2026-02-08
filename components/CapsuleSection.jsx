import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './CapsuleSection.module.css';

const capsuleData = [
  { id: 1, src: '/capsule1.png', title: 'STELLA BLEND', price: '7.50€' },
  { id: 2, src: '/capsule2.png', title: 'INTENSO', price: '8.00€' },
  { id: 3, src: '/capsule3.png', title: 'DECAFFEINATO', price: '7.50€' },
  { id: 4, src: '/capsule4.png', title: 'ARABICA', price: '9.00€' },
  { id: 5, src: '/capsule5.png', title: 'LUNGO', price: '8.50€' },
  { id: 6, src: '/capsule6.png', title: 'RISTRETTO', price: '8.50€' },
  { id: 7, src: '/capsule7.png', title: 'WHATEVER', price: '8.50€' },
  { id: 8, src: '/capsule8.png', title: 'CHICHA', price: '8.50€' }
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
  }
};

const CapsuleSection = () => {
  const displayList = [...capsuleData, ...capsuleData];

  return (
    <motion.section 
      className={styles.sectionWrapper}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={styles.container}>
        <motion.header className={styles.header} variants={itemVariants}>
          <h2 className={styles.title}>THE CAPSULE COLLECTION</h2>
          <p className={styles.subtitle}>ELEGANCE IN EVERY EXTRACTION</p>
          <div className={styles.divider} />
        </motion.header>

        <motion.div className={styles.carouselContainer} variants={itemVariants}>
          
          {/* Row 1: Moving Left */}
          <div className={styles.carouselRow}>
            <div className={`${styles.track} ${styles.moveLeft}`}>
              {displayList.map((item, index) => (
                <div key={`left-${index}`} className={styles.card}>
                  <Image src={item.src} alt={item.title} height={404} width={240} className={styles.img} />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardPrice}>{item.price}</p>
                      <button className={styles.customButton}>ADD TO CART</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Moving Right */}
          <div className={styles.carouselRow}>
            <div className={`${styles.track} ${styles.moveRight}`}>
              {displayList.map((item, index) => (
                <div key={`right-${index}`} className={styles.card}>
                  <Image src={item.src} alt={item.title} height={404} width={240} className={styles.img} />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardPrice}>{item.price}</p>
                      <button className={styles.customButton}>ADD TO CART</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default CapsuleSection;
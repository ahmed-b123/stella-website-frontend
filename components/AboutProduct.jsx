import React from 'react';
import { motion } from 'motion/react';
import styles from './AboutProduct.module.css';

const AboutProduct = () => {
  return (
    <section className={styles.container}>
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className={styles.bgVideo}
      >
        <source src="/about-video-1.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className={styles.videoOverlay} />

      <div className={styles.contentWrapper}>
        <div className={styles.textSide}>
          <motion.h2 
            className={styles.mainTitle}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Your Coffee <br /> Your Way
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean sem ligula, dignissim tempor velit et, iaculis congue tortor.
          </motion.p>

          <motion.button 
                className={styles.primaryBtn}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
            >
                Learn More About Us
            </motion.button>

        </div>

        <motion.div 
          className={styles.cupWrapper}
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* <img src="/about1.png" alt="Coffee Cup" className={styles.cupImg} /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProduct;
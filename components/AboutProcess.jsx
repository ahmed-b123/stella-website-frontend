import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutProcess.module.css';

const AboutProcess = () => {
  const steps = [
    { id: "01", title: "Highly Curated", desc: "We source only the finest beans from sustainable farms." },
    { id: "02", title: "Ethically Sourced", desc: "Every bean tells a story of fair trade and community support." },
    { id: "03", title: "Extra Savings", desc: "Enjoy exclusive benefits and rewards with every purchase." },
    { id: "04", title: "Flexible Control", desc: "Pause, skip, or cancel your subscription anytime with ease." },
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.aboutProcessOverlay}>
        <div className={styles.mainContainer}>
          
          {/* Left Content Side */}
          <div className={styles.contentSide}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.mainTitle}>PURCHASING PROCESS</h2>
              {/* <p className={styles.description}>
                Experience the world’s most beautiful coffees through a 
                streamlined, intentional purchasing journey tailored for you.
              </p> */}

              <div className={styles.stepsGrid}>
                {steps.map((step) => (
                  <div key={step.id} className={styles.stepItem}>
                    <div className={styles.stepNumber}>{step.id}</div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* <button className={styles.shopButton}>SHOP SUBSCRIPTIONS</button> */}
            </motion.div>
          </div>

          {/* Right Image Side */}
          {/* <div className={styles.imageSide}>
            <motion.div 
              className={styles.imageWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img 
                src="/public/process-showcase.jpg" 
                alt="Stella Coffee Experience" 
                className={styles.mainImage} 
              />
            </motion.div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
import React from 'react';
import { motion } from 'framer-motion';
import styles from './StellaStats.module.css';

const StellaStats = () => {
  const cards = [
    { id: 1, title: "Pure Gold", sub: "Premium Quality", img: "/about-image-1.png", color: "#E8F5E9" },
    { id: 2, title: "Eco Stella", sub: "Sustainable", img: "/about-image-2.png", color: "#FFF3E0" },
    { id: 3, title: "Dark Roast", sub: "Bold Experience", img: "/about-image-3.png", color: "#F3E5F5" }
  ];

  const stats = [
    { value: "4.8", label: "Satisfying" },
    { value: "12k +", label: "Users" },
    { value: "50 +", label: "Locations" },
  ];

  return (
    <section className={styles.statsSection}>
        <motion.div 
            className={styles.headerContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className={styles.mainTitle}>Stella by the Numbers</h2>
            <div className={styles.divider}></div>
            <p className={styles.goldSubtitle}>
                Our growth is a testament to our commitment to quality and the 
                extraordinary community we've built together.
            </p>
        </motion.div>
      <div className={styles.container}>
        
        {/* Left Side: Staggered Cards */}
        <div className={styles.leftSide}>
          {cards.map((card, index) => (
            <motion.div 
              key={card.id}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
              initial={{ opacity: 0, x: -50, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: index % 2 === 0 ? -5 : 5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{ backgroundColor: card.color }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardSub}>{card.sub}</p>
              </div>
              <img src={card.img} alt={card.title} className={styles.cardImage} />
            </motion.div>
          ))}
        </div>

        {/* Right Side: Stats Numbers */}
        <div className={styles.rightSide}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (index * 0.1) }}
            >
              <h2 className={styles.statValue}>{stat.value}</h2>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StellaStats;
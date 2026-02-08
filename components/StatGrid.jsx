import React from 'react';
import { motion } from 'motion/react';
import styles from './StatGrid.module.css';

const stats = [
  { value: "100+", label: "Variétés &\nassemblages" },
  { value: "25+", label: "Origines\nsélectionnées" },
  { value: "10K", label: "Clients\nsatisfaits" }
];

const StatGrid = () => {
  return (
    <div className={styles.grid}>
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 7.4 + (index * 0.1), ease: "easeOut" }}
        >
          <h2 className={styles.value}>{stat.value}</h2>
          <p className={styles.label}>{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatGrid;
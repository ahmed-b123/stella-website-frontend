import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';
import styles from './NewsBanner.module.css';

const NewsBanner = () => {
  const bannerTransition = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <motion.section 
      className={styles.container}
      {...bannerTransition}
    >
      <div className={styles.card}>
        {/* Left: Image Side */}
        <div className={styles.imageWrapper}>
          <img 
            src="/jl-mosaique.webp" 
            alt="John Wick Chapter 4" 
            className={styles.image} 
          />
        </div>

        {/* Right: Content Side */}
        <div className={styles.content}>
          <div className={styles.metaTop}>
            {/* <div className={styles.sourceLogo}>
              <img src="https://upload.wikimedia.org/wikipedia/fr/2/26/Mosaique_fm_logo.png" alt="Netflix" />
            </div> */}
            <span className={styles.sourceName}>Mosaïque</span>
            <span className={styles.dot}>•</span>
            <span className={styles.timeAgo}>12 minutes ago</span>
          </div>

          <h2 className={styles.title}>
            Si Jasser Lahmar attala allahou fi 3omrihi w abkahou lana 🙏🤲 
          </h2>

          <p className={styles.excerpt}>
            There's been no official announcement regarding John Wick: Chapter 4's streaming release. 
            However, given it's a Lionsgate film, it will eventually be released on Starz...
          </p>

          <div className={styles.metaBottom}>
            <span className={styles.category}>Movies</span>
            <span className={styles.dot}>•</span>
            <span className={styles.readTime}>
              <Clock size={14} className={styles.icon} /> 4 min read
            </span>
            <button className={styles.expandBtn}>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsBanner;
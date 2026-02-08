import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, ArrowRight, Twitch } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top Section: Brand Statement & Newsletter */}
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <img src="/footer-logo.png" alt="Stella Logo" className={styles.footerLogo} />
            <p className={styles.tagline}>
              Crafting moments of architectural elegance through the art of the perfect extraction.
            </p>
          </div>

          <div className={styles.newsletter}>
            <h4 className={styles.columnTitle}>The Stella Journal</h4>
            <p className={styles.newsletterText}>Join our inner circle for exclusive collection launches.</p>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email Address" className={styles.input} />
              <button className={styles.subscribeBtn}>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Middle Section: Navigation Columns */}
        <div className={styles.midSection}>
          <div className={styles.navColumn}>
            <h4 className={styles.columnTitle}>Collections</h4>
            <ul>
              <li><a href="#">The Capsule</a></li>
              <li><a href="#">Limited Edition</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>

          <div className={styles.navColumn}>
            <h4 className={styles.columnTitle}>Experience</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Brewing Guide</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>

          <div className={styles.navColumn}>
            <h4 className={styles.columnTitle}>Assistance</h4>
            <ul>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Wholesale</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className={styles.socialColumn}>
            <h4 className={styles.columnTitle}>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Twitch size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>© {currentYear} Stella Coffee. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
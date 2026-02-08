import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './SocialGrid.module.css';

const socialLinks = [
  { 
    id: 'instagram',
    name: 'Instagram', 
    imgName: '/instagram-icon.png', 
    desc: 'Visual stories & daily rituals.',
    size: 43
  },
  { 
    id: 'tiktok',
    name: 'TikTok', 
    imgName: '/tiktok-icon.png', 
    desc: 'Behind the lens of Stella.',
    size: 40
  },
  { 
    id: 'Whatsapp',
    name: 'WhatsApp', 
    imgName: '/whatsapp-icon.png', 
    desc: 'Direct conversations & support.',
    size: 47 
  },
  { 
    id: 'youtube',
    name: 'YouTube', 
    imgName: '/youtube-icon.png', 
    desc: 'Cinematic brewing series.',
    size: 32
  },
  { 
    id: 'facebook',
    name: 'Facebook', 
    imgName: '/facebook-icon.png', 
    desc: 'Community updates & events.',
    size: 37
  },
  { 
    id: 'contact',
    name: 'Contact Us', 
    imgName: '/message-icon.webp', 
    desc: 'Inquiries & collaborations.',
    size: 45
  }
];

const SocialGrid = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <h2 className={styles.title}>Connect with Stella</h2>
          <p className={styles.subtitle}>
            Join our architectural coffee community and never miss a collection launch.
          </p>
        </header>

        <div className={styles.grid}>
          {socialLinks.map((social) => (
            <motion.a
              href={social.id === 'contact' ? '/contact' : '#'}
              key={social.id}
              className={styles.card}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className={styles.iconArea}>
                {/* Use the imgName prop for your local PNGs */}
                <img 
                  src={`${social.imgName}`} 
                  alt={social.name} 
                  className={styles.brandIcon}
                  height={social.size}
                  width={social.size} 
                />
              </div>
              
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.name}>{social.name}</h3>
                  <ArrowUpRight size={24} className={styles.arrow} strokeWidth={2} />
                </div>
                <p className={styles.desc}>{social.desc}</p>
                <span className={styles.actionLabel}>
                  {social.id === 'contact' ? 'Get in Touch' : 'Follow Us'}
                </span>
              </div>

              <div className={styles.hoverOverlay} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialGrid;
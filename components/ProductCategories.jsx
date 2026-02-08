import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Coffee, Globe } from 'lucide-react'; 
import styles from './ProductCategories.module.css';

const categories = [
  {
    title: 'Stella Baristas',
    subtitle: 'The Art of the Pour',
    description: 'Experience artisan coffee in a space designed for connection. Our baristas treat every cup as a masterpiece.',
    buttonText: 'Find a Location',
    image: '/product-category-1.webp',
    icon: <Coffee size={20} />,
    color: '#05140e'
  },
  {
    title: 'Retail Blends',
    subtitle: 'Brewed at Home',
    description: 'Bring the Stella experience to your kitchen. Ethically sourced beans, roasted daily for peak flavor.',
    buttonText: 'Shop the Collection',
    image: '/product-category-2.webp',
    icon: <Leaf size={20} />,
    color: '#2d4038'
  },
  {
    title: 'Wholesale Partner',
    subtitle: 'Global Supply',
    description: 'Custom roasting and bulk supply for businesses that refuse to settle for average coffee.',
    buttonText: 'Partner With Us',
    image: '/product-category-3.webp',
    icon: <Globe size={20} />,
    color: '#1a2621'
  }
];

const ProductCategories = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {categories.map((cat, index) => (
          <motion.div 
            key={index} 
            className={`${styles.row} ${index % 2 !== 0 ? styles.reverse : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image Side */}
            <div className={styles.imageSide}>
              <div className={styles.imageWrapper}>
                <img src={cat.image} alt={cat.title} className={styles.mainImg} />
                <div className={styles.imageFloatingCard}>
                  {cat.icon}
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className={styles.textSide}>
              <span className={styles.tag}>{cat.subtitle}</span>
              <h3 className={styles.title}>{cat.title}</h3>
              <p className={styles.description}>{cat.description}</p>
              
              <button className={styles.modernButton}>
                <span className={styles.btnText}>{cat.buttonText}</span>
                <div className={styles.iconCircle}>
                  <ArrowRight size={18} />
                </div>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
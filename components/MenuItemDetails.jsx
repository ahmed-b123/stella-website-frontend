import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Share2, Bookmark, Flame, Droplet, Wind, Zap, Edit3 } from 'lucide-react';
import styles from './MenuItemDetails.module.css';

const MenuItemDetails = ({ isOpen=true, onClose, item }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className={styles.modal}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>

          <div className={styles.imageHeader}>
            <img src="https://kitchenaid.com.au/cdn/shop/articles/Iced_Latte.png?v=1759984682" alt="Mango Coconut Smoothie Bowl" className={styles.heroImg} />
          </div>

          <div className={styles.content}>
            <div className={styles.mainInfo}>
              <div className={styles.titleRow}>
                <h2 className={styles.itemName}>Mango Coconut Smoothie Bowl</h2>
                <div className={styles.priceSection}>
                  <span className={styles.price}>$9.00</span>
                  <div className={styles.actionIcons}>
                    <Share2 size={18} className={styles.icon} />
                    <Bookmark size={18} className={styles.icon} />
                  </div>
                </div>
              </div>
              
              <div className={styles.metaTags}>
                <span className={styles.category}>Beverages, Dessert</span>
                <span className={styles.customBadge}>Customizable</span>
              </div>

              <div className={styles.statsRow}>
                <span className={styles.stat}><Star size={16} fill="#C5A059" color="#C5A059"/> <span>4.6/5 Rating</span></span>
                <span className={styles.stat}><span>85 Reviews</span></span>
                <span className={styles.stat}><spann>120 Orders</spann></span>
                <span className={styles.stat}><span>45 Favorites</span></span>
              </div>
            </div>

            <div className={styles.gridContainer}>
              <div className={styles.leftCol}>
                <section className={styles.section}>
                  <h4 className={styles.sectionLabel}>Description</h4>
                  <p className={styles.description}>
                    Refreshing and tropical smoothie bowl with a hint of coconut, 
                    topped with fresh fruit. Perfect for a light meal or a cool dessert.
                  </p>
                </section>

                <section className={styles.section}>
                  <h4 className={styles.sectionLabel}>Values</h4>
                  <div className={styles.valuesGrid}>
                    <span><Droplet size={14} /> Tropical & Refreshing</span>
                    <span><Zap size={14} /> Creamy & Indulgent</span>
                    <span><Wind size={14} /> Nutrient-Rich</span>
                    <span><Flame size={14} /> Naturally Sweet</span>
                    <span><Zap size={14} /> Energizing</span>
                  </div>
                </section>

                <div className={styles.nutritionBar}>
                  <div className={styles.nutriItem}><span>Calories</span><strong>320 Kcal</strong></div>
                  <div className={styles.nutriItem}><span>Proteins</span><strong>5 gram</strong></div>
                  <div className={styles.nutriItem}><span>Fats</span><strong>12 gram</strong></div>
                  <div className={styles.nutriItem}><span>Carbs</span><strong>50 gram</strong></div>
                </div>
              </div>

              <div className={styles.rightCol}>
                <div className={styles.ingredientsCard}>
                  <h4 className={styles.sectionLabel}>Ingredients</h4>
                  <ul className={styles.ingList}>
                    <li>Mango</li>
                    <li>Coconut milk</li>
                    <li>Banana</li>
                    <li>Pineapple</li>
                    <li>Coconut flakes</li>
                    <li>Fresh berries</li>
                    <li>Granola</li>
                  </ul>
                  <button className={styles.editBtn}>
                    <Edit3 size={16} /> Edit Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuItemDetails;
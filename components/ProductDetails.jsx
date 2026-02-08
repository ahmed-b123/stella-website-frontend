import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Plus, Minus, Info, 
  CheckCircle, Flame, Package, Truck 
} from 'lucide-react';
import styles from './ProductDetails.module.css';

const productImages = ["/product.png", "/arabic-coffee.png", "/instant-coffee.png", "/merche.png"];

const processSteps = [
  { id: '01', title: 'COMMANDE CONFIRMÉE', desc: 'Traitement instantané', icon: <CheckCircle size={28} /> },
  { id: '02', title: 'TORRÉFACTION PRÉCISE', desc: 'Fraîcheur garantie', icon: <Flame size={28} /> },
  { id: '03', title: 'EMBALLAGE LUXE', desc: 'Protection aluminium', icon: <Package size={28} /> },
  { id: '04', title: 'LIVRAISON STELLA', desc: 'Directement chez vous', icon: <Truck size={28} /> }
];

const variants = {
  enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 100 : -100, opacity: 0 })
};

const ProductDetails = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [quantity, setQuantity] = useState(1);
  const currentIndex = Math.abs(page % productImages.length);

  const paginate = (newDirection) => setPage([page + newDirection, newDirection]);

  return (
    <section className={styles.container}>
      {/* GALLERY */}
      <div className={styles.galleryContainer}>
        <div className={styles.mainDisplay}>
          <button className={`${styles.navArrow} ${styles.leftArrow}`} onClick={() => paginate(-1)}><ChevronLeft size={24} /></button>
          <div className={styles.visualStack}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img 
                key={page} src={productImages[currentIndex]} custom={direction} variants={variants}
                initial="enter" animate="center" exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className={styles.mainBox} 
              />
            </AnimatePresence>
          </div>
          <button className={`${styles.navArrow} ${styles.rightArrow}`} onClick={() => paginate(1)}><ChevronRight size={24} /></button>
        </div>
        <div className={styles.thumbnailRow}>
          {productImages.map((img, index) => (
            <div key={index} className={`${styles.thumbWrapper} ${currentIndex === index ? styles.activeThumb : ''}`} onClick={() => setPage([index, index > currentIndex ? 1 : -1])}>
              <img src={img} alt="Thumbnail" className={styles.thumbImage} />
            </div>
          ))}
        </div>
      </div>

      {/* INFO SIDE */}
      <div className={styles.infoSide}>
        <div className={styles.promoLabel}>
          <p>PROMO 10+2</p>
        </div>
        
        <h1 className={styles.title}>
          INTENSO ALUMINIUM <br />
          <span className={styles.subtitle}>ARCHITECTURAL SERIES — 10 UNITS</span>
        </h1>
        
        <div className={styles.processLabel}>
          <p>Processus De Dra Shnawa Wakteli Teshri</p>
          <Info size={17} />
        </div>

        <div className={styles.processTimeline}>
          {processSteps.map((step) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>{step.id}</span>
                <div className={styles.stepIcon}>{step.icon}</div>
              </div>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.purchaseBox}>
          <div className={styles.purchaseHeader}>
            <div className={styles.productBranding}>
              <h3>INTENSO ALUMINIUM</h3>
              <span>10 UNITS</span>
            </div>
            <div className={styles.priceSection}>
              <span className={styles.price}>€4,99</span>
              <span className={styles.ttc}>TTC</span>
            </div>
          </div>
          <div className={styles.actionRow}>
            <button className={styles.addBtn}>ADD TO BASKET</button>
            <div className={styles.counter}>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={16} /></button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}><Plus size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
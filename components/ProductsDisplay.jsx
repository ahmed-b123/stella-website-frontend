import React, { useRef } from 'react';
import styles from './ProductsDisplay.module.css';
import { ShoppingBasket } from "lucide-react";
import { motion, useScroll, useTransform } from 'framer-motion';

const ProductsDisplay = () => {
  const containerRef = useRef(null);

  // 1. Track scroll progress of this specific section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end": When top of container hits bottom of viewport
    // "start start": When top of container hits top of viewport
    offset: ["start end", "start start"], 
  });

  // 2. Define Animations based on scroll position

  // Blur: Starts at 10px (blurry) and goes to 0px (sharp)
  const blurValue = useTransform(scrollYProgress, [0, 0.6], ["blur(15px)", "blur(0px)"]);

  // Opacity/Darkening: Starts slightly transparent/darker, becomes fully visible
  const opacityValue = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);

  // Scale: Subtle zoom effect for extra cinematic feel (optional, remove if unwanted)
  const scaleValue = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const products = [
    { id: 1, name: "Premium Widget", price: "$99", img: "/product-banner-1.jpg" },
    { id: 2, name: "Elite Gadget", price: "$149", img: "/product-banner-2.jpg" },
    { id: 3, name: "Pro Device", price: "$199", img: "/product-banner-3.jpg" },
    { id: 4, name: "Luxury Item", price: "$299", img: "/product-banner-4.jpg" },
  ];

  return (
    <section ref={containerRef} className={styles.wrapper}>

      {/* 3. The Animated Cinematic Background */}
      <motion.div 
        className={styles.cinematicBackground}
        style={{
          filter: blurValue,
          opacity: opacityValue,
          scale: scaleValue,
          // 4. Gradient Mask: Softens the top edge to blend with the previous section
          //maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 100%)",
          //WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 100%)"
        }}
      />

      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Our Featured Collection</h1>

        {/* Added the divider you mentioned in your preferences */}
        <hr className={styles.divider} /> 

        <p className={styles.subtitle}>
          Experience the pinnacle of craftsmanship and modern design.<br />
          Tailored specifically for those who value quality above all else.
        </p>

        <div className={styles.cardGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card} style={{ backgroundImage: `url(${product.img})` }}>
              {/* Red Badge */}
              <span className={styles.badge}>NEW</span>

              <div className={styles.imageWrapper}>       
                {/* Glassmorphism Overlay */}
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <h3 className={styles.cardTitle}>{product.name}</h3>
                    <p className={styles.cardPrice}>1 Paquet - 10 Capsules</p>
                    <div className={styles.cardActions}>
                      <p>99.99 $</p>
                      <button>
                        <ShoppingBasket size={20} color="white" className={styles.cardIcon} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsDisplay;
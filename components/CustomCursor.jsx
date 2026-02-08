import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Motion values for hardware-accelerated movement
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics so the cursor doesn't feel "stiff"
  const springConfig = { damping: 25, stiffness: 250 };
  const sx = useSpring(cursorX, springConfig);
  const sy = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOut = () => setIsVisible(false);

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseleave', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseleave', handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className={styles.cursor}
      style={{
        translateX: sx,
        translateY: sy,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <img 
        src="/cursor.png" 
        alt="Stella Cursor" 
        className={styles.cursorImage} 
      />
    </motion.div>
  );
};

export default CustomCursor;
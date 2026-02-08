import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Testimonials.module.css';

const videos = [
  { id: 1, src: '/video1.mp4' },
  { id: 2, src: '/video2.mp4' },
  { id: 3, src: '/video3.mp4' },
  { id: 4, src: '/video4.mp4' },
  { id: 5, src: '/video5.mp4' },
  { id: 6, src: '/video6.mp4' },
];

const videoVariants = {
  initial: (direction) => ({
    y: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => ({
    y: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: {
      y: { duration: 0.4 },
      opacity: { duration: 0.2 },
    },
  }),
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const [videoData, setVideoData] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      setVideoData(videos);
    }, 3_000);
  }, []);

  const currentIndex = Math.abs(page % videoData.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const [isMuted, setIsMuted] = useState(true);

  const handleVideoMount = (node) => {
    if (!node) return;

    // We try to play with sound (muted = false)
    node.muted = false; 

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const playPromise = node.play();

          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              // FALLBACK: If the browser blocks the audio, 
              // we mute it so the video at least plays visually.
              console.warn("Autoplay with audio blocked. Muting to allow playback.");
              node.muted = true;
              node.play();
            });
          }
        } else {
          node.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <span className={styles.subtitle}>Voices of Stella</span>
          <h2 className={styles.mainTitle}>UNFILTERED ELEGANCE</h2>
          <div className={styles.divider} />
        </header>

        <div className={styles.contentGrid}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <h3 className={styles.contentTitle}>Real Moments.<br />Pure Extraction.</h3>
            <p className={styles.description}>
              Explore how our community integrates the art of coffee into their daily rituals. 
              Stella is the common thread in every architectural space.
            </p>
            <motion.button 
              className={styles.primaryBtn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Commander maintenant
            </motion.button>
          </div>

          {/* Right Side: Phone & Controls */}
          <div className={styles.rightSide}>
            {/* Navigation Arrows */}
            <div className={styles.controls}>
              <button className={styles.arrowBtn} onClick={() => paginate(-1)}>
                <ChevronLeft size={26} strokeWidth={2} />
              </button>
              <button className={styles.arrowBtn} onClick={() => paginate(1)}>
                <ChevronRight size={26} strokeWidth={2} />
              </button>
            </div>


            <div className={styles.phoneWrapper}>
              <img src="/phone-frame.png" alt="Phone Frame" className={styles.phoneFrame} />
              
              <div className={styles.videoScreen}>
                <AnimatePresence initial={false} custom={direction}>

                  {
                    videoData.length > 0 && (
                      <motion.video
                        key={page}
                        ref={handleVideoMount}
                        src={videoData[currentIndex].src}
                        custom={direction}
                        variants={videoVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        autoPlay
                        loop
                        playsInline
                        className={styles.videoPlayer}
                      />
                    )
                  }
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
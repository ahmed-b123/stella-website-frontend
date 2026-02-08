import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion' // Ensure you are using framer-motion or motion/react
import styles from '../styles/home.module.css';

// Components
import Navbar from '../components/Navbar';
import PillLabel from '../components/PillLabel';
import HeroContent from '../components/HeroContent';
import HeroActions from '../components/HeroActions';
import HeroFeatures from '../components/HeroFeatures';
import StatGrid from '../components/StatGrid';
import BrandRating from '../components/BrandRating';
import MediaCarousel from '../components/MediaCarousel';
import AboutProduct from '../components/AboutProduct';
import Preloader from '../components/Preloader'; // Import the new Preloader

import ProductCategories from '../components/ProductCategories';
import ProductUniverse from '../components/ProductUniverse';
import BrandExperience from '../components/BrandExperience';
import CapsuleSection from '../components/CapsuleSection';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';  
import SocialGrid from '../components/SocialGrid';
import MediaSection from "../components/MediaSection";
import ProductsDisplay from '../components/ProductsDisplay';
import CommunitySection from '../components/Community';

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false);

  const [beansScale, setBeansScale] = useState(1);
  const [beansRotation, setBeansRotation] = useState(1);
  const [beansPosition, setBeansPosition] = useState(1);

  useEffect(() => {
    // 1. Handling the Preloader Timer
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    // 2. Handling Navbar Scroll State
    const handleScroll = () => {
      const userScrolled = window.scrollY;
      setIsScrolled(userScrolled > 50);

      setBeansScale(1 + (userScrolled * 0.001));
      setBeansRotation(1 + (userScrolled * 0.005));
      setBeansPosition(1 + (userScrolled * 0.05))
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0, scale: 1.1 }} // Adds a slight zoom out as it disappears
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ position: 'fixed', zIndex: 9999, width: '100%', height: '100%' }}
          >
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{ overflowX: "hidden" }}
      >
        <Navbar isScrolled={isScrolled} />
        
        <section className={styles.banner}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className={styles.bannerVideo}
          >
            <source src="/banner-video-2.mp4" type="video/mp4" /> 
          </video>
          
          <div className={styles.bannerOverlay} />

          <div className={styles.bannerContent}>
            <PillLabel />
            <HeroContent />
            <BrandRating />
            <HeroActions />
            <HeroFeatures />
          </div>
        </section>

        <div className={styles.heroDivider}>
          <div className={styles.heroDividerContainer}>
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/059/591/811/small_2x/lush-bright-green-foliage-on-branches-cut-out-transparent-png.png"
              alt=""
              height={200}
              className={styles.leavesRight}
            />

            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/059/591/811/small_2x/lush-bright-green-foliage-on-branches-cut-out-transparent-png.png"
              alt=""
              height={200}
              className={styles.leavesRightReverse}
            />

            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/059/591/811/small_2x/lush-bright-green-foliage-on-branches-cut-out-transparent-png.png"
              alt=""
              height={200}
              className={styles.leavesLeft}
            />

            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/059/591/811/small_2x/lush-bright-green-foliage-on-branches-cut-out-transparent-png.png"
              alt=""
              height={200}
              className={styles.leavesLeftReverse}
            /> 
            
            <img 
              src="/bean.png"
              height={100}
              className={styles.bean1}
              style={{ 
                transform: `scale(${beansScale}) rotate(${45 * beansRotation}deg) translate(${beansPosition}px, ${-1 * beansPosition}px)`,
                transition: "all 0.2s ease"
              }}
            />

            <img 
              src="/bean.png"
              height={80}
              className={styles.bean2}
              style={{ 
                transform: `scale(${beansScale}) rotate(${15 * beansRotation}deg) translate(${beansPosition}px, ${-1 * beansPosition}px)`,
                transition: "all 0.2s ease"
              }}
            />


            <img 
              src="/bean.png"
              height={90}
              className={styles.bean3}
              style={{ 
                transform: `scale(${beansScale}) rotate(${45 * beansRotation}deg) translate(${beansPosition}px, ${-1 * beansPosition}px)`,
                transition: "all 0.2s ease"
              }}
            />

            <img 
              src="/bean.png"
              height={66}
              className={styles.bean4}
              style={{ 
                transform: `scale(${beansScale}) rotate(${66 * beansRotation}deg) translate(${beansPosition}px, ${beansPosition}px)`,
                transition: "all 0.2s ease"
              }}
            />

            <img 
              src="/bean.png"
              height={77}
              className={styles.bean5}
              style={{ 
                transform: `scale(${beansScale}) rotate(${45 * beansRotation}deg) translate(${-1 * beansPosition}px, ${-1 * beansPosition}px)`,
                transition: "all 0.2s ease"
              }}
            />

            <img 
              src="/bean.png"
              height={90}
              className={styles.bean6}
              style={{ 
                transform: `scale(${beansScale}) rotate(${66 * beansRotation}deg) translate(${-1 * beansPosition}px, ${beansPosition}px)`,
                transition: "all 0.2s ease"
              }}
            />

            <img 
              src="/bean.png"
              height={100}
              className={styles.bean7}
              style={{ 
                transform: `scale(${beansScale}) rotate(${104 * beansRotation}deg) translate(${beansPosition}px, ${-1 * beansPosition}px)`,
                transition: "all 0.2s ease"
              }}
            />

            <img 
              src="/bean.png"
              height={90}
              className={styles.bean8}
              style={{ 
                transform: `scale(${beansScale}) rotate(${99 * beansRotation}deg) translate(${-1 * beansPosition}px, ${-1 * beansPosition}px)`,
                transition: "all 0.2s ease"
              }}
            />

            <img 
              src="/bean.png"
              height={62}
              className={styles.bean9}
              style={{ 
                transform: `scale(${beansScale}) rotate(${104 * beansRotation}deg) translate(${beansPosition}px, ${beansPosition}px)`,
                transition: "all 0.2s ease"
              }}
            />

            <img 
              src="/bean.png"
              height={62}
              className={styles.bean10}
              style={{ 
                transform: `scale(${beansScale}) rotate(${104 * beansRotation}deg) translate(${-1 * beansPosition}px, ${beansPosition}px)`,
                transition: "all 0.2s ease"
              }}
            />
          </div>
        </div>
        <ProductsDisplay />
        {/*<MediaCarousel />
        <AboutProduct /> */}
       {/*<ProductCategories /> */}
        {/*<ProductUniverse />
        <BrandExperience />
        <CapsuleSection /> */}
        {/*<Testimonials />*/}
        {/*<SocialGrid />
        <MediaSection />
        <CommunitySection /> */}
        <Footer />
      </motion.main>
    </>
  )
}
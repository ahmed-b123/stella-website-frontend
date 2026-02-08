import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Volume2, VolumeX, Settings, Maximize, Pause } from 'lucide-react';
import styles from './AboutVideo.module.css';

const AboutVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  // Force first frame and ensure video is interactable
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // This forces the video to seek to the start and render the frame
    video.currentTime = 0.1;

    const handleVideoEnd = () => setIsPlaying(false);
    video.addEventListener('ended', handleVideoEnd);
    
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handlePlayPause = async () => {
    if (!videoRef.current) return;

    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.error("Playback error:", err);
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className={styles.sectionWrapper}>
      <motion.div className={styles.headerContainer}>
        <h2 className={styles.mainTitle}>CRAFTING THE VISION</h2>
        <div className={styles.divider}></div>
        <p className={styles.goldSubtitle}>
          A journey through our process, where tradition meets modern innovation.
        </p>
      </motion.div>

      <motion.div className={styles.videoContainer}>
        <video 
          ref={videoRef}
          className={styles.mainVideo}
          src="/about-main-video.mp4#t=0.1" // Direct src is often more stable for refs
          onTimeUpdate={handleTimeUpdate}
          onClick={handlePlayPause}
          preload="auto"
          playsInline
          muted={isMuted}
        />

        <div className={styles.controlsOverlay}>
          <div className={styles.glassControlBar}>
            <div className={styles.controlGroup}>
              <button className={styles.controlBtn} onClick={handleReplay}>
                <RotateCcw size={14} />
                <span>Replay</span>
              </button>
            </div>

            <div className={styles.centerControls}>
              <button className={styles.mainPlayBtn} onClick={handlePlayPause}>
                {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" />}
              </button>
            </div>

            <div className={styles.controlGroup}>
              <button className={styles.iconBtn} onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <Settings size={20} className={styles.subIcon} />
              <Maximize 
                size={20} 
                className={styles.subIcon} 
                onClick={() => videoRef.current.requestFullscreen()}
              />
            </div>

            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFilled} 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutVideo;
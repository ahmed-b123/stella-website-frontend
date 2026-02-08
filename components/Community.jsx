import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Community.module.css';
import { ChevronLeft, ChevronRight, Ellipsis, Instagram } from "lucide-react";

const STORIES = [
  { 
    id: 1, 
    username: 'Stella Café', 
    userImg: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/482316110_1171352091023268_19492634407345113_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YqIR6LIbAeEQ7kNvwGc40i1&_nc_oc=Adm4PBGbVl2wZh_Tnb4Vrpi-up_LSVc9bf4Wr-z1QM8D0IuNydBBZduh2cbkVq4qpRE&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=qVcCnY0u2mhLcAq5pcA6iw&oh=00_AftxiIzpnmuqCkPtZlN4tw-bzKWlgGINYyrqgdc21hUYpg&oe=698A9C3F', 
    videoSrc: '/stories-video-1.mp4', 
    videoImg: '/stories-thumbnail-1.jpg',
    time: '2h' 
  },
  { 
    id: 2, 
    username: 'Stella Café', 
    userImg: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/482316110_1171352091023268_19492634407345113_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YqIR6LIbAeEQ7kNvwGc40i1&_nc_oc=Adm4PBGbVl2wZh_Tnb4Vrpi-up_LSVc9bf4Wr-z1QM8D0IuNydBBZduh2cbkVq4qpRE&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=qVcCnY0u2mhLcAq5pcA6iw&oh=00_AftxiIzpnmuqCkPtZlN4tw-bzKWlgGINYyrqgdc21hUYpg&oe=698A9C3F', 
    videoImg: '/stories-thumbnail-2.jpg', 
    videoSrc: '/stories-video-2.mp4', 
    time: '5h' 
  },
  { 
    id: 3, 
    username: 'Stella Café', 
    userImg: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/482316110_1171352091023268_19492634407345113_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YqIR6LIbAeEQ7kNvwGc40i1&_nc_oc=Adm4PBGbVl2wZh_Tnb4Vrpi-up_LSVc9bf4Wr-z1QM8D0IuNydBBZduh2cbkVq4qpRE&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=qVcCnY0u2mhLcAq5pcA6iw&oh=00_AftxiIzpnmuqCkPtZlN4tw-bzKWlgGINYyrqgdc21hUYpg&oe=698A9C3F',
    videoImg: '/stories-thumbnail-3.jpg', 
    videoSrc: '/stories-video-3.mp4', 
    time: '12h' 
  },
  { 
    id: 4, 
    username: 'Stella Café', 
    userImg: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/482316110_1171352091023268_19492634407345113_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YqIR6LIbAeEQ7kNvwGc40i1&_nc_oc=Adm4PBGbVl2wZh_Tnb4Vrpi-up_LSVc9bf4Wr-z1QM8D0IuNydBBZduh2cbkVq4qpRE&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=qVcCnY0u2mhLcAq5pcA6iw&oh=00_AftxiIzpnmuqCkPtZlN4tw-bzKWlgGINYyrqgdc21hUYpg&oe=698A9C3F', 
    videoImg: '/stories-thumbnail-4.jpg', 
    videoSrc: '/stories-video-4.mp4', 
    time: '1d' 
  },
  { 
    id: 5, 
    username: 'Stella Café', 
    userImg: '/stories-thumbnail-5.jpg', 
    videoImg: '/stories-thumbnail-5.jpg', 
    videoSrc: '/stories-video-5.mp4', 
    time: '1d' 
  },
  { 
    id: 6, 
    username: 'Stella Café', 
    userImg: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/482316110_1171352091023268_19492634407345113_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YqIR6LIbAeEQ7kNvwGc40i1&_nc_oc=Adm4PBGbVl2wZh_Tnb4Vrpi-up_LSVc9bf4Wr-z1QM8D0IuNydBBZduh2cbkVq4qpRE&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=qVcCnY0u2mhLcAq5pcA6iw&oh=00_AftxiIzpnmuqCkPtZlN4tw-bzKWlgGINYyrqgdc21hUYpg&oe=698A9C3F', 
    videoImg: '/stories-thumbnail-6.jpg', 
    videoSrc: '/stories-video-6.mp4', 
    time: '1d' 
  },
];

const STORY_DURATION = 5000;

const Community = () => {
  return (
    <section className={styles.communitySection}>
      <div className={styles.container}>
        <h2>Moments with Stella</h2>
        <h3>Shared by our community from around the world.</h3>
        <div className={styles.storiesContainer}>
          <div className={styles.storiesWrapper}>
            {/* MAIN STORY */}
            <div className={styles.mainStory}>
              <video autoPlay muted className={styles.storyVideo}>
                <source src="/stories-video-5.mp4" type="video/mp4" />
              </video>
            </div>
            {/* MAIN STORY */}

            {/* LEFT STORY */}
            <div className={styles.leftStory}>
              <div className={styles.leftStoryContainer}>
                <video autoPlay muted className={styles.storyVideo}>
                  <source src="/stories-video-4.mp4" type="video/mp4" />
                </video>
                <div className={styles.storyOverlay}></div>
              </div>
            </div>
            {/* LEFT STORY */}

            {/* RIGHT STORY */}
            <div className={styles.rightStory}>
              <div className={styles.rightStoryContainer}>
                <video autoPlay muted className={styles.storyVideo}>
                  <source src="/stories-video-3.mp4" type="video/mp4" />
                </video>
                <div className={styles.storyOverlay}></div>
              </div>
            </div>
            {/* RIGHT STORY */}

            {/* LEFT ARROW */}
            <div className={styles.leftArrow}>
              <ChevronLeft size={24} color="#C5A059" />
            </div>
            {/* LEFT ARROW */}

            {/* RIGHT ARROW */}
            <div className={styles.rightArrow}>
              <ChevronRight size={24} color="#C5A059" />
            </div>
            {/* RIGHT ARROW */}
          </div>
        </div>

        <div className={styles.storiesFooter}>
          <Instagram size={32} color="#1B3022" />
          <p>Follow us on Instagram @stellacafe</p>
        </div>
      </div>
    </section>
  );
};

export default Community;
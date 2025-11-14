'use client'
// import Image from "next/image";
import { InteractiveElement } from '@/app/components/InteractiveElement'; 
import { animate, spring } from 'animejs';
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [navHeight, setNavHeight] = useState(0)

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timeouts = useRef<NodeJS.Timeout[]>([]);
  const videos = ['blink.webm', 'move.webm', 'smile.webm'];
  const [currentIndex, setCurrentIndex] = useState(0); // Mulai dari index 0

  useEffect(() => {
    // Clear any existing timeouts before starting a new cycle
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    // Pause all videos first
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
        video.style.opacity = '0';
        video.style.zIndex = '1'; // Low z-index for inactive
      }
    });

    // Activate the current video
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.style.opacity = '1';
      currentVideo.style.zIndex = '10'; // High z-index for active
      const playPromise = currentVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => console.error('Autoplay failed:', e));
      }
    }

    // Timer for video play duration (5 seconds)
    const playDuration = 5000; // 5 seconds
    const timeout1 = setTimeout(() => {
      // Freeze: pause the current video to hold the last frame
      const freezeVideo = videoRefs.current[currentIndex];
      if (freezeVideo) {
        freezeVideo.pause();
      }

      // Freeze for random delay (2-5 seconds)
      const freezeDelay = 2000 + Math.random() * 3000; // 2-5 seconds
      const timeout2 = setTimeout(() => {
        // Pick new random different video
        let randomIndex = Math.floor(Math.random() * videos.length);
        while (randomIndex === currentIndex) {
          randomIndex = Math.floor(Math.random() * videos.length);
        }
        console.log(`Switching to: /animated/${videos[randomIndex]}`);
        setCurrentIndex(randomIndex);
      }, freezeDelay);
      timeouts.current.push(timeout2);
    }, playDuration);
    timeouts.current.push(timeout1);

    // Cleanup all timeouts on unmount or re-run
    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, [currentIndex]) // Depend on currentIndex to re-run and loop the cycle

  // Initial setup: preload all videos on mount
  useEffect(() => {
    // Preload all videos by loading them (but don't play yet)
    videos.forEach((_, index) => {
      const video = videoRefs.current[index];
      if (video) {
        video.load(); // Ensures preload="auto" works
      }
    });

    // Start the first video after a short delay for preload
    const initialTimeout = setTimeout(() => {
      setCurrentIndex(0); // Trigger the effect to play the first one
    }, 500); // Give time for preload

    return () => clearTimeout(initialTimeout);
  }, []); // Run once on mount

  function setNavbarHeight() {
    const navbar = document.getElementById('desktop-navbar')
    if (navbar) {
      const height = navbar.offsetHeight
      if (window.innerWidth >= 768) {
        setNavHeight(height)
      } else {
        setNavHeight(0)
      }
    }
    console.log(window.innerWidth)
  }

  useEffect(() => {
    setNavbarHeight(); // Call initially to set height on mount

    animate('#intro-heading', {
      opacity: [0, .9],
      duration: 1000,
      delay: 1200,
      directions: 'alternate',
    });
    animate('#name', {
      opacity: [0, 1],
      duration: 1000,
      delay: 1500,
      directions: 'alternate',
    });
    animate('#intro-paragraph-1', {
      opacity: [0, .8],
      duration: 2000,
      delay: 1800,
      directions: 'alternate',
    });
    animate('#intro-paragraph-2', {
      opacity: [0, .8],
      duration: 3000,
      delay: 3100,
      directions: 'alternate',
    });

    window.addEventListener('resize', setNavbarHeight)

    animate('#blob-1', {
      scale: [.5, 1],
      opacity: [.5, 1],
      ease: spring({
        bounce: 0.4,
        duration: 1000
      }),
      delay: 1000,
      directions: 'alternate',
    });
    animate('#blob-2', {
      scale: [.5, 1],
      opacity: [.5, 1],
      ease: spring({
        bounce: 0.4,
        duration: 2000
      }),
      directions: 'alternate',
    });

    // Cleanup listener
    return () => window.removeEventListener('resize', setNavbarHeight);
  }, []);

  return (
    <section className="relative flex-1 flex flex-col items-center h-[100dvh] overflow-hidden my-bg-radial min-h-[100dvh]"
      style={{ paddingTop: `${navHeight}px` }}
    >
      {/* <div className="text-white w-10/12 md:w-1/3 lg:w-6/12 xl:w-1/2 xl:mb-50 mr-auto p-4 md:px-6 lg:px-8 h-fit">
        <h2 id='intro-heading' className="text-2xl lg:text-4xl font-semibold opacity-0 my-1 md:my-4">Hi, aku <span id="name">Huddin</span>.</h2>
        <div className="flex flex-col text-md lg:text-xl xl:text-2xl leading-relaxed">
          <p id="intro-paragraph-1" className="opacity-0">
            Aku bantu orang bikin <span className="font-tertiary">professional</span> web portofolio yang lagi <span className="font-tertiary">trending</span>
          </p>
          <p id="intro-paragraph-2" className="opacity-0">
            dan bikin mereka terhubung sama agensi marketing <span className="font-tertiary">terpercaya</span>.
          </p>
        </div>
      </div> */}
      <div>
        <InteractiveElement className="absolute -bottom-40 left-1/2 -translate-x-1/2 opacity-0 diaphragmatic" id="blob-2" amountX={10} amountY={10} transition="transform 600ms ease-out">
          <div className="w-120 h-120 bg-radial from-transparent to-white/20 rounded-full"></div>
        </InteractiveElement>
        <InteractiveElement className="absolute -bottom-30 left-1/2 -translate-x-1/2 opacity-0" id="blob-1" amountX={5} amountY={5} transition="transform 300ms ease-out">
          <div className="w-100 h-100 bg-radial from-transparent to-white/20 rounded-full"></div>
        </InteractiveElement>
        <div className="mt-auto z-1 absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
          <div className="video-container relative w-full max-w-[500px] aspect-square mx-auto -mb-6"> {/* Responsive: full width on mobile, max 500px on larger screens */}
            {videos.map((video, index) => (
              <video
                key={index}
                ref={(el) => {videoRefs.current[index] = el}}
                src={`/animated/${video}`}
                muted
                playsInline
                preload="auto" // Preload semua video
                className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out" // Smooth opacity transition, full size
                style={{
                  opacity: 0,
                  zIndex: 1,
                }}
              >
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
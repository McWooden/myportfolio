'use client'
import Image from "next/image";
import { InteractiveElement } from '@/app/components/InteractiveElement'; 
import { animate, spring } from 'animejs';
import { useEffect, useState } from "react";

export default function Hero() {
  const [navHeight, setNavHeight] = useState(0)
  function setNavbarHeight() {
    const navbar = document.getElementById('desktop-navbar')
      // if (navbar) {
      //   const height = navbar.offsetHeight
      //   if (window.innerWidth >= 768) {
      //     setNavHeight(height)
      //   } else {
      //     setNavHeight(0)
      //   }
      // }
      console.log(window.innerWidth)
  }
  useEffect (() => {
      animate('#intro-heading', {
        opacity: [0, .9],
        duration: 1000,
        delay: 1200,
        directions: 'alternate',
      });
      animate('#intro-paragraph-1', {
        opacity: [0, .8],
        duration: 1000,
        delay: 1500,
        directions: 'alternate',
      });
      animate('#intro-paragraph-2', {
        opacity: [0, .8],
        duration: 1000,
        delay: 1800,
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
  }, []);

  return (
    <section className="relative flex-1 flex flex-col items-center h-[100dvh] overflow-hidden my-bg-radial min-h-[100dvh]"
      style={{ paddingTop: `${navHeight}px` }}
    >
      <div className="text-white w-11/12 md:w-1/3 lg:w-5/12 mr-auto p-4 md:px-6 lg:px-8 h-fit xl:w-1/2 xl:mb-50">
        <h2 id='intro-heading' className="text-2xl lg:text-4xl font-semibold opacity-0 my-1 md:my-4">Hi, Aku Huddin</h2>
        <div className="flex flex-col">
            <p id="intro-paragraph-1" className="text-md lg:text-xl xl:text-2xl opacity-0">
              Aku bantu orang bikin professional web portofolio yang lagi trending 
            </p>
            <p id="intro-paragraph-2" className="text-md lg:text-xl xl:text-2xl opacity-0">
              dan bikin mereka terhubung sama agensi marketing terpercaya.
            </p>
        </div>
      </div>
      <div>
        <InteractiveElement className="absolute -bottom-40 left-1/2 -translate-x-1/2 opacity-0" id="blob-2" amountX={10} amountY={10} transition="transform 600ms ease-out">
          <div className="w-120 h-120 bg-radial from-transparent to-white/20 rounded-full"></div>
        </InteractiveElement>
        <InteractiveElement className="absolute -bottom-30 left-1/2 -translate-x-1/2 opacity-0" id="blob-1" amountX={5} amountY={5} transition="transform 300ms ease-out">
          <div className="w-100 h-100 bg-radial from-transparent to-white/20 rounded-full"></div>
        </InteractiveElement>
        <div className="mt-auto z-1 absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
          <Image
            src="/huddin.webp"
            alt="Welcome Image"
            width={400}
            height={400}
            priority
            className="-mb-6 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
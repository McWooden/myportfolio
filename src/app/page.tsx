'use client'
import Image from "next/image";
import { InteractiveElement } from '@/app/components/InteractiveElement'; 
import { animate, spring } from 'animejs';
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
      animate('#blob', {
        scale: [.5, 1],
        opacity: [.5, 1],
        ease: spring({
          bounce: 0.4,
          duration: 1500
        }),
        delay: 800,
        directions: 'alternate',
      });
    return () => {
    };
  }, []);

  return (
    <section className="relative flex-1 flex flex-col items-center justify-center h-[100dvh] overflow-hidden my-bg-radial">
        <div id="blob" className="w-120 h-120 absolute -bottom-40 left-1/2 -translate-x-1/2 bg-radial from-transparent to-white/20 rounded-full opacity-0"></div>

      <div className="mt-auto z-1 absolute bottom-0 left-1/2 -translate-x-1/2" id="huddin-ganteng">
        <InteractiveElement>
          <Image
            src="/huddin.webp"
            alt="Welcome Image"
            width={400}
            height={400}
            priority
            className="-mb-6"
          />
        </InteractiveElement>
      </div>
    </section>
  );
}
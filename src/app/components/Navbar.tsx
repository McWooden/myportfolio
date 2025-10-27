'use client'; // Required for client-side hooks in Next.js 15

import { cn } from '@/lib/utils';
import { animate } from 'animejs';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LuMenu } from "react-icons/lu";

const links = [
  { name: 'Persona', href: '/persona' },
  { name: 'Network', href: '/network' },
  { name: 'Projects', href: '/#projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // animate('#icon-text', {
    //   opacity: [0, 1],
    //   duration: 1000,
    //   directions: 'alternate',
    // });
    animate('.nav-link', {
      opacity: [0, 1],
      duration: 1000,
      delay: 200,
      directions: 'alternate',
    });
    animate('#mobile-navbar', {
      opacity: [0, 1],
      duration: 1000,
      delay: 200,
      directions: 'alternate',
    });
    animate('.nav-contact', {
      opacity: [0, 1],
      duration: 1000,
      delay: 400,
      directions: 'alternate',
    });
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='navbar'>
      <div id='desktop-navbar' className={cn("flex gap-2 justify-between","fixed top-0 left-0 right-0 z-30 transition-colors duration-300 p-4 md:px-6 lg:px-8", 
        scrolled ? 'bg-white shadow-md' : 'bg-transparent text-white')}
        >
        <Link href={'/'} className='flex gap-2 items-center'>
          <h2 id='icon-text' className={cn('text-2xl font-medium font-secondary', scrolled ? 'opacity-100 text-dark-purple' : 'opacity-0 ' )}>Huddin.</h2>
        </Link>
        <div className='hidden md:flex gap-2 font-secondary'>
          <nav className='flex gap-6 px-8 items-center'>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className='nav-link font-medium opacity-0 mx-2 hover:underline'>
                {link.name}
              </Link>
            ))}
          </nav>
          <Link href={'/#contact'} className={cn('nav-contact', 'opacity-0 shadow-xl p-4 px-6 rounded-full border-2 duration-300', scrolled ? 'bg-dark-purple border-dark-purple text-white' : 'border-white hover:bg-white text-white hover:text-just-purple')}>
            Contact Me
          </Link>
        </div>
        {/* Mobile menu */}
        <div id='mobile-navbar' className='flex md:hidden opacity-0'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <LuMenu size={30} stroke={scrolled ? '#300a44': '#ffffff'}/>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black opacity-50 z-40 md:hidden transition-opacity duration-300 ease-in-out",
          isOpen ? 'pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu sidebar */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-60 bg-white z-50 md:hidden transform transition-all duration-300 ease-in-out shadow-lg',
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
      >
        <div className="p-4 h-full flex flex-col">
          <div className='flex gap-2 items-end'>
            <h2 className='text-xl font-bold text-just-purple leading-[.7]'>Menu</h2>
            <div className='bg-just-purple h-1 w-full'></div>
          </div>
          <nav className="flex flex-col font-secondary flex-1 items-center justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 hover:underline block text-just-purple text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={'/#contact'}
              className="shadow-xl p-3 px-6 rounded-full border-2 bg-just-purple border-just-purple text-white duration-300 block text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
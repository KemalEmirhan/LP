'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NAVIGATION_LINKS } from "./constants";

type NavbarProps = {
  showCTA: boolean;
}

export default function Navbar({ showCTA }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 72); // 72px is the height of the navbar
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex justify-between items-center p-4 w-full max-w-7xl z-20 sticky bg-white mx-auto h-[72px] md:rounded-2xl top-0 md:top-4 transition-[max-width] duration-150 ease-out shadow-sm ${
      isScrolled 
        ? 'md:max-w-[800px]'
        : ''
    }`}>
      <Image src="/images/enpal.svg" alt="Enpal" width={100} height={100} />
      <div className="hidden invisible md:visible md:flex gap-2 md:gap-4 text-gray-800 font-semibold">
        {NAVIGATION_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className={`hover:underline decoration-gray-500 transition-colors duration-300`}>{link.label}</Link>
        ))}
      </div>
      {showCTA && (
        <div className="animate-show-up">
          <Link href="#signup-form" className="bg-[#ffd233] text-black cursor-pointer px-6 py-2 rounded-md w-fit text-base font-bold hover:bg-[#ffd233]/90 transition-[colors,scale] duration-150 active:scale-97">Let&apos;s Calculate Your Savings</Link>
        </div>
      )}
    </nav>  
  );
}
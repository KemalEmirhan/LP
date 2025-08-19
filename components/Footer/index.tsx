'use client'

import Link from "next/link";
import React from "react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "./constants";

const Footer = () => {
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLinkClick(href);
    }
  };

  return (
    <footer className="bg-[#0A2035] text-white w-full">
      <div className="w-full h-px bg-gray-300/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="text-xl font-bold">
              Enpal
              <span className="inline-block w-2 h-2 bg-[#ffd233] rounded-full ml-1"></span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                onKeyDown={(e) => handleKeyDown(e, link.href)}
                className="hover:text-[#ffd233] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ffd233] focus:ring-offset-2 focus:ring-offset-[#0A2035] rounded"
                tabIndex={0}
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffd233] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ffd233] focus:ring-offset-2 focus:ring-offset-[#0A2035] rounded p-1"
                tabIndex={0}
                aria-label={`Visit ${social.label}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

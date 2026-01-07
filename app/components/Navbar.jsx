'use client';

import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { HiMail, HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

const navLinks = [
  // { href: "#top", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "My work" },
  { href: "#contact", label: "Contact me" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  
  // Handle scroll effect for dynamic navbar
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  // Track prefers-reduced-motion for scroll behavior
  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setPrefersReducedMotion(event.matches);

    setPrefersReducedMotion(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  // Handle smooth scrolling and close menu
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const behavior = prefersReducedMotion ? 'auto' : 'smooth';
        element.scrollIntoView({ 
          behavior,
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full fixed top-0 left-0 px-4 md:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-primary border-b border-secondary/10' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Logo */}
        <motion.a 
          href="#top" 
          className="relative group"
          onClick={(e) => handleNavClick(e, '#top')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={assets.logo_dark}
            alt="Virul logo"
            width={112}
            height={40}
            className="w-28 cursor-pointer relative z-10 filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <motion.ul 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="hidden md:flex items-center gap-1 lg:gap-2 rounded-2xl px-6 py-2"
        >
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.href}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
            >
              <a
                className="font-inter text-secondary hover:text-accent px-4 py-2 transition-colors duration-300 font-medium"
                href={link.href}
                tabIndex={0}
                aria-label={link.label}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA button */}
        {/* CTA button */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden lg:block ml-6"
        >
          <Button
            href="#contact"
            variant="outline"
            onClick={(e) => handleNavClick(e, '#contact')}
            icon={<HiMail className="w-4 h-4" />}
          >
            Get in Touch
          </Button>
        </motion.div>

        {/* Mobile menu button */}
        <button
          className="block md:hidden ml-3 p-3 rounded-xl text-secondary hover:text-accent transition-colors duration-300"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <HiMenu className="w-8 h-8" />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/80"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Side Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4 
              }}
              className="fixed right-0 top-0 z-[70] w-80 max-w-[85vw] h-full bg-primary border-l border-secondary/20"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex flex-col h-full relative p-6">
                
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-secondary font-sora text-sm uppercase tracking-widest font-medium">
                    Menu
                  </span>
                  <button
                    className="p-2 rounded-lg text-secondary hover:text-accent transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <HiX className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto">
                  <ul className="space-y-4">
                    {navLinks.map((link, idx) => (
                      <motion.li 
                        key={link.href}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                      >
                        <a
                          className="block text-2xl font-inter text-secondary hover:text-accent py-2 transition-colors duration-300"
                          href={link.href}
                          tabIndex={0}
                          aria-label={link.label}
                          onClick={(e) => handleNavClick(e, link.href)}
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div 
                    className="mt-12 pt-8 border-t border-secondary/20"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Button
                      href="#contact"
                      variant="primary"
                      className="w-full flex items-center justify-center"
                      onClick={(e) => handleNavClick(e, '#contact')}
                      icon={<HiMail className="w-5 h-5 relative z-10" />}
                    >
                      <span className="relative z-10">Get in Touch</span>
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

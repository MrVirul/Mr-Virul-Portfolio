'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp, FaHeart, FaCode, FaCoffee, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    href: 'https://github.com/MrVirul',
    icon: <FaGithub size={28} />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/virul-meemana-4597292a0/',
    icon: <FaLinkedin size={28} />,
    label: 'LinkedIn',
  },
  {
    href: 'https://x.com/SoulOfVirul',
    icon: <FaXTwitter size={28} />,
    label: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/virul_on_insta/',
    icon: <FaInstagram size={28} />,
    label: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/virul.methdinu.meemana',
    icon: <FaFacebook size={28} />,
    label: 'Facebook',
  },
];

const footerLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#work' },
  { label: 'Contact', href: '#contact' }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.8 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-secondary border-t border-secondary/20 overflow-hidden">
      <div className="relative z-10">
        <motion.div 
          className="container mx-auto py-16 px-6 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Back to top button */}
          <motion.div 
            className="flex justify-center mb-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={scrollToTop}
              className="group relative p-4 bg-primary border border-accent text-accent rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <FaArrowUp className="h-6 w-6 relative z-10" />
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Logo and tagline */}
            <motion.div 
              className="text-center md:text-left"
              variants={itemVariants}
            >
              <div className="mb-6 group">
                <Image
                  src={assets.logo_dark}
                  alt="MrVirul Logo"
                  width={240}
                  height={60}
                  className="mx-auto md:mx-0 filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-secondary mb-6 max-w-sm leading-relaxed font-sora text-lg">
                Crafting exceptional digital experiences with passion, precision, and cutting-edge technology.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3 text-accent">
                <FaCode className="w-5 h-5" />
                <span className="font-medium font-inter">Full-Stack Developer</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-secondary mb-6 font-inter">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <motion.li 
                    key={link.href}
                    variants={itemVariants}
                  >
                    <a
                      href={link.href}
                      className="text-secondary hover:text-accent transition-colors duration-300 font-sora relative group"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info and social */}
            <motion.div 
              className="text-center md:text-right"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-secondary mb-6 font-inter">
                Let's Connect
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center md:justify-end gap-3 text-secondary">
                  <span className="font-sora">Available for freelance</span>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                </div>
                <p className="text-secondary font-sora">
                  Ready for new opportunities
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center md:justify-end gap-4">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-12 h-12 rounded-full border border-secondary/30 text-secondary hover:text-primary hover:bg-accent hover:border-accent transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div 
            className="relative mb-8"
            variants={itemVariants}
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-secondary/10"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-6 py-2 bg-primary border border-secondary/10 rounded-full">
                <div className="flex items-center gap-2 text-secondary">
                  <FaHeart className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium font-sora">Made with passion</span>
                  <FaCoffee className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center space-y-4"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-secondary text-sm font-sora">
              <p className="flex items-center gap-2">
                &copy; {currentYear} MrVirul. All rights reserved.
              </p>
              <p className="flex items-center gap-2">
                Designed & Built by MrVirul
              </p>
            </div>
            
            <div className="text-xs text-secondary/60 font-sora">
              Built with Next.js, React, Tailwind CSS & Framer Motion
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

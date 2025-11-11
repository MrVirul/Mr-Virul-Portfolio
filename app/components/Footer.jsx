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
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    href: 'https://www.linkedin.com/in/virul-meemana-4597292a0/',
    icon: <FaLinkedin size={28} />,
    label: 'LinkedIn',
    gradient: 'from-blue-600 to-blue-800'
  },
  {
    href: 'https://x.com/SoulOfVirul',
    icon: <FaXTwitter size={28} />,
    label: 'Twitter',
    gradient: 'from-sky-500 to-sky-700'
  },
  {
    href: 'https://www.instagram.com/virul_on_insta/',
    icon: <FaInstagram size={28} />,
    label: 'Instagram',
    gradient: 'from-pink-500 to-orange-500'
  },
  {
    href: 'https://www.facebook.com/virul.methdinu.meemana',
    icon: <FaFacebook size={28} />,
    label: 'Facebook',
    gradient: 'from-blue-600 to-blue-400'
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
    <footer className="relative bg-gradient-to-b from-background to-surface/20 text-text border-t border-white/10 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/10 to-highlight/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

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
              className="group relative p-6 bg-gradient-to-r from-primary to-accent text-background font-bold rounded-full hover:shadow-neon transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <FaArrowUp className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-1" />
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
                  className="mx-auto md:mx-0 transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                />
              </div>
              <p className="text-muted mb-6 max-w-sm leading-relaxed font-sora text-lg">
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
              <h3 className="text-xl font-bold text-white mb-6 font-inter">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link, index) => (
                  <motion.li 
                    key={link.href}
                    variants={itemVariants}
                  >
                    <a
                      href={link.href}
                      className="text-muted hover:text-primary transition-colors duration-300 font-sora relative group"
                    >
                      {link.label}
                      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
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
              <h3 className="text-xl font-bold text-white mb-6 font-inter">
                Let's Connect
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center md:justify-end gap-3 text-muted">
                  <span className="font-sora">Available for freelance</span>
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                </div>
                <p className="text-muted font-sora">
                  Ready for new opportunities
                </p>
              </div>

              {/* Enhanced Social Media Links */}
              <div className="flex justify-center md:justify-end gap-4">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative p-4 bg-gradient-to-br ${link.gradient} rounded-2xl text-white hover:shadow-neon transition-all duration-300 overflow-hidden group`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <div className="relative z-10">
                      {link.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Divider */}
          <motion.div 
            className="relative mb-8"
            variants={itemVariants}
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-6 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-white/10">
                <div className="flex items-center gap-2 text-accent">
                  <FaHeart className="w-4 h-4 animate-pulse" />
                  <span className="text-sm font-medium font-sora">Made with passion</span>
                  <FaCoffee className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Copyright */}
          <motion.div 
            className="text-center space-y-4"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted text-sm font-sora">
              <p className="flex items-center gap-2">
                &copy; {currentYear} MrVirul. All rights reserved.
              </p>
              <p className="flex items-center gap-2">
                Designed & Built with{' '}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <FaHeart className="text-accent w-4 h-4" />
                </motion.span>{' '}
                by MrVirul
              </p>
            </div>
            
            <div className="text-xs text-muted/60 font-sora">
              Built with Next.js, React, Tailwind CSS & Framer Motion
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import { serviceData } from "@/assets/assets";
import React from "react";
import Link from "next/link";
import {
  FaCode,
  FaMobile,
  FaDesktop,
  FaShoppingCart,
  FaSearch,
  FaRocket,
  FaCog,
  FaPalette,
  FaDatabase,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const getServiceIcon = (title) => {
  const iconMap = {
    "Web Development": <FaCode className="w-8 h-8 text-cyan-400" />,
    "Mobile App Development": <FaMobile className="w-8 h-8 text-purple-400" />,
    "UI/UX Design": <FaPalette className="w-8 h-8 text-emerald-400" />,
    "E-commerce Platforms": <FaShoppingCart className="w-8 h-8 text-cyan-300" />,
    "SEO Optimization": <FaSearch className="w-8 h-8 text-purple-300" />,
    "Performance Engineering": <FaRocket className="w-8 h-8 text-emerald-300" />,
    "Backend Integrations": <FaDatabase className="w-8 h-8 text-cyan-400" />,
    "Technical Consulting": <FaCog className="w-8 h-8 text-purple-400" />,
    "Machine Learning": <FaBrain className="w-8 h-8 text-pink-400" />,
  };
  return iconMap[title] || <FaDesktop className="w-8 h-8 text-cyan-400" />;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const Services = () => {
  return (
      <section
          id="services"
          className="relative w-full px-4 md:px-[8%] py-24 scroll-mt-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
          <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
          ></div>
          <div
              className="absolute top-3/4 left-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
          >
            <motion.h4
                className="text-lg font-sora text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wider mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
              WHAT I OFFER
            </motion.h4>
            <motion.h2
                className="text-5xl lg:text-6xl font-inter font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
              Professional Services
            </motion.h2>
            <motion.p
                className="text-xl max-w-3xl mx-auto font-sora text-slate-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
              Delivering cutting-edge digital solutions with modern technologies
              and best practices. Transform your vision into powerful, scalable
              applications that drive business success.
            </motion.p>
          </motion.div>

          <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {serviceData.map(({ title, description, link }, index) => (
                <motion.div
                    key={title}
                    variants={cardVariants}
                    className="group relative"
                >
                  {/* Glass morphism card */}
                  <Link
                    href={link || '/#contact'}
                    className="relative block h-full p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 transition-all duration-700 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                    aria-label={`Read more about ${title}`}
                  >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                    {/* Floating icon container */}
                    <motion.div
                        className="relative mb-6 p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm w-fit group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                    >
                      {getServiceIcon(title)}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 animate-glow transition-opacity duration-300"></div>
                    </motion.div>

                    <h3 className="text-xl font-semibold text-white mb-4 font-inter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                      {title}
                    </h3>

                    <p className="text-slate-300 text-base leading-relaxed mb-8 font-sora">
                      {description}
                    </p>

                    <span className="inline-flex items-center gap-2 text-cyan-300 font-semibold">
                      Explore
                      <FaArrowRight className="w-4 h-4" />
                    </span>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </Link>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default Services;

"use client";

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
  const iconBaseClass = "w-8 h-8 text-accent";
  const iconMap = {
    "Web Development": <FaCode className={iconBaseClass} />,
    "Mobile App Development": <FaMobile className={iconBaseClass} />,
    "UI/UX Design": <FaPalette className={iconBaseClass} />,
    "E-commerce Platforms": <FaShoppingCart className={iconBaseClass} />,
    "SEO Optimization": <FaSearch className={iconBaseClass} />,
    "Performance Engineering": <FaRocket className={iconBaseClass} />,
    "Backend Integrations": <FaDatabase className={iconBaseClass} />,
    "Technical Consulting": <FaCog className={iconBaseClass} />,
    "Machine Learning": <FaBrain className={iconBaseClass} />,
  };
  return iconMap[title] || <FaDesktop className={iconBaseClass} />;
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
      className="relative w-full px-4 md:px-[8%] py-24 scroll-mt-20 bg-primary text-secondary overflow-hidden"
    >
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h4
            className="text-lg font-sora text-accent tracking-wider mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            WHAT I OFFER
          </motion.h4>
          <motion.h2
            className="text-5xl lg:text-6xl font-inter font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Professional Services
          </motion.h2>
          <motion.p
            className="text-xl max-w-3xl mx-auto font-sora text-secondary leading-relaxed"
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
              <Link
                href={link || "/#contact"}
                className="relative block h-full p-8 rounded-3xl bg-primary border border-secondary/20 hover:border-accent transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`Read more about ${title}`}
              >
                {/* Floating icon container */}
                <motion.div
                  className="relative mb-6 p-4 rounded-2xl bg-primary border border-secondary/20 w-fit group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {getServiceIcon(title)}
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-4 font-inter group-hover:text-accent transition-colors duration-300">
                  {title}
                </h3>

                <p className="text-secondary text-base leading-relaxed mb-8 font-sora">
                  {description}
                </p>

                <span className="inline-flex items-center gap-2 text-accent font-semibold">
                  Explore
                  <FaArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

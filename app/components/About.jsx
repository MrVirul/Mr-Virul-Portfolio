'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import {
  HiCode,
  HiAcademicCap,
  HiCollection,
  HiLightningBolt,
  HiSparkles,
  HiTrendingUp
} from 'react-icons/hi';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  // SiNodedotjs,
  // SiMongodb,
  SiSpringboot,
  SiJavascript,
  SiHtml5,
  SiCss3
} from 'react-icons/si';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    { icon: HiCode, title: 'Languages', value: '4+', description: 'Programming languages mastered' },
    { icon: HiAcademicCap, title: 'Education', value: 'BSc SE', description: 'Computer Science background' },
    { icon: HiCollection, title: 'Projects', value: '4+', description: 'Successful projects delivered' },
    { icon: HiTrendingUp, title: 'Experience', value: '1  + Years', description: 'Professional development' }
  ];

  const techStack = [
    { name: 'React', icon: SiReact, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', bg: 'bg-slate-600/10' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-300', bg: 'bg-cyan-300/10' },
    {name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500', bg: 'bg-green-500/10' },
    // { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400', bg: 'bg-green-400/10' },
    // { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-300', bg: 'bg-blue-300/10' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-cyan-300 text-sm font-medium mb-4">
            <HiSparkles className="w-4 h-4" />
            Get to know me
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-800/50 backdrop-blur-md border border-white/10 min-h-[420px]">
                <Image
                  src={assets.user_image}
                  alt="Virul Meemana"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                {/* Floating Tech Icons */}
                <div className="absolute top-6 right-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20"
                  >
                    <SiReact className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Crafting Digital Experiences
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a passionate frontend developer who believes in the power of clean code and
                exceptional user experiences. With a deep understanding of modern web technologies
                and a keen eye for design, I transform complex ideas into intuitive digital solutions.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My journey in web development started with curiosity and has evolved into a commitment
                to creating scalable, accessible, and performant applications that make a real impact.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r from-cyan-400/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-6 h-6 text-cyan-300" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-300 mb-2">
                    {stat.title}
                  </div>
                  <div className="text-xs text-slate-400">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Technology Stack</h3>
            <p className="text-slate-300">Tools and technologies I work with</p>
          </div>

          {/* Tech Grid */}
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {techStack.map((tech, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="group relative"
                >
                  <div className={`p-4 rounded-2xl ${tech.bg} backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center aspect-square w-20 h-20`}>
                    <tech.icon className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-xs text-white/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tech.name}
          </span>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {tech.name}
                  </div>
                </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-white/10">
            <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">
              <HiLightningBolt className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Ready to collaborate?</div>
              <div className="text-slate-300 text-sm">Let's build something amazing together</div>
            </div>
            <motion.button
              onClick={() => window.location.href = '#contact'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

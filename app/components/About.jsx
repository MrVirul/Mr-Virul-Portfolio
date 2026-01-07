'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Button from './ui/Button';
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

  const stats = [
    { icon: HiCode, title: 'Languages', value: '4+', description: 'Programming languages mastered' },
    { icon: HiAcademicCap, title: 'Education', value: 'BSc SE', description: 'Computer Science background' },
    { icon: HiCollection, title: 'Projects', value: '4+', description: 'Successful projects delivered' },
    { icon: HiTrendingUp, title: 'Experience', value: '1+ Years', description: 'Professional development' }
  ];

  const techStack = [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 }
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
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary border border-secondary/20 text-accent text-sm font-medium mb-4">
            <HiSparkles className="w-4 h-4" />
            Get to know me
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">
              About Me
            </span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
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
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl bg-primary border border-secondary/20 min-h-[420px]">
                <Image
                  src={assets.user_image}
                  alt="Virul Meemana"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                />

                {/* Floating Tech Icons */}
                <div className="absolute top-6 right-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center border border-accent text-accent"
                  >
                    <SiReact className="w-6 h-6" />
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
              <p className="text-secondary text-lg leading-relaxed">
                I'm a passionate frontend developer who believes in the power of clean code and
                exceptional user experiences. With a deep understanding of modern web technologies
                and a keen eye for design, I transform complex ideas into intuitive digital solutions.
              </p>
              <p className="text-secondary leading-relaxed">
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
                  className="group p-6 rounded-2xl bg-primary border border-secondary/20 hover:border-accent transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-transparent border border-accent/20 text-accent group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-secondary mb-2">
                    {stat.title}
                  </div>
                  <div className="text-xs text-secondary/70">
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
            <p className="text-secondary">Tools and technologies I work with</p>
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
                  <div className="p-4 rounded-2xl bg-primary border border-secondary/20 hover:border-accent transition-all duration-300 flex flex-col items-center justify-center aspect-square w-20 h-20">
                    <tech.icon className="w-8 h-8 text-secondary group-hover:text-accent transition-colors duration-300" />
                    <span className="text-xs text-secondary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.name}
                    </span>
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
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-primary border border-secondary/20">
            <div className="p-3 rounded-full bg-accent text-primary">
              <HiLightningBolt className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Ready to collaborate?</div>
              <div className="text-secondary text-sm">Let's build something amazing together</div>
            </div>
            <Button
              href="#contact"
              variant="outline"
              className="rounded-full"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

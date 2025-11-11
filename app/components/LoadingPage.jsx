'use client';

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const LoadingPage = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
      <div className="relative z-10 text-center w-full max-w-2xl mx-auto px-4 flex flex-col items-center justify-center h-full">
        {/* Avatar Section */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.8 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.6 }}
          className="mb-16"
        >
          {/* Head and Shoulders SVG */}
          <motion.svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            className="mx-auto"
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -10, 0] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }
          >
            {/* Head */}
            <circle cx="150" cy="80" r="60" fill="#06b6d4" stroke="#0891b2" strokeWidth="2.5" />
            
            {/* Highlight on head */}
            <ellipse cx="130" cy="55" rx="16" ry="20" fill="#22d3ee" opacity="0.9" />
            
            {/* Shoulders outline */}
            <ellipse cx="150" cy="200" rx="85" ry="32" fill="none" stroke="#0891b2" strokeWidth="2.5" />
            
            {/* Shoulders filled */}
            <ellipse cx="150" cy="205" rx="80" ry="28" fill="#06b6d4" />
          </motion.svg>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          className="w-72 h-2.5 bg-slate-700 rounded-full overflow-hidden mb-6 border border-slate-600"
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={prefersReducedMotion ? undefined : { delay: 0.2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 rounded-full"
            initial={prefersReducedMotion ? undefined : { width: "0%" }}
            animate={
              prefersReducedMotion
                ? { width: "100%" }
                : { width: "100%" }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 2, ease: "easeInOut", repeat: Infinity }
            }
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-cyan-400 font-semibold text-lg tracking-wide"
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={prefersReducedMotion ? undefined : { delay: 0.4 }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingPage;

"use client";

import React, { useEffect, useState } from "react";
import {
    HiArrowRight,
    HiDownload,
    HiCode,
    HiLightningBolt,
    HiSparkles,
} from "react-icons/hi";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) return;

        let frameId = null;

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            if (frameId) cancelAnimationFrame(frameId);

            frameId = requestAnimationFrame(() => {
                setMousePosition({ x: clientX, y: clientY });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, [prefersReducedMotion]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay, duration: 0.6, ease: "easeOut" },
        }),
    };

    const animationProps = (delay = 0) =>
        prefersReducedMotion
            ? { initial: false, animate: false }
            : {
                variants: fadeInUp,
                custom: delay,
                initial: "hidden",
                animate: "visible",
            };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            {/* Mouse Glow */}
            {!prefersReducedMotion && (
                <div
                    className="fixed w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-30"
                    style={{
                        left: mousePosition.x - 144,
                        top: mousePosition.y - 144,
                        background:
                            "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
                    }}
                />
            )}

            <div className="relative z-10 max-w-7xl w-full px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* LEFT TEXT SECTION */}
                <div className="text-center lg:text-left max-w-xl">
                    <motion.span
                        {...animationProps()}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-sm font-medium"
                    >
                        <HiSparkles className="w-4 h-4" /> Available for Projects
                    </motion.span>

                    {/* HEADING (FIXED 2 LINES) */}
                    <motion.h1
                        {...animationProps(0.2)}
                        className="mt-4 text-4xl md:text-6xl font-bold leading-snug"
                    >
                        <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                            Undergraduate
                        </span>

                        <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                            Game Developer
                        </span>
                    </motion.h1>

                    <motion.p
                        {...animationProps(0.4)}
                        className="mt-6 text-lg text-slate-300 leading-relaxed"
                    >
                        Crafting immersive, high-performance gaming experiences through{" "}
                        <span className="text-cyan-300 font-medium">creative gameplay</span>
                        ,{" "}
                        <span className="text-purple-300 font-medium">creative design</span>
                        , and{" "}
                        <span className="text-emerald-300 font-medium">
                            cutting-edge technology
                        </span>
                        .
                    </motion.p>

                    {/* SKILLS */}
                    <motion.div
                        {...animationProps(0.6)}
                        className="flex flex-wrap gap-3 mt-6"
                    >
                        {[
                            { icon: HiCode, label: "Clean Code" },
                            { icon: HiLightningBolt, label: "Performance" },
                            { icon: HiSparkles, label: "Innovation" },
                        ].map((skill, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
                            >
                                <skill.icon className="w-4 h-4 text-cyan-300" />
                                <span className="text-sm text-white">{skill.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA BUTTONS */}
                    <motion.div
                        {...animationProps(0.8)}
                        className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/30 transition"
                        >
                            Let’s Connect <HiArrowRight className="inline-block ml-2" />
                        </a>
                        <a
                            href="/Virul Meemana.pdf"
                            download
                            className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition"
                        >
                            Download Resume <HiDownload className="inline-block ml-2" />
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    {...animationProps(1)}
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-lg shadow-cyan-500/10 hover:rotate-3 transition-transform duration-500"
                >
                    <Image
                        src={assets.profile_img}
                        alt="Virul Meemana"
                        fill
                        sizes="(min-width: 1024px) 30vw, 60vw"
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 mix-blend-overlay" />
                </motion.div>
            </div>
        </section>
    );
};

export default Header;

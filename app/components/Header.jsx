"use client";

import React, { } from "react";
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
import Button from "./ui/Button";

const Header = () => {
    const prefersReducedMotion = useReducedMotion();

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
        <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
            <div className="relative z-10 max-w-7xl w-full px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* LEFT TEXT SECTION */}
                <div className="text-center lg:text-left max-w-xl">
                    <motion.span
                        {...animationProps()}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary border border-accent text-accent text-sm font-medium"
                    >
                        <HiSparkles className="w-4 h-4" /> Available for Projects
                    </motion.span>

                    {/* HEADING */}
                    <motion.h1
                        {...animationProps(0.2)}
                        className="mt-4 text-4xl md:text-6xl font-bold leading-snug text-white"
                    >
                        <span className="block text-white">
                            Undergraduate
                        </span>

                        <span className="block text-accent">
                            Game Developer
                        </span>
                    </motion.h1>

                    <motion.p
                        {...animationProps(0.4)}
                        className="mt-6 text-lg text-secondary leading-relaxed"
                    >
                        Crafting immersive, high-performance gaming experiences through{" "}
                        <span className="text-accent font-medium">creative gameplay</span>
                        ,{" "}
                        <span className="text-accent font-medium">creative design</span>
                        , and{" "}
                        <span className="text-accent font-medium">
                            cutting-edge technology
                        </span>
                        .
                    </motion.p>

                    {/* SKILLS */}
                    <motion.div
                        {...animationProps(0.6)}
                        className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start"
                    >
                        {[
                            { icon: HiCode, label: "Clean Code" },
                            { icon: HiLightningBolt, label: "Performance" },
                            { icon: HiSparkles, label: "Innovation" },
                        ].map((skill, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary border border-secondary/20 hover:border-accent transition-colors duration-300"
                            >
                                <skill.icon className="w-4 h-4 text-accent" />
                                <span className="text-sm text-secondary">{skill.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA BUTTONS */}
                    <motion.div
                        {...animationProps(0.8)}
                        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Button
                            href="#contact"
                            variant="primary"
                            icon={<HiArrowRight className="inline-block" />}
                        >
                            Let’s Connect
                        </Button>
                        <Button
                            href="/Virul Meemana.pdf"
                            variant="outline"
                            download
                            icon={<HiDownload className="inline-block" />}
                        >
                            Download Resume
                        </Button>
                    </motion.div>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    {...animationProps(1)}
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary/20 shadow-none hover:border-accent transition-colors duration-500"
                >
                    <Image
                        src={assets.profile_img}
                        alt="Virul Meemana"
                        fill
                        sizes="(min-width: 1024px) 30vw, 60vw"
                        priority
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Header;

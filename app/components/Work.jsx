'use client';

import { assets, workData } from "@/assets/assets";
import React from "react";
import { FaArrowRight, FaCode, FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const resolveProjectImage = (project, index) => {
    if (project.bgImage) {
        return project.bgImage;
    }

    if (project.image && assets[project.image]) {
        return assets[project.image];
    }

    const generatedKey = project.title?.toLowerCase().replace(/\s+/g, "_") + "_img";
    if (generatedKey && assets[generatedKey]) {
        return assets[generatedKey];
    }

    if (index === 0 && assets.carcare_img) {
        return assets.carcare_img;
    }

    return assets.blue_image ?? null;
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 45 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 }
    }
};

const ProjectCard = ({ project, index }) => {
    const [imageError, setImageError] = React.useState(false);
    const backgroundImage = React.useMemo(() => resolveProjectImage(project, index), [index, project]);
    const repositoryUrl = project.link || project.github || "https://github.com/mrbhanukab/CarCare";
    const liveUrl = project.live || project.demo || repositoryUrl;
    const hasDedicatedLiveUrl = Boolean(project.live || project.demo);

    React.useEffect(() => {
        setImageError(false);
    }, [backgroundImage]);

    return (
        <motion.div variants={cardVariants} className="group relative">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 transition-all duration-700 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]">
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    {backgroundImage && !imageError ? (
                        <Image
                            src={backgroundImage}
                            alt={project.title || 'Project image'}
                            fill
                            sizes="(min-width: 1024px) 40vw, 100vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            priority={index === 0}
                            onError={() => {
                                console.warn(`Failed to load image: ${project.title}`);
                                setImageError(true);
                            }}
                        />
                    ) : null}

                    <div
                        className={`${backgroundImage && !imageError ? 'hidden' : 'flex'} items-center justify-center h-full text-slate-400 absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900`}
                    >
                        <div className="text-center">
                            <FaCode className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                            <p className="text-lg font-medium text-white">{project.title}</p>
                            <p className="text-sm text-slate-400 mt-2">Preview Coming Soon</p>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>

                    <motion.div
                        className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-400/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-400 text-xs font-medium rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    >
                        ⚡ Production Ready
                    </motion.div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex gap-4">
                            <motion.a
                                href={repositoryUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`View ${project.title} repository`}
                            >
                                <FaGithub className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-400 rounded-full hover:bg-purple-500 hover:text-slate-900 transition-all duration-300"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`Open ${project.title} live demo`}
                            >
                                <FaExternalLinkAlt className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500 font-inter">
                            {project.title}
                        </h3>
                        <div className="flex items-center gap-1 text-emerald-400">
                            <FaStar className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">
                                {project.rating || "4.9"}
                            </span>
                        </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-6 line-clamp-3 text-base font-sora">
                        {project.description}
                    </p>

                    {project.techStack && (
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.techStack.map((tech, techIndex) => (
                                <motion.span
                                    key={`${project.title}-${tech}`}
                                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 text-cyan-300 text-sm rounded-2xl font-medium hover:bg-cyan-500/20 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 font-sora backdrop-blur-sm"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * techIndex, duration: 0.3 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-4">
                        {hasDedicatedLiveUrl && (
                            <motion.a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)] hover:scale-105 transition-all duration-300 font-inter group/btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaExternalLinkAlt className="w-5 h-5" />
                                Live Demo
                                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </motion.a>
                        )}
                        <motion.a
                            href={repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 font-inter"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaCode className="w-5 h-5" />
                            View Code
                        </motion.a>
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
        </motion.div>
    );
};

const Work = () => {
    return (
        <section id="work" className="relative w-full px-4 md:px-[8%] py-24 scroll-mt-20 bg-gradient-to-b from-slate-950 to-slate-900/50 text-slate-100 overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative z-10">
                {/* Enhanced header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.h4
                        className="text-lg font-sora text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-wider mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        MY PORTFOLIO
                    </motion.h4>
                    <motion.h2
                        className="text-5xl lg:text-7xl font-inter font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-xl max-w-4xl mx-auto font-sora text-slate-300 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Explore my latest work showcasing innovative solutions and cutting-edge technologies. Each project represents a unique challenge solved with creativity and technical excellence.
                    </motion.p>
                </motion.div>

                {/* Enhanced project grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {workData.map((project, index) => (
                        <ProjectCard
                            key={project.title ? `${project.title}-${index}` : index}
                            project={project}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* View more projects CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <motion.a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-slate-100 rounded-2xl font-semibold hover:bg-cyan-500/20 hover:border-cyan-400/30 hover:shadow-[0_20px_40px_rgba(6,182,212,0.1)] transition-all duration-300 font-inter"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Want to see more projects?
                        <FaArrowRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Work;

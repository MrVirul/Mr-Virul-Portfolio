'use client';

import { assets, workData } from "@/assets/assets";
import React from "react";
import { FaArrowRight, FaCode, FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";

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
            <div className="relative overflow-hidden rounded-3xl bg-primary border border-secondary/20 hover:border-accent transition-all duration-300">
                <div className="relative h-80 overflow-hidden bg-primary">
                    {backgroundImage && !imageError ? (
                        <Image
                            src={backgroundImage}
                            alt={project.title || 'Project image'}
                            fill
                            sizes="(min-width: 1024px) 40vw, 100vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            priority={index === 0}
                            onError={() => {
                                console.warn(`Failed to load image: ${project.title}`);
                                setImageError(true);
                            }}
                        />
                    ) : null}

                    <div
                        className={`${backgroundImage && !imageError ? 'hidden' : 'flex'} items-center justify-center h-full text-secondary absolute inset-0 bg-primary`}
                    >
                        <div className="text-center">
                            <FaCode className="w-16 h-16 mx-auto mb-4 text-accent" />
                            <p className="text-lg font-medium text-white">{project.title}</p>
                            <p className="text-sm text-secondary mt-2">Preview Coming Soon</p>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

                    <motion.div
                        className="absolute top-4 right-4 px-3 py-1.5 bg-primary border border-accent text-accent text-xs font-medium rounded-full"
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
                                className="p-4 bg-primary border border-secondary text-secondary rounded-full hover:border-accent hover:text-accent transition-all duration-300"
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
                                className="p-4 bg-primary border border-secondary text-secondary rounded-full hover:border-accent hover:text-accent transition-all duration-300"
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
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 font-inter">
                            {project.title}
                        </h3>
                        <div className="flex items-center gap-1 text-accent">
                            <FaStar className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">
                                {project.rating || "4.9"}
                            </span>
                        </div>
                    </div>

                    <p className="text-secondary leading-relaxed mb-6 line-clamp-3 text-base font-sora">
                        {project.description}
                    </p>

                    {project.techStack && (
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.techStack.map((tech, techIndex) => (
                                <motion.span
                                    key={`${project.title}-${tech}`}
                                    className="px-4 py-2 bg-transparent border border-secondary/20 text-secondary text-sm rounded-2xl font-medium hover:border-accent hover:text-accent transition-all duration-300 font-sora"
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
                            <Button
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="primary"
                                icon={<FaExternalLinkAlt className="w-5 h-5" />}
                                className="group/btn"
                            >
                                Live Demo
                                <FaArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </Button>
                        )}
                        <Button
                            href={repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            icon={<FaCode className="w-5 h-5" />}
                        >
                            View Code
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Work = () => {
    return (
        <section id="work" className="relative w-full px-4 md:px-[8%] py-24 scroll-mt-20 bg-primary text-secondary overflow-hidden">
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
                        className="text-lg font-sora text-accent tracking-wider mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        MY PORTFOLIO
                    </motion.h4>
                    <motion.h2
                        className="text-5xl lg:text-7xl font-inter font-bold mb-6 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="text-white">
                            Featured Projects
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-xl max-w-4xl mx-auto font-sora text-secondary leading-relaxed"
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
                    <Button
                        href="#contact"
                        variant="primary"
                        icon={<FaArrowRight className="w-4 h-4" />}
                    >
                        Want to see more projects?
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Work;

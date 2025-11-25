"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Iceland Road Trip",
        subtitle: "Land of Fire & Ice",
        year: "2023",
        src: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2659&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Tokyo Nights",
        subtitle: "Neon Cyberpunk",
        year: "2022",
        src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2574&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Sahara Expedition",
        subtitle: "Endless Dunes",
        year: "2024",
        src: "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2670&auto=format&fit=crop",
    },
];

export default function Projects() {
    return (
        <section className="py-24 px-4 md:px-8 bg-muted/20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                        Selected Projects
                    </h2>
                    <p className="text-secondary text-lg max-w-md">
                        Immersive journeys and visual stories from around the globe.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6">
                                <img
                                    src={project.src}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                                {/* Overlay Button */}
                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowUpRight className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm font-mono text-secondary border border-border px-2 py-1 rounded-full">
                                        {project.year}
                                    </span>
                                </div>
                                <p className="text-secondary text-lg">{project.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

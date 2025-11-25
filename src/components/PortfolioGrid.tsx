"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Icelandic Frost",
        category: "Landscape",
        src: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2659&auto=format&fit=crop",
        height: "h-96",
    },
    {
        id: 2,
        title: "Urban Solitude",
        category: "Street",
        src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop",
        height: "h-64",
    },
    {
        id: 3,
        title: "Desert Winds",
        category: "Nature",
        src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2670&auto=format&fit=crop",
        height: "h-80",
    },
    {
        id: 4,
        title: "Neon Nights",
        category: "City",
        src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2756&auto=format&fit=crop",
        height: "h-72",
    },
    {
        id: 5,
        title: "Mountain Peak",
        category: "Adventure",
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop",
        height: "h-96",
    },
    {
        id: 6,
        title: "Ocean Depths",
        category: "Underwater",
        src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2670&auto=format&fit=crop",
        height: "h-64",
    },
];

export default function PortfolioGrid() {
    return (
        <section className="py-20 px-4 md:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Works</h2>
                    <p className="text-secondary max-w-xl mx-auto">
                        A collection of moments captured across the globe.
                    </p>
                </motion.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
                        >
                            <div className="relative w-full">
                                <img
                                    src={project.src}
                                    alt={project.title}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm text-accent font-medium mb-1">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

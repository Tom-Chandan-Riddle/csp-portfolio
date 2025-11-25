"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const shots = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2940&auto=format&fit=crop",
        alt: "Alpine Lake",
        span: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2786&auto=format&fit=crop",
        alt: "Cinque Terre",
        span: "md:col-span-1 md:row-span-1",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop",
        alt: "Mountain Peak",
        span: "md:col-span-1 md:row-span-1",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2874&auto=format&fit=crop",
        alt: "Foggy Forest",
        span: "md:col-span-1 md:row-span-2",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2940&auto=format&fit=crop",
        alt: "Coastline",
        span: "md:col-span-2 md:row-span-1",
    },
];

export default function BestShots() {
    return (
        <section className="py-24 px-4 md:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                            Best Shots
                        </h2>
                        <p className="text-secondary text-lg max-w-md">
                            A curated selection of my finest moments captured in time.
                        </p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group flex items-center gap-2 text-lg font-medium mt-6 md:mt-0 hover:text-accent transition-colors"
                    >
                        View All Gallery
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
                    {shots.map((shot, index) => (
                        <motion.div
                            key={shot.id}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-2xl ${shot.span}`}
                        >
                            <img
                                src={shot.src}
                                alt={shot.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

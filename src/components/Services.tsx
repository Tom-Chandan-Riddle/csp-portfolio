"use client";

import { motion } from "framer-motion";
import { Camera, Clapperboard, PenTool, ArrowRight } from "lucide-react";

const services = [
    {
        icon: <Camera className="w-8 h-8" />,
        title: "Photography",
        description:
            "Capturing moments that tell a story. Specializing in travel, portrait, and lifestyle photography that brings your vision to life.",
        tags: ["Portraits", "Events", "Travel", "Product"],
    },
    {
        icon: <Clapperboard className="w-8 h-8" />,
        title: "Filmmaking",
        description:
            "Cinematic storytelling for brands and individuals. From concept to final cut, creating visual narratives that resonate.",
        tags: ["Brand Stories", "Travel Films", "Documentaries", "Commercials"],
    },
    {
        icon: <PenTool className="w-8 h-8" />,
        title: "Content Creation",
        description:
            "Strategic content for the digital age. engaging short-form video and social media assets designed to grow your audience.",
        tags: ["Reels/TikTok", "Social Strategy", "UGC", "Editing"],
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Services
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Bringing creative visions to life through lens and light.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-primary/10 w-fit text-primary group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {service.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Camera, MapPin, Globe } from "lucide-react";

export default function About() {
    return (
        <section className="py-20 px-4 md:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2535&auto=format&fit=crop"
                            alt="Photographer Portrait"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-background p-4 rounded-xl shadow-xl hidden md:block">
                        <div className="w-full h-full border border-border rounded-lg flex flex-col items-center justify-center text-center">
                            <span className="text-4xl font-bold text-accent">5+</span>
                            <span className="text-sm text-secondary">Years Experience</span>
                        </div>
                    </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Behind the Lens
                    </h2>
                    <p className="text-lg text-secondary leading-relaxed">
                        I'm a visual storyteller obsessed with light, composition, and the raw beauty of our planet. My journey started with a simple point-and-shoot camera and has evolved into a lifelong pursuit of capturing the unseen moments that define our world.
                    </p>
                    <p className="text-lg text-secondary leading-relaxed">
                        Whether I'm hanging out of a helicopter over Icelandic glaciers or documenting street life in Tokyo, my goal remains the same: to evoke emotion and inspire wanderlust through imagery.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-full bg-accent/10 text-accent">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold">30+</h4>
                                <p className="text-sm text-secondary">Countries</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-full bg-accent/10 text-accent">
                                <Camera className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold">500+</h4>
                                <p className="text-sm text-secondary">Shoots</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

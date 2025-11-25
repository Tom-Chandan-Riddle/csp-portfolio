"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-black">
          <picture>
            <source media="(min-width: 768px)" srcSet="/hero-wide.png" />
            <img
              src="/hero.jpg"
              alt="Photographer with camera"
              className="w-full h-full object-cover opacity-60"
            />
          </picture>
        </div>
        {/* Gradient Overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end items-center pb-24 md:pb-32 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-white/60 to-white/30 backdrop-blur-sm uppercase"
        >
          CHANDAN
          <br />
          SUSHMA SHANKAR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-200 font-light tracking-wide mt-6 max-w-2xl"
        >
          Visual Storyteller & Filmmaker
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8"
        >
          <button className="group relative px-10 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-300">
            View My Work
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-pulse"
      >
        <ArrowDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  );
}

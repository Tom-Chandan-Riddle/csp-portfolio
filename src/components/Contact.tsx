"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-20 px-4 md:px-8 bg-background">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Let's Create Together
                </motion.h2>
                <p className="text-secondary text-lg">
                    Have a project in mind? I'd love to hear from you.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8 bg-muted/20 p-8 rounded-2xl"
                >
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                        <p className="text-secondary mb-6">
                            Available for freelance projects, collaborations, and prints worldwide.
                        </p>
                        <a
                            href="mailto:hello@portfolio.com"
                            className="flex items-center gap-3 text-xl font-medium hover:text-accent transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                            hello@portfolio.com
                        </a>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Follow Me</h4>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="p-3 rounded-full bg-muted hover:bg-accent hover:text-white transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">
                                Subject
                            </label>
                            <input
                                id="subject"
                                type="text"
                                placeholder="Project Enquiry"
                                className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

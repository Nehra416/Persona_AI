"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {

    return (
        <section className="relative mx-auto max-w-6xl px-4 pt-16 md:pt-24">
            <div className="mx-auto max-w-3xl text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
                >
                    Chat with your <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Teacher Personas</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-4 text-pretty text-base text-muted-foreground md:text-lg"
                >
                    Pick a mentor and start a fluent, context-aware conversation powered by AI. Designed with a clean, startup-grade UI.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground"
                >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Instant replies • Witout any delay • Mobile-ready</span>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;

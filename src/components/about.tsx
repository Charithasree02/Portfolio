import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6 md:px-12 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              About Me
            </h2>
            <div className="w-12 h-1 bg-primary mb-6"></div>
          </div>
          
          <div className="md:col-span-8 prose prose-lg dark:prose-invert text-muted-foreground">
            <p className="text-xl leading-relaxed font-medium text-foreground mb-6">
              I am a Computer Science student driven by the intersection of rigorous research and practical software engineering.
            </p>
            <p className="leading-relaxed mb-6">
              My technical journey spans diverse domains — from building full-stack web applications using React and TypeScript, to exploring the frontier of Quantum Computing and Machine Learning. I thrive on complex problems, whether that means developing entanglement-aware feature coupling for QML or creating static program analysis frameworks for fault coalescing.
            </p>
            <p className="leading-relaxed">
              I believe that great software requires both a deep understanding of foundational computer science principles and an eye for clean, modern architecture. When I'm not studying or researching, I'm usually building real-world tools that solve concrete problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

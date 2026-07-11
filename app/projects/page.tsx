"use client";

import { projects } from "@/data/project";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent"
        >
          My Project Showcase
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 dark:text-gray-300 mt-5 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          A curated selection of projects that reflect my passion for{" "}
          <span className="font-semibold text-blue-600">clean architecture</span>,{" "}
          <span className="font-semibold text-blue-600">modern design</span>, and{" "}
          <span className="font-semibold text-blue-600">high-performance development</span>.
          Each project represents my journey of turning complex ideas into elegant, scalable solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-full shadow-md" />
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </motion.div>

      {/* Closing Line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-center text-sm md:text-base text-gray-500 dark:text-gray-400 mt-16 italic"
      >
        “Every project is an opportunity to craft something meaningful built with precision, clarity, and care.”
      </motion.p>
    </main>
  );
}

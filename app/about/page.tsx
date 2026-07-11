"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent text-center"
      >
        About Me
      </motion.h1>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
      >
        <p>
          I’m <span className="font-semibold text-blue-600">Arya Rizal</span>, a{" "}
          <span className="font-semibold text-blue-600">Software Engineer</span>{" "}
          specializing in modern frontend development, with additional experience
          across mobile and full-stack engineering. I build scalable web and
          cross-platform applications using{" "}
          <span className="font-medium">React</span>,{" "}
          <span className="font-medium">Next.js</span>,{" "}
          <span className="font-medium">Flutter</span>,{" "}
          <span className="font-medium">TypeScript</span>, and modern development
          practices.
        </p>

        <p>
          On the frontend, I build clean and responsive web applications using{" "}
          <span className="font-medium">React</span> and{" "}
          <span className="font-medium">Next.js</span>, and design backend systems
          using <span className="font-medium">Node.js</span> with proper architecture,
          deployed on <span className="font-medium">Google Cloud Platform (GCP)</span>{" "}
          with <span className="font-medium">Kubernetes (GKE)</span> for reliability
          and scalability.
        </p>

        <p>
          I also have solid experience developing mobile applications using{" "}
          <span className="font-medium">Flutter</span>, designed with an{" "}
          <span className="font-medium">offline-first approach</span> powered by{" "}
          <span className="font-medium">SQLite</span>, managing over 25 data tables with
          efficient query handling and synchronization systems. My apps are adaptive
          for both iOS and Android, seamlessly integrated with{" "}
          <span className="font-medium">Firebase Cloud Messaging (FCM)</span> and
          modularized using <span className="font-medium">Melos</span> for scalable code
          management.
        </p>

        <p>
          I’m comfortable working across the{" "}
          <span className="font-medium">full software development lifecycle</span> —
          from architecture and API integration to performance optimization and
          deployment — while collaborating closely with{" "}
          <span className="font-medium">product, design, and backend teams</span>{" "}
          to deliver high-quality software.
        </p>
      </motion.div>

      {/* Quotes Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="pt-6 border-t border-gray-200 dark:border-gray-700"
      >
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 italic text-center mb-2">
          “Clean code, clean architecture, and strong performance the foundation of every product I build.”
        </p>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 italic text-center">
          “The only way to go fast is to go well.” —{" "}
          <span className="font-semibold">Robert C. Martin (Uncle Bob)</span>
        </p>
      </motion.div>
    </div>
  );
}

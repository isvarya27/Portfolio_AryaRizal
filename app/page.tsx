"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { getAssetPath } from "@/lib/utils";

export default function HomePage() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 md:px-10 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 text-center">
			{/* Profile Photo */}
			<motion.div
				initial={{ opacity: 0, scale: 0.9, y: 10 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="relative mb-10 md:mb-12"
			>
				<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 blur-2xl opacity-30"></div>
				<Image
					src={getAssetPath("/profile.jpg")}
					alt="Arya Rizal"
					width={220}
					height={220}
					className="rounded-full shadow-xl object-cover relative z-10 border-4 border-white dark:border-gray-800"
					priority
				/>
			</motion.div>

			{/* Name & Bio */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="max-w-md flex flex-col items-center"
			>
				<h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
					Arya Rizal
				</h1>

				<p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
					A{" "}
					<span className="font-semibold text-blue-600">Frontend Engineer</span>{" "}
					&
					<span className="font-semibold text-blue-600">
						{" "}
						Fullstack Developer
					</span>{" "}
					committed to writing clean code, applying clean architecture
					principles, and delivering high-performance web applications with
					elegant user experiences.
				</p>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
					<a
						href={getAssetPath("/Portofolio_AryaRizal_UP.pdf")}
						download
						className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg text-sm md:text-base"
					>
						Download CV
					</a>

					<Link
						href="/projects"
						className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-xl transition-all text-sm md:text-base"
					>
						View Projects
					</Link>
				</div>
			</motion.div>
		</main>
	);
}

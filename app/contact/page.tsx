"use client";

import { Mail, Linkedin, Github, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
	const contactItems = [
		{
			href: "mailto:aryarizal.dev@gmail.com",
			icon: <Mail className="w-8 h-8 text-blue-500 mb-3" />,
			title: "Email",
			text: "aryarizal.dev@gmail.com",
		},
		// {
		//   href: "https://www.linkedin.com/in/isvarya27/",
		//   icon: <Linkedin className="w-8 h-8 text-blue-600 mb-3" />,
		//   title: "LinkedIn",
		//   text: "linkedin.com/in/isvarya27",
		//   external: true,
		// },
		{
			href: "https://github.com/isvarya27",
			icon: (
				<Github className="w-8 h-8 text-gray-700 dark:text-gray-200 mb-3" />
			),
			title: "GitHub",
			text: "github.com/isvarya27",
			note: "Most of my production work lives in private company repositories (GitLab/internal)",
			external: true,
		},
		{
			href: "tel:+6285219505449",
			icon: <Phone className="w-8 h-8 text-green-500 mb-3" />,
			title: "Phone",
			text: "+62 852-1950-5449",
		},
	];

	return (
		<section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
			{/* Title */}
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent"
			>
				Get in Touch
			</motion.h1>

			{/* Subtitle */}
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.8 }}
				className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-12 leading-relaxed"
			>
				Let’s connect! Whether you’re interested in collaboration, discussing a
				project idea, or simply chatting about technology feel free to reach out
				anytime.
			</motion.p>

			{/* Contact Grid */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5, duration: 0.8 }}
				className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg w-full"
			>
				{contactItems.map((item, i) => (
					<Link
						key={i}
						href={item.href}
						target={item.external ? "_blank" : "_self"}
						className="group flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition duration-300 relative overflow-hidden"
					>
						{/* Background gradient hover */}
						<div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 transition duration-300" />

						{item.icon}
						<p className="font-semibold text-gray-900 dark:text-white mb-1">
							{item.title}
						</p>
						<span className="text-gray-600 dark:text-gray-400 text-sm">
							{item.text}
						</span>
						{item.note && (
							<span className="text-gray-400 dark:text-gray-500 text-xs mt-2 leading-snug">
								{item.note}
							</span>
						)}
					</Link>
				))}
			</motion.div>

			{/* Closing Text */}
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8, duration: 1 }}
				className="mt-14 text-sm text-gray-500 dark:text-gray-400 italic"
			>
				“Building meaningful connections, one line of code at a time.”
			</motion.p>
		</section>
	);
}

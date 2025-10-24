// app/contact/page.tsx
"use client";

import { Mail, Linkedin, Github, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Hubungi Saya
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-10">
        Jika kamu tertarik untuk berkolaborasi, berdiskusi proyek, atau sekadar
        ngobrol santai tentang teknologi, jangan ragu untuk menghubungi saya.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg w-full">
        {/* Email */}
        <Link
          href="mailto:isvarya27@gmail.com"
          className="flex flex-col items-center justify-center border rounded-2xl p-6 shadow hover:shadow-lg transition bg-white dark:bg-gray-800"
        >
          <Mail className="w-8 h-8 text-blue-500 mb-2" />
          <p className="font-semibold">Email</p>
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            isvarya27@gmail.com
          </span>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/isvarya27/"
          target="_blank"
          className="flex flex-col items-center justify-center border rounded-2xl p-6 shadow hover:shadow-lg transition bg-white dark:bg-gray-800"
        >
          <Linkedin className="w-8 h-8 text-blue-600 mb-2" />
          <p className="font-semibold">LinkedIn</p>
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            linkedin.com/in/isvarya27
          </span>
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/isvarya27"
          target="_blank"
          className="flex flex-col items-center justify-center border rounded-2xl p-6 shadow hover:shadow-lg transition bg-white dark:bg-gray-800"
        >
          <Github className="w-8 h-8 text-gray-700 dark:text-gray-200 mb-2" />
          <p className="font-semibold">GitHub</p>
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            github.com/isvarya27
          </span>
        </Link>

        {/* Telepon */}
        <Link
          href="tel:+6281234567890"
          className="flex flex-col items-center justify-center border rounded-2xl p-6 shadow hover:shadow-lg transition bg-white dark:bg-gray-800"
        >
          <Phone className="w-8 h-8 text-green-500 mb-2" />
          <p className="font-semibold">Telepon</p>
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            +62 812-3456-7890
          </span>
        </Link>
      </div>
    </section>
  );
}

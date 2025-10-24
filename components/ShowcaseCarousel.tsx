"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ShowcaseCarousel({ images, isMobile }: { images: string[]; isMobile?: boolean }) {
  return (
    <div className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4">
      {images.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="snap-center flex-shrink-0"
        >
          <div
            className={`relative rounded-2xl overflow-hidden shadow-xl ${
              isMobile ? "w-[200px] aspect-[9/19]" : "w-[400px] aspect-video"
            }`}
          >
            <Image
              src={src}
              alt={`Showcase ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

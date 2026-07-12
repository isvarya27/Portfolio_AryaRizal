"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ShowcaseCarousel({ images, isMobile }: { images: string[]; isMobile?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };

    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, images.length]);

  return (
    <>
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
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open showcase image ${i + 1}`}
              className={`group relative block rounded-2xl overflow-hidden shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isMobile ? "w-[200px] aspect-[9/19]" : "w-[300px] aspect-video"
              }`}
            >
              <Image
                src={src}
                alt={`Showcase ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
                  View full image
                </span>
              </span>
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm px-4 py-10"
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close preview"
              className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
                  }}
                  aria-label="Previous image"
                  className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
                  }}
                  aria-label="Next image"
                  className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <motion.img
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              src={images[openIndex]}
              alt={`Showcase ${openIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[85vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
            />

            {images.length > 1 && (
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tabular-nums">
                {openIndex + 1} / {images.length}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

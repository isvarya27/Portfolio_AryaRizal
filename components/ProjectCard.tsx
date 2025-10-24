import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/data/project";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  type: ProjectType;
}

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  type,
}: ProjectCardProps) {
  const isMobile =
    type === ProjectType.MOBILE || type === ProjectType.BOTH;
  const isWeb = type === ProjectType.WEB || type === ProjectType.BOTH;

  return (
    <Link
      href={`/projects/${slug}`}
      className="block bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 dark:border-gray-800"
    >
      {/* Cover */}
      <div className="flex justify-center bg-gray-50 dark:bg-gray-800 p-6">
        {/* ✅ Jika BOTH, tetap gunakan mockup mobile */}
        {isMobile ? (
          <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-xl w-[180px] md:w-[200px] aspect-[9/19] flex items-center justify-center">
            <div className="absolute inset-0 rounded-[2.5rem] border-[5px] border-gray-800 pointer-events-none" />
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-700 rounded-full" />
            <Image
              src={image}
              alt={title}
              width={200}
              height={400}
              className="object-contain rounded-[2rem] w-full h-full"
            />
          </div>
        ) : (
          <div className="relative bg-gray-900 rounded-2xl shadow-xl w-[300px] md:w-[360px] aspect-[16/10] flex items-center justify-center p-2">
            <div className="absolute inset-0 rounded-2xl border-[4px] border-gray-800 pointer-events-none" />
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full" />
            <Image
              src={image}
              alt={title}
              width={400}
              height={250}
              className="object-contain rounded-xl w-full h-full"
            />
          </div>
        )}
      </div>

      {/* Konten */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-2 text-sm">
          {description}
        </p>

        {/* Badge type */}
        <div className="flex gap-2 mt-3">
          {isWeb && (
            <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full">
              Web
            </span>
          )}
          {isMobile && (
            <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
              Mobile
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

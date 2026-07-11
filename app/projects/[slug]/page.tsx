import { projects, ProjectType } from "@/data/project";
import Image from "next/image";
import Link from "next/link";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";

// ✅ Static params so the page pre-renders
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    console.warn("Project not found:", slug);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-2xl font-semibold mb-2">Project not found 😢</h2>
        <Link href="/projects" className="text-blue-600 hover:underline mt-2">
          ← Back to project list
        </Link>
      </div>
    );
  }

  // ✅ If BOTH → treated as MOBILE for display purposes
  const isMobile =
    project.type === ProjectType.MOBILE || project.type === ProjectType.BOTH;
  const isWeb =
    project.type === ProjectType.WEB || project.type === ProjectType.BOTH;

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      {/* Title and Description */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
          {project.description}
        </p>

        {/* Badge Type */}
        <div className="flex justify-center gap-2 mt-4">
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

      {/* ✅ Cover Image */}
      <div className="flex justify-center">
        {isMobile ? (
          <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl w-[250px] md:w-[300px] aspect-[9/19] flex items-center justify-center">
            <div className="absolute inset-0 rounded-[3rem] border-[6px] border-gray-800 pointer-events-none" />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-700 rounded-full" />
            <Image
              src={project.image}
              alt={project.title}
              width={250}
              height={500}
              className="object-contain rounded-[2rem] w-full h-full"
            />
          </div>
        ) : (
          <div className="relative bg-gray-900 rounded-2xl shadow-xl w-full max-w-[800px] aspect-[16/9] flex items-center justify-center p-2">
            <div className="absolute inset-0 rounded-2xl border-[4px] border-gray-800 pointer-events-none" />
            <Image
              src={project.image}
              alt={project.title}
              width={900}
              height={500}
              className="object-contain rounded-xl w-full h-full"
            />
          </div>
        )}
      </div>

      {/* Showcase Carousel */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center">
          Showcase
        </h2>
        
        <ShowcaseCarousel images={project.gallery} isMobile={isMobile} />
      </section>

      {/* Technologies */}
      <div>
        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
          Technologies Used:
        </h2>
        <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-gray-800 dark:text-gray-300 rounded-md text-sm font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Link to GitHub */}
      {/* <div className="text-center pt-6">
        <Link
          href={project.link}
          target="_blank"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          🔗 View Project on GitHub
        </Link>
      </div> */}
    </main>
  );
}

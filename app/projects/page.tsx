import { projects } from "@/data/project";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
        My Project Showcase
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        A collection of impactful projects I’ve built showcasing my skills in
        frontend, backend, and mobile development.
      </p>
      <div className="mt-6 flex justify-center">
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
      </div>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </main>
  );
}

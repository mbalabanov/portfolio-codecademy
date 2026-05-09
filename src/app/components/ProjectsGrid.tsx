import Image from "next/image";

const projects = [
  { id: 1, title: "Project Alpha", category: "Web Design", seed: "alpha77" },
  { id: 2, title: "Project Beta", category: "Development", seed: "beta42" },
  { id: 3, title: "Project Gamma", category: "UI / UX", seed: "gamma15" },
  { id: 4, title: "Project Delta", category: "Branding", seed: "delta88" },
  { id: 5, title: "Project Epsilon", category: "Development", seed: "eps31" },
  { id: 6, title: "Project Zeta", category: "Web Design", seed: "zeta56" },
];

export default function ProjectsGrid() {
  return (
    <section id="work" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 text-center">
          — Selected Works —
        </p>
        <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-video cursor-pointer"
            >
              <Image
                src={`https://picsum.photos/seed/${project.seed}/800/450`}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs tracking-widest uppercase text-gray-300 mb-1">
                  {project.category}
                </p>
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

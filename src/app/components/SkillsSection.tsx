const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "REST APIs", "PostgreSQL", "Prisma"] },
  { category: "Tools", items: ["Git", "Figma", "Vercel", "Docker"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 text-center">
          — What I Work With —
        </p>
        <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl font-bold text-gray-800 mb-5 uppercase tracking-widest">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

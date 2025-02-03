import React from 'react';
import { FileSymlink as Html5, Rss as Css3, FileJson, Server, Palette, LayoutGrid, Figma as FigmaIcon } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: Html5 },
  { name: 'CSS', icon: Css3 },
  { name: 'JavaScript', icon: FileJson },
  { name: 'Node.js', icon: Server },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'React', icon: LayoutGrid },
  { name: 'Figma', icon: FigmaIcon },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                <skill.icon className="w-10 h-10 text-blue-500 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="mt-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
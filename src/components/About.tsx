import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';

const timelineData = [
  {
    year: '2025',
    title: 'Obtive o Certificado do Curso CS50’s Web Programming de Harvard',
    company: 'Havard',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Comecei Minha Graduação em Engenharia de Software',
    company: 'ICEV',
    type: 'education',
  },
  {
    year: '2023',
    title: 'Comecei a Atuar como Freelancer, Criando Soluções de Desenvolvimento Web para Clientes de Diferentes Segmentos.',
    company: '',
    type: 'work',
  },
  {
    year: '2022',
    title: 'Comecei Meus Estudos Com Foco em Desenvolvimento Web',
    company: '',
    type: 'education',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Sobre mim 
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center">
          Tenho me aprimorado na criação de soluções web funcionais e interfaces intuitivas, utilizando tecnologias modernas para entregar resultados alinhados às expectativas dos clientes. Comprometido com o aprendizado contínuo e a aplicação de boas práticas no desenvolvimento de aplicações escaláveis e de qualidade.
          </p>

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-none">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    {item.type === 'work' ? (
                      <Briefcase className="w-6 h-6 text-blue-500" />
                    ) : (
                      <BookOpen className="w-6 h-6 text-blue-500" />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <div className="text-sm text-blue-500 font-semibold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
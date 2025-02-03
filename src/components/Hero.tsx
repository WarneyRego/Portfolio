import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';
import foto from './undraw_hello_ccwj.svg';
import fotoP from './undraw_programmer_raqr.svg';
import fotoPro from './undraw_programming_65t2.svg'
export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Olá, Me Chamo{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Warney Rego
              </span>
            </h1>
            <div className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8">
            <TypeAnimation
                sequence={[
                  'Desenvolvedor FrontEnd',
                  2000,
                  'Desenvolvedor React',
                  2000,
                  'Designer de Interface/UX (UI/UX Designer)',
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Tenho habilidade no desenvolvimento de interfaces intuitivas e aplicações escaláveis, 
            sempre buscando entregar soluções de qualidade e alinhadas às necessidades dos usuários.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com" className="p-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="p-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="p-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={fotoPro}
                alt="Profile"
                className="relative rounded-full   w-500 h-256 lg:w-256 lg:h-256 object-cover mx-auto border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
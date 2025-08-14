
import React from 'react';
import { Button } from '@/components/ui/button';
import ShimmeringBackground from './ShimmeringBackground';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Componente de Background Animado */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ShimmeringBackground />
      </div>

      {/* Conteúdo da Hero Section */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center p-5">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Inovação e <span className="text-white/90">Tecnologia</span> para seu Negócio
        </h1>
        <p className="max-w-2xl mx-auto text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
          Transformamos ideias em soluções digitais inteligentes. 
          Sistemas de gestão, sites profissionais e emissores de notas fiscais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={() => scrollToSection('servicos')} 
            size="lg" 
            className="bg-white text-gray-900 hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Nossos Serviços
          </Button>
          <Button 
            onClick={() => scrollToSection('contato')} 
            variant="outline" 
            size="lg" 
            className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

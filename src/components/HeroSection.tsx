
import React from 'react';
import { Button } from '@/components/ui/button';
import CircuitBackground from './CircuitBackground';

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
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: '#222222' }}>
      {/* Componente de Background Animado */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <CircuitBackground />
      </div>

      {/* Conteúdo da Hero Section */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6 py-12">
        {/* Container principal com fundo escurecido */}
        <div className="relative max-w-4xl mx-auto">
          {/* Fundo preto esmaecido atrás do conteúdo */}
          <div className="absolute inset-0 bg-black/50 rounded-3xl backdrop-blur-sm"></div>
          
          {/* Conteúdo com z-index maior para ficar acima do overlay */}
          <div className="relative z-10 px-8 py-12 lg:px-16 lg:py-16">
            {/* Título principal */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Inovação e <span className="text-red-400">Tecnologia</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl text-white/90 font-medium">
                para seu Negócio
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Transformamos ideias em soluções digitais inteligentes.
              <br />
              <span className="text-white/80">Sistemas de gestão, sites profissionais e emissores de notas fiscais.</span>
            </p>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('servicos')} 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 border-red-600"
              >
                Nossos Serviços
              </Button>
              <Button 
                onClick={() => scrollToSection('contato')} 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl"
              >
                Fale Conosco
              </Button>
            </div>

            {/* Texto adicional de chamada */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-white/70 font-medium">
                Soluções personalizadas para impulsionar seu crescimento digital
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

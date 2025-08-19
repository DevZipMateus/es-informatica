
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
    <div className="relative w-full h-screen overflow-hidden" style={{
      backgroundColor: '#cccccc'
    }}>
      {/* Componente de Background Animado */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <CircuitBackground />
      </div>

      {/* Conteúdo da Hero Section */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 py-8 w-full overflow-hidden">
        {/* Container principal com fundo escurecido */}
        <div className="relative max-w-4xl mx-auto w-full">
          {/* Fundo preto esmaecido atrás do conteúdo para manter a legibilidade */}
          <div className="absolute inset-0 bg-black/70 rounded-2xl lg:rounded-3xl backdrop-blur-sm"></div>
          
          {/* Conteúdo com z-index maior para ficar acima do overlay */}
          <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 lg:px-16 lg:py-16 text-white w-full">
            {/* Título principal */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight break-words">
              Inovação e <span className="text-red-400">Tecnologia</span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white/90 font-medium">
                para seu Negócio
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg lg:text-2xl mb-6 lg:mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto break-words">
              Transformamos ideias em soluções digitais inteligentes.
              <br />
              <span className="text-white/80">Sistemas de gestão, sites profissionais e emissores de notas fiscais.</span>
            </p>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
              <Button 
                onClick={() => scrollToSection('servicos')} 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 border-red-600 w-full sm:w-auto max-w-xs"
              >
                Nossos Serviços
              </Button>
              <Button 
                onClick={() => scrollToSection('contato')} 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/80 hover:bg-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl text-gray-950 w-full sm:w-auto max-w-xs"
              >
                Fale Conosco
              </Button>
            </div>

            {/* Texto adicional de chamada */}
            <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-white/20">
              <p className="text-sm text-white/70 font-medium break-words">
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

import React from 'react';
import { ArrowRight, Code, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Inovação e <span className="text-white/90">Tecnologia</span> para seu Negócio
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Transformamos ideias em soluções digitais inteligentes. 
              Sistemas de gestão, sites profissionais e emissores de notas fiscais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button onClick={() => scrollToSection('servicos')} size="lg" className="bg-white text-brand-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={() => scrollToSection('contato')} variant="outline" size="lg" className="border-2 border-white hover:bg-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-zinc-950">
                Fale Conosco
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">12+</div>
                <div className="text-sm text-white/80">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-white/80">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/80">Dedicação</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="lg:flex justify-center items-center animate-slide-in">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 glass-effect hover-lift">
                  <Code className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-white font-semibold mb-2">Sistemas de Gestão</h3>
                  <p className="text-white/80 text-sm">Soluções personalizadas para seu negócio</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 glass-effect hover-lift mt-8">
                  <Globe className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-white font-semibold mb-2">Sites & E-commerce</h3>
                  <p className="text-white/80 text-sm">Presença digital profissional</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 glass-effect hover-lift -mt-4">
                  <Smartphone className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-white font-semibold mb-2">Emissor de NFe</h3>
                  <p className="text-white/80 text-sm">Conformidade fiscal garantida</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 glass-effect hover-lift mt-4">
                  <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">ES</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Suporte 24/7</h3>
                  <p className="text-white/80 text-sm">Atendimento especializado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
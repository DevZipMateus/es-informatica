
import React from 'react';
import { CheckCircle, MessageSquare, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PlansSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const planFeatures = [
    'Análise completa das necessidades',
    'Desenvolvimento personalizado',
    'Treinamento da equipe',
    'Suporte técnico especializado',
    'Atualizações e melhorias',
    'Backup e segurança',
    'Relatórios personalizados',
    'Integração com outros sistemas'
  ];

  return (
    <section id="planos" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Planos Personalizados
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Cada negócio é único. Por isso, criamos soluções sob medida para suas necessidades específicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 glass-effect">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 rounded-full p-3 mr-4">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Orçamento Personalizado</h3>
                  <p className="text-white/80">Valores justos para cada projeto</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-8 leading-relaxed">
                Nossos serviços são voltados às necessidades específicas de cada cliente. 
                Não trabalhamos com preços fixos, pois acreditamos que cada projeto merece 
                uma abordagem única e personalizada.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  O que está incluído:
                </h4>
                {planFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Nosso Processo:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-white text-brand-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                    <span className="text-white/80 text-sm">Contato inicial para entender suas necessidades</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-brand-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                    <span className="text-white/80 text-sm">Apresentação detalhada da solução proposta</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-brand-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                    <span className="text-white/80 text-sm">Negociação transparente de valores e prazos</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-brand-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                    <span className="text-white/80 text-sm">Desenvolvimento e implementação da solução</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => scrollToSection('contato')}
                size="lg"
                className="w-full bg-white text-brand-primary hover:bg-white/90 py-4 rounded-xl font-semibold text-lg"
              >
                Solicitar Orçamento Gratuito
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="animate-fade-in">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 text-white glass-effect">
              <div className="text-center mb-8">
                <MessageSquare className="h-16 w-16 mx-auto mb-4 text-white/80" />
                <h3 className="text-3xl font-bold mb-4">Vamos Conversar?</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Entre em contato conosco para discutir seu projeto. 
                  Oferecemos consultoria gratuita para entender suas necessidades.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">📞 Atendimento Rápido</h4>
                  <p className="text-white/80 text-sm">
                    Resposta em até 2 horas durante horário comercial
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">💡 Consultoria Gratuita</h4>
                  <p className="text-white/80 text-sm">
                    Análise inicial sem custo para seu projeto
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">🤝 Relacionamento Duradouro</h4>
                  <p className="text-white/80 text-sm">
                    Suporte contínuo e melhorias constantes
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center justify-center space-x-6">
                  <Button
                    onClick={() => window.open('https://wa.me/5541996667472', '_blank')}
                    className="bg-white text-brand-primary hover:bg-white/90 px-6 py-3 rounded-lg font-semibold"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    onClick={() => window.open('mailto:edinho@esinformatica.com.br', '_blank')}
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-6 py-3 rounded-lg font-semibold"
                  >
                    E-mail
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;

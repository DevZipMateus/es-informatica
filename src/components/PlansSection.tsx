
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
    <section id="planos" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Planos Personalizados
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Cada negócio é único. Por isso, criamos soluções sob medida para suas necessidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Content */}
          <div className="animate-slide-in order-2 lg:order-1">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <div className="bg-red-600 rounded-full p-3 mr-0 sm:mr-4 mb-4 sm:mb-0 w-fit">
                  <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Orçamento Personalizado</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Valores justos para cada projeto</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Nossos serviços são voltados às necessidades específicas de cada cliente. 
                Não trabalhamos com preços fixos, pois acreditamos que cada projeto merece 
                uma abordagem única e personalizada.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  O que está incluído:
                </h4>
                {planFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                  Nosso Processo:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</div>
                    <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">Contato inicial para entender suas necessidades</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</div>
                    <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">Apresentação detalhada da solução proposta</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</div>
                    <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">Negociação transparente de valores e prazos</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</div>
                    <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">Desenvolvimento e implementação da solução</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => scrollToSection('contato')}
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg"
              >
                Solicitar Orçamento Gratuito
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="animate-fade-in order-1 lg:order-2">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 lg:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <MessageSquare className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-gray-600" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Vamos Conversar?</h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Entre em contato conosco para discutir seu projeto. 
                  Oferecemos consultoria gratuita para entender suas necessidades.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-gray-900 text-sm sm:text-base">📞 Atendimento Rápido</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Resposta em até 2 horas durante horário comercial
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-gray-900 text-sm sm:text-base">💡 Consultoria Gratuita</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Análise inicial sem custo para seu projeto
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-gray-900 text-sm sm:text-base">🤝 Relacionamento Duradouro</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Suporte contínuo e melhorias constantes
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
                  <Button
                    onClick={() => window.open('https://wa.me/5541996667472', '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base w-full sm:w-auto"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    onClick={() => window.open('mailto:edinho@esinformatica.com.br', '_blank')}
                    variant="outline"
                    className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base w-full sm:w-auto"
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

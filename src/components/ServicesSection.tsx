
import React from 'react';
import { Code2, Globe, FileText, Headphones, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Sistema de Gestão',
      description: 'Soluções completas e personalizadas para gestão empresarial, otimizando processos e aumentando a produtividade do seu negócio.',
      features: ['ERP Personalizado', 'Controle de Estoque', 'Gestão Financeira', 'Relatórios Avançados'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Globe,
      title: 'Criação de Sites e Loja Virtual',
      description: 'Desenvolvimento de sites profissionais e e-commerce responsivos, com foco na experiência do usuário e conversão.',
      features: ['Design Responsivo', 'E-commerce Completo', 'SEO Otimizado', 'Painel Administrativo'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: FileText,
      title: 'Emissor de Notas Fiscais',
      description: 'Sistema completo para emissão de notas fiscais eletrônicas, garantindo conformidade fiscal e agilidade nos processos.',
      features: ['NFe e NFCe', 'Integração SEFAZ', 'Backup Automático', 'Suporte Técnico'],
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-secondary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-brand-accent max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções tecnológicas completas e personalizadas para 
            atender às necessidades específicas do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-lift animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="h-12 w-12" />
                  <div className="bg-white/20 rounded-full p-2">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <p className="text-brand-accent mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                      <span className="text-brand-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  onClick={() => scrollToSection('contato')}
                  variant="outline"
                  className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-200"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 lg:p-12 text-white text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 rounded-full p-4">
              <Headphones className="h-12 w-12" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">Suporte Técnico Especializado</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe está sempre pronta para ajudar. Oferecemos suporte técnico 
            completo para todas as nossas soluções.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('https://wa.me/5541996667472', '_blank')}
              size="lg"
              className="bg-white text-brand-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold"
            >
              WhatsApp: (41) 99666-7472
            </Button>
            <Button
              onClick={() => window.open('mailto:edinho@esinformatica.com.br', '_blank')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-xl font-semibold"
            >
              E-mail: edinho@esinformatica.com.br
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

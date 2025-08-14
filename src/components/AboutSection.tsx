
import React from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const milestones = [
    {
      year: '2012',
      title: 'Fundação',
      description: 'Fundada por profissionais qualificados com visão de tornar a tecnologia acessível'
    },
    {
      year: '2013-2015',
      title: 'Primeiros Clientes',
      description: 'Empresas locais começaram a confiar em nossas soluções personalizadas'
    },
    {
      year: '2016-2019',
      title: 'Inovação',
      description: 'Desenvolvimento de soluções de software para necessidades específicas'
    },
    {
      year: '2020-2024',
      title: 'Crescimento',
      description: 'Referência em tecnologia da informação com crescimento acelerado'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Comprometidos com a busca contínua por novas soluções e tecnologias que agreguem valor'
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Priorizamos a qualidade em todos os nossos serviços, garantindo excelência e confiabilidade'
    },
    {
      icon: Users,
      title: 'Respeito ao Cliente',
      description: 'Valorizamos a relação com nossos clientes, oferecendo soluções personalizadas'
    },
    {
      icon: Target,
      title: 'Integridade',
      description: 'Agimos com transparência em todas as nossas ações, tratando clientes com respeito'
    }
  ];

  return (
    <section id="sobre" className="py-20 section-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-secondary mb-6">
            Nossa História
          </h2>
          <p className="text-xl text-brand-accent max-w-3xl mx-auto leading-relaxed">
            Desde 2012, transformamos a visão de tornar a tecnologia acessível em realidade, 
            criando soluções inovadoras que melhoram a vida das pessoas.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold text-brand-secondary mb-6">
              Missão & Visão
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm hover-lift">
                <h4 className="text-lg font-semibold text-brand-primary mb-3">Nossa Missão</h4>
                <p className="text-brand-accent leading-relaxed">
                  Fornecer soluções inovadoras e personalizadas em tecnologia da informação, 
                  visando atender às necessidades específicas de nossos clientes e parceiros. 
                  Buscamos melhorar a eficiência, produtividade e competitividade.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover-lift">
                <h4 className="text-lg font-semibold text-brand-primary mb-3">Nossa Visão</h4>
                <p className="text-brand-accent leading-relaxed">
                  Continuar inovando e melhorando nossas soluções para atender às necessidades 
                  em constante evolução. Queremos ser líderes em nosso setor, conhecidos por 
                  nossa expertise e compromisso com a excelência.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Marcos Importantes</h4>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-lg px-3 py-1 text-sm font-bold min-w-fit">
                      {milestone.year}
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">{milestone.title}</h5>
                      <p className="text-white/80 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-brand-secondary text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover-lift">
                <div className="bg-brand-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-brand-primary" />
                </div>
                <h4 className="text-lg font-semibold text-brand-secondary mb-3">
                  {value.title}
                </h4>
                <p className="text-brand-accent text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

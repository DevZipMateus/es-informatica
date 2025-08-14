
import React, { useState } from 'react';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar um orçamento:

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone || 'Não informado'}
*Serviço:* ${formData.service || 'Não especificado'}

*Mensagem:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/5541996667472?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecionando para o WhatsApp...');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(41) 99666-7472',
      action: () => window.open('https://wa.me/5541996667472', '_blank'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'edinho@esinformatica.com.br',
      action: () => window.open('mailto:edinho@esinformatica.com.br', '_blank'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: 'Atendimento Rápido',
      action: () => window.open('https://wa.me/5541996667472', '_blank'),
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="contato" className="py-20 section-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-secondary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-brand-accent max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar suas ideias em realidade? 
            Entre em contato conosco e vamos conversar sobre seu projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-secondary mb-6">
                Solicite seu Orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-secondary mb-2">
                      Nome *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="border-gray-300 focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-secondary mb-2">
                      Telefone
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(41) 99999-9999"
                      className="border-gray-300 focus:border-brand-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-secondary mb-2">
                    E-mail *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                    className="border-gray-300 focus:border-brand-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-secondary mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="sistema-gestao">Sistema de Gestão</option>
                    <option value="site-ecommerce">Site / E-commerce</option>
                    <option value="emissor-nfe">Emissor de NFe</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-secondary mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva seu projeto ou necessidade..."
                    rows={4}
                    required
                    className="border-gray-300 focus:border-brand-primary resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-4 rounded-xl font-semibold text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-brand-secondary mb-8">
              Formas de Contato
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  onClick={method.action}
                  className="bg-white rounded-xl p-6 shadow-sm hover-lift cursor-pointer group"
                >
                  <div className="flex items-center">
                    <div className={`bg-gradient-to-r ${method.color} rounded-xl p-4 mr-4 group-hover:scale-110 transition-transform duration-200`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-brand-secondary mb-1">
                        {method.title}
                      </h4>
                      <p className="text-brand-primary font-medium">
                        {method.info}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">
                Atendimento Personalizado
              </h4>
              <p className="text-white/90 mb-6 leading-relaxed">
                Nossa equipe está pronta para entender suas necessidades e 
                oferecer a melhor solução para seu negócio.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Resposta em até 2 horas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Consultoria gratuita</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Orçamento sem compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

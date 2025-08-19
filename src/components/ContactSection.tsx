
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

    // Create email content
    const subject = `Solicitação de Orçamento - ${formData.name}`;
    const body = `Olá! Gostaria de solicitar um orçamento:

Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone || 'Não informado'}
Serviço: ${formData.service || 'Não especificado'}

Mensagem:
${formData.message}

--
Enviado através do site ES Informática`;

    // Create mailto URL
    const mailtoUrl = `mailto:edinho@esinformatica.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mailto
    window.location.href = mailtoUrl;
    
    toast.success('Abrindo seu cliente de email...');
    
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
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Entre em Contato
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Pronto para transformar suas ideias em realidade? 
            Entre em contato conosco e vamos conversar sobre seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in order-2 lg:order-1">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Solicite seu Orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Nome *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Telefone
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(41) 99999-9999"
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    E-mail *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 text-sm sm:text-base"
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
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva seu projeto ou necessidade..."
                    rows={4}
                    required
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 resize-none text-sm sm:text-base"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg"
                >
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Enviar por E-mail
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="animate-fade-in order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
              Formas de Contato
            </h3>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  onClick={method.action}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 hover-lift cursor-pointer group"
                >
                  <div className="flex items-center">
                    <div className={`bg-gradient-to-r ${method.color} rounded-xl p-3 sm:p-4 mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-200`}>
                      <method.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                        {method.title}
                      </h4>
                      <p className="text-gray-700 font-medium text-sm sm:text-base break-all">
                        {method.info}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8">
              <h4 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                Atendimento Personalizado
              </h4>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Nossa equipe está pronta para entender suas necessidades e 
                oferecer a melhor solução para seu negócio.
              </p>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Resposta em até 2 horas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Consultoria gratuita</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Orçamento sem compromisso</span>
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

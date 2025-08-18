
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const LocationSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Av. Damião Botelho de Souza, 522 - Centro',
      subInfo: 'Guaratuba, PR'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '(41) 99666-7472',
      subInfo: 'WhatsApp disponível'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'edinho@esinformatica.com.br',
      subInfo: 'Resposta em até 2 horas'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Segunda à Sexta: 8h às 18h',
      subInfo: 'Sábado: 8h às 12h'
    }
  ];

  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossa Localização
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Estamos estrategicamente localizados no centro de Guaratuba, 
            facilitando o acesso para nossos clientes da região.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Informações de Contato
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 rounded-lg p-3 flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-900 font-medium mb-1">
                        {item.info}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {item.subInfo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Siga-nos nas Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/esguaratuba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-red-600 hover:text-white rounded-lg p-3 transition-colors duration-200 text-gray-700"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/esguaratuba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-red-600 hover:text-white rounded-lg p-3 transition-colors duration-200 text-gray-700"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@esguaratuba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-red-600 hover:text-white rounded-lg p-3 transition-colors duration-200 text-gray-700"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="animate-fade-in">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-[500px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Localização Central
                </h4>
                <p className="text-gray-700 mb-6 max-w-sm">
                  Estamos localizados no centro de Guaratuba, com fácil acesso 
                  e estacionamento disponível.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">
                    Av. Damião Botelho de Souza, 522
                  </p>
                  <p className="text-gray-600">
                    Centro - Guaratuba, PR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

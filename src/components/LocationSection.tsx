
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
    <section id="localizacao" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nossa Localização
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Estamos estrategicamente localizados no centro de Guaratuba, 
            facilitando o acesso para nossos clientes da região.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold text-white mb-8">
              Informações de Contato
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 glass-effect hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-white font-medium mb-1">
                        {item.info}
                      </p>
                      <p className="text-white/70 text-sm">
                        {item.subInfo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-xl text-white glass-effect">
              <h4 className="text-xl font-bold mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/esguaratuba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 rounded-lg p-3 transition-colors duration-200"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/esguaratuba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 rounded-lg p-3 transition-colors duration-200"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987 6.618 0 11.985-5.369 11.985-11.987C23.002 5.367 17.635.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.051-2.349-2.347 0-1.297 1.052-2.349 2.349-2.349 1.296 0 2.347 1.052 2.347 2.349 0 1.296-1.051 2.347-2.347 2.347zm7.718 0c-1.296 0-2.347-1.051-2.347-2.347 0-1.297 1.051-2.349 2.347-2.349 1.297 0 2.348 1.052 2.348 2.349 0 1.296-1.051 2.347-2.348 2.347z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@esguaratuba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 rounded-lg p-3 transition-colors duration-200"
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
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-[500px] flex items-center justify-center glass-effect">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-4">
                  Localização Central
                </h4>
                <p className="text-white/80 mb-6 max-w-sm">
                  Estamos localizados no centro de Guaratuba, com fácil acesso 
                  e estacionamento disponível.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">
                    Av. Damião Botelho de Souza, 522
                  </p>
                  <p className="text-white/80">
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

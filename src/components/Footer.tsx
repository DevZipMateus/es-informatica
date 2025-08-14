
import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'planos', label: 'Planos' },
    { id: 'localizacao', label: 'Localização' },
    { id: 'contato', label: 'Contato' }
  ];

  const services = [
    'Sistema de Gestão',
    'Sites e E-commerce',
    'Emissor de NFe',
    'Suporte Técnico'
  ];

  return (
    <footer className="bg-brand-secondary text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/6233a48f-c2a8-4f2d-81b9-30c66be4ee1f.png" 
              alt="ES INFORMÁTICA"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed mb-6">
              Desde 2012 oferecendo soluções inovadoras em tecnologia da informação. 
              Transformamos ideias em realidade digital.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/esguaratuba/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/esguaratuba/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987 6.618 0 11.985-5.369 11.985-11.987C23.002 5.367 17.635.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.051-2.349-2.347 0-1.297 1.052-2.349 2.349-2.349 1.296 0 2.347 1.052 2.347 2.349 0 1.296-1.051 2.347-2.347 2.347zm7.718 0c-1.296 0-2.347-1.051-2.347-2.347 0-1.297 1.051-2.349 2.347-2.349 1.297 0 2.348 1.052 2.348 2.349 0 1.296-1.051 2.347-2.348 2.347z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@esguaratuba"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">
                    Av. Damião Botelho de Souza, 522<br />
                    Centro - Guaratuba, PR
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/5541996667472" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  (41) 99666-7472
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <a 
                  href="mailto:edinho@esinformatica.com.br"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  edinho@esinformatica.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 ES INFORMÁTICA. Todos os direitos reservados.
            </p>
            <div className="flex items-center text-white/60 text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-brand-primary mx-1" />
              <span>em Guaratuba, PR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

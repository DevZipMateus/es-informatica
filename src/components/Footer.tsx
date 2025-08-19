
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
    <footer className="bg-gray-900 text-white border-t border-gray-800 overflow-x-hidden w-full">
      <div className="container mx-auto px-4 max-w-full">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/6233a48f-c2a8-4f2d-81b9-30c66be4ee1f.png" 
              alt="ES INFORMÁTICA"
              className="h-12 lg:h-16 w-auto mb-4 lg:mb-6 brightness-0 invert max-w-full"
            />
            <p className="text-gray-300 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base break-words">
              Desde 2012 oferecendo soluções inovadoras em tecnologia da informação. 
              Transformamos ideias em realidade digital.
            </p>
            <div className="flex space-x-3 lg:space-x-4">
              <a
                href="https://www.facebook.com/esguaratuba/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 rounded-lg p-2 lg:p-3 transition-colors duration-200 flex-shrink-0"
              >
                <svg className="h-4 w-4 lg:h-5 lg:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/esguaratuba/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 rounded-lg p-2 lg:p-3 transition-colors duration-200 flex-shrink-0"
              >
                <svg className="h-4 w-4 lg:h-5 lg:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@esguaratuba"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 rounded-lg p-2 lg:p-3 transition-colors duration-200 flex-shrink-0"
              >
                <svg className="h-4 w-4 lg:h-5 lg:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Links Rápidos</h4>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left text-sm lg:text-base break-words"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Nossos Serviços</h4>
            <ul className="space-y-2 lg:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm lg:text-base break-words">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Contato</h4>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-white mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-gray-300 text-sm break-words">
                    Av. Damião Botelho de Souza, 522<br />
                    Centro - Guaratuba, PR
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-white flex-shrink-0" />
                <a 
                  href="https://wa.me/5541996667472" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm break-all"
                >
                  (41) 99666-7472
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-white flex-shrink-0" />
                <a 
                  href="mailto:edinho@esinformatica.com.br"
                  className="text-gray-300 hover:text-white transition-colors text-sm break-all min-w-0"
                >
                  edinho@esinformatica.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 lg:py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs lg:text-sm text-center md:text-left break-words">
              © 2024 ES INFORMÁTICA. Todos os direitos reservados.
            </p>
            <div className="flex items-center text-gray-400 text-xs lg:text-sm">
              <span>Feito com</span>
              <Heart className="h-3 w-3 lg:h-4 lg:w-4 text-red-500 mx-1 flex-shrink-0" />
              <span className="whitespace-nowrap">em Guaratuba, PR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

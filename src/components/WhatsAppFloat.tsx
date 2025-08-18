
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Reduzido para 1 segundo para aparecer mais rápido
    const timer = setTimeout(() => {
      setIsVisible(true);
      console.log('WhatsApp button is now visible');
      // Show tooltip briefly
      setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 5000);
      }, 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    console.log('WhatsApp button clicked!');
    setIsClicked(true);
    
    // Feedback visual
    setTimeout(() => setIsClicked(false), 200);
    
    const phoneNumber = '5541996667472';
    const message = encodeURIComponent(
      'Olá! Vim através do site da ES INFORMÁTICA e gostaria de saber mais sobre os serviços oferecidos.'
    );
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    console.log('Opening WhatsApp URL:', whatsappURL);
    
    // Tentar abrir o WhatsApp
    try {
      const newWindow = window.open(whatsappURL, '_blank', 'noopener,noreferrer');
      if (!newWindow) {
        console.error('Popup blocker may have prevented opening WhatsApp');
        // Fallback: tentar redirecionar na mesma aba
        window.location.href = whatsappURL;
      }
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      // Fallback final
      window.location.href = whatsappURL;
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-[9999] animate-slide-in">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 animate-fade-in">
              <div className="bg-white rounded-lg shadow-lg p-3 max-w-xs relative">
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 z-10"
                  aria-label="Fechar tooltip"
                >
                  <X className="h-3 w-3" />
                </button>
                <p className="text-sm text-gray-700 pr-4">
                  👋 Olá! Precisa de ajuda? Fale conosco no WhatsApp!
                </p>
                <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
              </div>
            </div>
          )}

          {/* Button */}
          <button
            onClick={handleWhatsAppClick}
            className={`bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-float cursor-pointer relative ${
              isClicked ? 'scale-95' : ''
            }`}
            aria-label="Abrir WhatsApp para contato"
            style={{ 
              WebkitTapHighlightColor: 'transparent',
              userSelect: 'none',
              touchAction: 'manipulation'
            }}
          >
            <MessageCircle className="h-6 w-6" />
          </button>

          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;

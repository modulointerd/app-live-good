import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/analytics';
import { getWhatsAppUrl } from '../constants/links';

interface WhatsAppWidgetProps {
  onContactJohnny?: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ onContactJohnny }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWhatsApp = () => {
    trackWhatsAppClick('floating_widget');
    setIsOpen(false);
    if (onContactJohnny) {
      onContactJohnny();
    } else {
      window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
      
      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden animate-fade-in text-white">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-[#072d1f] to-emerald-800 p-4 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/images/johnny.png"
                  alt="Johnny"
                  className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Johnny</h4>
                <p className="text-[10px] text-emerald-300 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>En línea ahora</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 space-y-3 bg-slate-950/70 max-h-64 overflow-y-auto text-xs">
            <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700 shadow-sm max-w-[95%] text-slate-100 font-medium leading-relaxed">
              ¡Hola! Soy Johnny, asesor de LiveGood 👋 ¿Buscas ahorrar hasta 75% en suplementos 🌱, evaluar el programa de afiliación de $9.95/mes 💡 o ambas cosas?
            </div>

            <div className="bg-emerald-950/80 text-emerald-300 p-2.5 rounded-xl border border-emerald-500/30 text-[11px] font-semibold">
              ⚡ Te respondo personalmente y te entrego los bonos de equipo.
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-3 bg-slate-900 border-t border-slate-800">
            <button
              onClick={handleOpenWhatsApp}
              className="w-full btn-outline-whatsapp py-2.5 text-xs font-bold justify-center"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>ABRIR WHATSAPP</span>
            </button>
          </div>

        </div>
      )}

      {/* Floating Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-12 h-12 rounded-full bg-slate-900 p-0.5 shadow-[0_6px_25px_rgba(0,0,0,0.6)] border-2 border-emerald-500 hover:scale-105 transition-all duration-300 flex items-center justify-center opacity-95 hover:opacity-100"
        aria-label="Contactar a Johnny por WhatsApp"
      >
        <img
          src="/images/johnny.png"
          alt="Johnny"
          className="w-full h-full rounded-full object-cover"
        />

        {/* Pulse Green Dot */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center text-[9px] text-white font-extrabold shadow-sm">
          1
        </span>
      </button>

    </div>
  );
};

export default WhatsAppWidget;

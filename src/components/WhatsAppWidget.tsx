import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

interface WhatsAppWidgetProps {
  onContactJohnny: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ onContactJohnny }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-auto">
      
      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden animate-fade-in">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#093725] to-[#0d5238] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/images/johnny.png"
                  alt="Johnny"
                  className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Johnny</h4>
                <p className="text-[10px] text-emerald-200 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>En línea ahora</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 space-y-3 bg-slate-50/60 max-h-64 overflow-y-auto text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200/60 shadow-sm max-w-[95%] text-[#093725] font-medium leading-relaxed">
              ¡Hola! Soy Jilszo, asesor de Johnny en LiveGood. 👋 ¿Buscas generar ingresos extras o las dos cosas? 💰✨
            </div>

            <div className="bg-emerald-50 text-emerald-900 p-2.5 rounded-xl border border-emerald-100 text-[11px] font-semibold">
              ⚡ Te respondo personalmente y te comparto la estrategia de equipo.
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-3 bg-white border-t border-slate-100">
            <button
              onClick={() => {
                setIsOpen(false);
                onContactJohnny();
              }}
              className="w-full btn-outline-whatsapp py-2.5 text-xs font-bold justify-center"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>ABRIR WHATSAPP</span>
            </button>
          </div>

        </div>
      )}

      {/* Floating Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 rounded-full bg-white p-0.5 shadow-[0_8px_25px_rgba(0,0,0,0.18)] border-2 border-emerald-500 hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Contactar a Johnny"
      >
        <img
          src="/images/johnny.png"
          alt="Johnny"
          className="w-full h-full rounded-full object-cover"
        />

        {/* Pulse Green Dot */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] text-white font-extrabold shadow-sm">
          1
        </span>
      </button>

    </div>
  );
};

import React, { useState } from 'react';
import { Share2, Copy, Check, ExternalLink } from 'lucide-react';

export const ShareCardSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://livegoodtour.com/JILSZO";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-[#06261a] to-[#093725] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-emerald-500/20 relative overflow-hidden">
        
        {/* Background Subtle Shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Link Description */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">
              <Share2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tarjeta Oficial de Compartir</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Enlace Oficial de Afiliación: <br />
              <span className="text-emerald-400">LiveGoodTour.com/JILSZO</span>
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
              Comparte este enlace directo para registrar nuevos miembros en tu equipo con la vista previa optimizada para WhatsApp y redes sociales.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="bg-slate-900/80 rounded-2xl px-4 py-3 border border-emerald-500/30 font-mono text-xs sm:text-sm text-emerald-300 flex items-center justify-between gap-3">
                <span className="truncate">{shareUrl}</span>
                <button
                  onClick={handleCopy}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-xl font-sans text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? '¡Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Preview Card matching 2nd user image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-[#1e293b] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 transform hover:-translate-y-1 transition-transform">
              
              {/* Image Banner matching 2nd attachment */}
              <div className="relative h-44 bg-gradient-to-br from-[#0c4a33] to-[#06261a] p-4 flex flex-col items-center justify-center text-center">
                <img
                  src="/images/johnny-share.jpg"
                  alt="Johnnylivegood.com Share Card"
                  className="w-full h-full object-cover absolute inset-0 opacity-90"
                />
              </div>

              {/* Card Meta Content */}
              <div className="p-4 bg-[#111827] text-white space-y-2">
                <h3 className="font-extrabold text-sm sm:text-base leading-snug text-slate-100">
                  Johnny | LiveGood – Salud y Libertad Financiera
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Distribuidor oficial LiveGood en Perú – Salud premium y libertad financiera sin inventario ni cuotas de venta.
                </p>

                <div className="pt-2 border-t border-slate-800 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold truncate">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="truncate">Johnnylivegood.com</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

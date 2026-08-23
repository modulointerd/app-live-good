import React, { useState } from 'react';
import { ChevronDown, Play, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

interface FaqItem {
  id: number;
  number: string;
  question: string;
  subtitle: string;
  youtubeId: string;
  youtubeUrl: string;
  summary: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    number: '01',
    question: '¿Cómo se invierte?',
    subtitle: '¿Cuánto se puede ganar?',
    youtubeId: 'VN0CnAlx58E',
    youtubeUrl: 'https://youtu.be/VN0CnAlx58E',
    summary: 'Descubre en este video explicativo exactamente cómo funciona la inversión única de $40 USD, el sistema de comisiones semanales y la proyección de ingresos residuales en el equipo de Johnny.'
  },
  {
    id: 2,
    number: '02',
    question: '¿LiveGood es una pirámide?',
    subtitle: 'La diferencia en 2 minutos',
    youtubeId: '5HKZuiVE1OM',
    youtubeUrl: 'https://youtu.be/5HKZuiVE1OM',
    summary: 'Entiende en 2 minutos por qué LiveGood es un modelo legal de comercio electrónico por membresía (estilo Costco o Amazon Prime) sin compras mensuales obligatorias ni requisitos de venta forzada.'
  },
  {
    id: 3,
    number: '03',
    question: '¿Qué es LiveGood?',
    subtitle: 'El modelo que está cambiando todo',
    youtubeId: 'pEtNx97EAaY',
    youtubeUrl: 'https://youtu.be/pEtNx97EAaY',
    summary: 'Conoce la visión global de la compañía, cómo ofrece suplementos orgánicos de máxima calidad a precio de costo y cómo está revolucionando la industria internacional.'
  }
];

interface FaqSectionProps {
  onRegisterClick?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onRegisterClick }) => {
  // Open the first item by default or null
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const mainAffiliateUrl = "https://livegoodtour.com/JILSZO";

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-b from-[#06261a] via-[#083021] to-[#041d13] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-emerald-500/20 relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header matching Image 1 */}
        <div className="text-center space-y-3 mb-10 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>ANTES DE DECIDIR</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Todo lo que necesitas saber
          </h2>
          
          <p className="text-xs sm:text-sm text-emerald-200/80 font-medium">
            Tres preguntas. Tres respuestas honestas.
          </p>
        </div>

        {/* 3 Interactive Accordion Rows */}
        <div className="space-y-4 max-w-4xl mx-auto relative z-10">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0a422d]/90 border-emerald-400/50 shadow-[0_10px_30px_rgba(15,169,104,0.15)]'
                    : 'bg-[#073223]/70 border-emerald-900/60 hover:border-emerald-500/30 hover:bg-[#083a29]'
                }`}
              >
                {/* Accordion Row Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    {/* Number Badge */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-emerald-500 text-slate-950 shadow-md'
                        : 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {item.number}
                    </div>

                    {/* Question & Subtitle */}
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white tracking-tight leading-snug">
                        {item.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-300/80 font-semibold truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Arrow */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-emerald-500/20 text-emerald-300 rotate-180' : 'bg-emerald-950 text-slate-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Body: Video Player & Info */}
                {isOpen && (
                  <div className="px-4 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-emerald-800/40 animate-fade-in space-y-5">
                    
                    {/* Responsive YouTube Video Player (iframe) */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/30 bg-black">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                        title={item.question}
                        className="absolute top-0 left-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Video Summary */}
                    <div className="bg-[#052117] p-4 rounded-xl border border-emerald-900/50 flex items-start gap-3 text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p>{item.summary}</p>
                      </div>
                    </div>

                    {/* CTA inside accordion with main link */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                      <a
                        href={mainAffiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto btn-primary-emerald text-xs sm:text-sm py-3 px-6 justify-center"
                      >
                        <span>UNIRME AHORA EN JOHNNYLIVEGOOD.COM</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      <button
                        onClick={onRegisterClick}
                        className="w-full sm:w-auto bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 px-5 py-3 rounded-full text-xs font-bold transition-colors flex items-center justify-center gap-2"
                      >
                        <Play className="w-3.5 h-3.5 text-emerald-400" />
                        <span>RESERVAR MI POSICIÓN GRATIS</span>
                      </button>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link principal Banner at bottom of section */}
        <div className="mt-10 max-w-4xl mx-auto bg-gradient-to-r from-emerald-900/60 via-emerald-800/40 to-emerald-900/60 p-4 rounded-2xl border border-emerald-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs sm:text-sm font-semibold text-emerald-200">
            <span className="text-white font-extrabold block text-sm sm:text-base">¿Listo para dar el siguiente paso?</span>
            Accede al enlace principal oficial: <span className="text-emerald-400 font-bold">LiveGoodTour.com/JILSZO</span>
          </div>

          <a
            href={mainAffiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-emerald text-xs py-2.5 px-5 flex-shrink-0"
          >
            <span>IR A LIVEGOODTOUR.COM/JILSZO</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

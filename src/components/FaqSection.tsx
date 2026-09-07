import React, { useState } from 'react';
import { ChevronDown, Sparkles, CheckCircle2, ArrowRight, X } from 'lucide-react';

interface FaqItem {
  id: number;
  number: string;
  question: string;
  subtitle: string;
  youtubeId: string;
  youtubeUrl: string;
  summary: string;
  type: 'video' | 'comparison';
}

const faqData: FaqItem[] = [
  {
    id: 1,
    number: '01',
    question: '¿Qué es LiveGood?',
    subtitle: 'El modelo que está cambiando todo',
    youtubeId: 'pEtNx97EAaY',
    youtubeUrl: 'https://youtu.be/pEtNx97EAaY',
    summary: 'Conoce la visión global de la compañía: suplementos orgánicos de máxima calidad a precio de costo, sin intermediarios. Más de 2 millones de consumidores inteligentes ya son parte.',
    type: 'video'
  },
  {
    id: 2,
    number: '02',
    question: '¿Cuál es la diferencia con las redes tradicionales?',
    subtitle: 'Membresía inteligente vs. modelo antiguo',
    youtubeId: '5HKZuiVE1OM',
    youtubeUrl: 'https://youtu.be/5HKZuiVE1OM',
    summary: 'LiveGood funciona como una membresía inteligente estilo Costco o Amazon Prime: precios de fábrica, consumo 100% opcional y ganancias por suscripción.',
    type: 'comparison'
  },
  {
    id: 3,
    number: '03',
    question: '¿Cómo se invierte y cuánto puedo generar?',
    subtitle: 'Inversión única de $40 USD',
    youtubeId: 'VN0CnAlx58E',
    youtubeUrl: 'https://youtu.be/VN0CnAlx58E',
    summary: 'Descubre cómo funciona la inversión única de $40 USD, el sistema de comisiones semanales y la proyección de ingresos residuales en el equipo de Johnny.',
    type: 'video'
  }
];

const PRE_REGISTRATION_URL = 'https://livegoodtour.com/JILSZO';

interface FaqSectionProps {
  onRegisterClick?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-b from-[#06261a] via-[#083021] to-[#041d13] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-emerald-500/20 relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>PARA CONSUMIDORES INTELIGENTES</span>
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

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-4 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-emerald-800/40 animate-fade-in space-y-5">
                    
                    {/* Comparison Table for FAQ #2 — Maleta 2: Contraste */}
                    {item.type === 'comparison' && (
                      <div className="rounded-2xl overflow-hidden border border-emerald-500/20 mb-4">
                        <table className="comparison-table">
                          <thead>
                            <tr>
                              <th>
                                <div className="flex items-center gap-2">
                                  <X className="w-4 h-4" />
                                  Redes Tradicionales
                                </div>
                              </th>
                              <th>
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4" />
                                  Membresía LiveGood
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Precios inflados para pagar comisiones</td>
                              <td>Precios de fábrica, hasta 75% menos</td>
                            </tr>
                            <tr>
                              <td>Compras mensuales obligatorias</td>
                              <td>Consumo 100% opcional</td>
                            </tr>
                            <tr>
                              <td>Presión por vender a familiares</td>
                              <td>Ganancias por suscripción, no por ventas</td>
                            </tr>
                            <tr>
                              <td>Inventarios y pedidos mínimos</td>
                              <td>Sin inventario, envío directo</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Responsive YouTube Video Player */}
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

                    {/* Single Unified CTA — Maleta 7: Simplicity */}
                    <div className="flex items-center justify-center pt-1">
                      <a
                        href={PRE_REGISTRATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto btn-primary-emerald text-xs sm:text-sm py-3 px-8 justify-center"
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>ASEGURAR MI POSICIÓN AHORA</span>
                      </a>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner — Single CTA */}
        <div className="mt-10 max-w-4xl mx-auto bg-gradient-to-r from-emerald-900/60 via-emerald-800/40 to-emerald-900/60 p-4 rounded-2xl border border-emerald-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs sm:text-sm font-semibold text-emerald-200">
            <span className="text-white font-extrabold block text-sm sm:text-base">¿Listo para dar el siguiente paso?</span>
            Accede a tu posición como emprendedor moderno en LiveGood.
          </div>

          <a
            href={PRE_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-emerald text-xs py-2.5 px-5 flex-shrink-0"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>ASEGURAR MI POSICIÓN AHORA</span>
          </a>
        </div>

      </div>
    </section>
  );
};

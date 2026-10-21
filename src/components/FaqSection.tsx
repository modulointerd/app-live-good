import React, { useState } from 'react';
import { ChevronDown, Sparkles, CheckCircle2, ArrowRight, X, ShieldCheck } from 'lucide-react';

interface FaqItem {
  id: number;
  number: string;
  question: string;
  subtitle: string;
  youtubeId?: string;
  youtubeUrl?: string;
  summary: string;
  details?: string[];
  type: 'video' | 'comparison' | 'info';
}

const faqData: FaqItem[] = [
  {
    id: 1,
    number: '01',
    question: '¿Qué es LiveGood?',
    subtitle: 'El modelo de membresía para productos de bienestar',
    youtubeId: 'pEtNx97EAaY',
    youtubeUrl: 'https://youtu.be/pEtNx97EAaY',
    summary: 'LiveGood es un club de membresía enfocado en suplementos nutricionales y productos de bienestar de la más alta calidad a precios accesibles de fábrica, sin intermediarios. Más de 2 millones de miembros ya forman parte a nivel global.',
    type: 'video'
  },
  {
    id: 2,
    number: '02',
    question: '¿Cuál es la diferencia con las redes tradicionales?',
    subtitle: 'Membresía transparente vs. modelo antiguo',
    youtubeId: '5HKZuiVE1OM',
    youtubeUrl: 'https://youtu.be/5HKZuiVE1OM',
    summary: 'LiveGood opera con un modelo similar a Costco o Amazon Prime: compras productos solo si los deseas con descuento de fábrica, sin compras forzadas mensuales ni sobreprecios para pagar comisiones excesivas.',
    type: 'comparison'
  },
  {
    id: 3,
    number: '03',
    question: '¿Cómo funciona el programa de afiliación y qué ingresos son posibles?',
    subtitle: 'Tarifa única de $40 USD · Sin ingresos garantizados',
    youtubeId: 'VN0CnAlx58E',
    youtubeUrl: 'https://youtu.be/VN0CnAlx58E',
    summary: 'La afiliación es 100% opcional (cuota de activación de $40 USD). Permite a distribuidores independientes recomendar la membresía y productos a cambio de comisiones. Aviso importante: Los resultados e ingresos dependen del esfuerzo comercial, ventas y dedicación individual; no se garantizan ingresos fijos ni pasivos sin trabajo.',
    type: 'video'
  },
  {
    id: 4,
    number: '04',
    question: '¿Cuáles son las cuotas recurrentes y qué otros costes existen?',
    subtitle: 'Membresía de $9.95 USD/mes · Cero costos ocultos',
    summary: 'La única cuota recurrente es la membresía mensual de $9.95 USD (o la opción anual de $99.95 USD). No hay pedidos mínimos obligatorios de productos ni recargos automáticos. Para productos físicos, aplican gastos de envío e impuestos locales desglosados con total claridad antes del pago.',
    details: [
      'Membresía mensual: $9.95 USD/mes para mantener acceso a precios de miembro.',
      'Membresía anual (opcional): $99.95 USD/año (2 meses de ahorro).',
      'Cuota de activación de afiliado (opcional): $40 USD pago único.',
      'Sin autoenvíos obligatorios ni cuotas sorpresa de mantenimiento.'
    ],
    type: 'info'
  },
  {
    id: 5,
    number: '05',
    question: '¿Cómo funcionan la cancelación y la garantía de devolución?',
    subtitle: 'Cancelación libre sin penalizaciones · Garantía de 90 días',
    summary: 'Puedes cancelar tu membresía mensual en cualquier momento directamente desde tu panel de usuario o comunicándote con soporte, sin contratos de permanencia ni penalizaciones. Además, LiveGood respalda sus productos físicos con una garantía de reembolso de 90 días en envases vacíos si no estás satisfecho.',
    details: [
      'Cancelación con 1 clic en la oficina virtual de LiveGood en cualquier momento.',
      'Cero penalizaciones y cero compromisos de permanencia mínima.',
      'Garantía "Empty Bottle" de 90 días: devolución del precio del producto aunque el frasco esté vacío (menos gastos de envío).'
    ],
    type: 'info'
  }
];

const PRE_REGISTRATION_URL = 'https://livegoodtour.com/JILSZO';

interface FaqSectionProps {
  onRegisterClick?: () => void;
  onOpenConditions?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConditions }) => {
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
            <span>TRANSPARENCIA TOTAL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Preguntas Frecuentes y Condiciones Claras
          </h2>
          
          <p className="text-xs sm:text-sm text-emerald-200/80 font-medium">
            Costos, membresía, cancelación y oportunidad de afiliación explicados con honestidad.
          </p>
        </div>

        {/* Interactive Accordion Rows */}
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
                    
                    {/* Comparison Table for FAQ #2 */}
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
                              <td>Precios directos de fábrica accesibles</td>
                            </tr>
                            <tr>
                              <td>Compras mensuales obligatorias</td>
                              <td>Consumo 100% opcional sin obligación</td>
                            </tr>
                            <tr>
                              <td>Presión para acumular inventarios</td>
                              <td>Sin inventarios, la empresa despacha directo</td>
                            </tr>
                            <tr>
                              <td>Permanencia forzosa o penalizaciones</td>
                              <td>Cancelación libre en cualquier momento</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Responsive YouTube Video Player (if present) */}
                    {item.youtubeId && (
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/30 bg-black">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=0&rel=0`}
                          title={item.question}
                          className="absolute top-0 left-0 w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}

                    {/* Video / Info Summary */}
                    <div className="bg-[#052117] p-4 rounded-xl border border-emerald-900/50 flex items-start gap-3 text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p>{item.summary}</p>
                      </div>
                    </div>

                    {/* Detailed bullet points if info type */}
                    {item.details && item.details.length > 0 && (
                      <div className="bg-[#083525] p-4 rounded-xl border border-emerald-600/30 space-y-2">
                        <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span>Puntos clave:</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-emerald-100/80">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-emerald-400 font-bold">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={PRE_REGISTRATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto btn-primary-emerald text-xs sm:text-sm py-3 px-8 justify-center flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>CONOCER MÁS / EVALUAR OPCIONES</span>
                      </a>
                      {onOpenConditions && (
                        <button
                          onClick={onOpenConditions}
                          className="w-full sm:w-auto text-xs text-emerald-300 hover:text-white font-bold py-2 px-4 underline"
                        >
                          Ver términos completos de membresía
                        </button>
                      )}
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 max-w-4xl mx-auto bg-gradient-to-r from-emerald-900/60 via-emerald-800/40 to-emerald-900/60 p-5 rounded-2xl border border-emerald-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs sm:text-sm font-semibold text-emerald-200">
            <span className="text-white font-extrabold block text-sm sm:text-base">¿Deseas evaluar tus opciones con calma?</span>
            Revisa el catálogo de bienestar y consulta cómo funciona la membresía sin compromiso.
          </div>

          <a
            href={PRE_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-emerald text-xs py-2.5 px-5 flex-shrink-0"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>ACCEDER AL PORTAL OFICIAL</span>
          </a>
        </div>

      </div>
    </section>
  );
};

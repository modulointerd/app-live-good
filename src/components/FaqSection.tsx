import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import { trackFaqInteraction, trackWhatsAppClick } from '../utils/analytics';
import { getWhatsAppUrl } from '../constants/links';
import { LegalModal } from './LegalModal';

interface FaqSectionProps {
  onContactJohnny?: () => void;
  onOpenConditions?: () => void;
}

interface FaqItem {
  id: number;
  question: string;
  badge: string;
  answer: string;
  points?: string[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ 
  onContactJohnny, 
  onOpenConditions 
}) => {
  // First item open by default for immediate engagement
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  const faqs: FaqItem[] = [
    {
      id: 1,
      badge: 'Cero Presión Comercial',
      question: '1. ¿Tengo que comprar productos todos los meses?',
      answer: 'Absolutamente NO. A diferencia de las empresas multinivel o redes tradicionales, en LiveGood no existen compras mínimas obligatorias, ni autoenvíos mensuales forzados, ni acumulación de inventario. Compras única y exclusivamente los productos que tú decidas cuando realmente los necesites, disfrutando siempre de hasta un 75% de ahorro directo de fábrica.',
      points: [
        'Cero autoenvíos automáticos obligatorios.',
        'Cero consumo mínimo mensual para conservar tu descuento.',
        'Libertad total de pedir cuando tú y tu familia lo deseen.'
      ]
    },
    {
      id: 2,
      badge: 'Modelo Tipo Costco / Amazon Prime',
      question: '2. ¿Cómo funciona la membresía y el sistema de ahorro?',
      answer: 'Funciona exactamente bajo el modelo de suscripción de clubes de compras como Costco o Sam\'s Club: por una membresía accesible de solo $9.95 USD al mes (o $99.95 anuales con 2 meses gratis), adquieres acceso directo a precios de costo de fábrica en productos de grado farmacéutico sin sobreprecios de intermediarios. Si además deseas participar en el programa de afiliados para generar comisiones recomendando el club, puedes activar tu posición con una cuota única de $40 USD.',
      points: [
        'Membresía mensual: $9.95 USD/mes (o $99.95 USD/año con ahorro).',
        'Hasta 75% de descuento en suplementos orgánicos de máxima pureza.',
        'Afiliación opcional de $40 USD (pago único) para quienes deseen generar ingresos.'
      ]
    },
    {
      id: 3,
      badge: '100% Sin Contratos',
      question: '3. ¿Puedo cancelar mi cuenta en cualquier momento?',
      answer: 'SÍ, en cualquier momento con 1 solo clic. No existen plazos forzosos de permanencia ni cláusulas de penalización. Puedes cancelar tu membresía mensual directamente desde tu oficina virtual en LiveGood.com en cualquier instante o solicitándolo a soporte al cliente sin preguntas ni complicaciones.',
      points: [
        'Cancelación libre con un solo clic desde tu panel.',
        'Cero penalizaciones y cero cargos por cancelación.',
        'Control total sobre tu suscripción en todo momento.'
      ]
    },
    {
      id: 4,
      badge: 'Garantía 100% Respaldada',
      question: '4. ¿Los productos cuentan con garantía de devolución?',
      answer: 'Sí. LiveGood cuenta con la política de satisfacción incondicional "Empty Bottle Guarantee" (Garantía de Frasco Vacío) de 90 días. Si pruebas cualquier suplemento durante 3 meses completos y por cualquier motivo no estás satisfecho con los resultados, puedes enviar el frasco totalmente vacío y se te reembolsa el 100% del valor del producto (menos gastos de envío).',
      points: [
        '90 días completos de prueba sin riesgo.',
        'Reembolso garantizado incluso con el envase vacío.',
        'Máxima confianza en la calidad y pureza de cada fórmula.'
      ]
    },
    {
      id: 5,
      badge: 'Equipo Oficial Johnny',
      question: '5. ¿Cómo recibo el apoyo y los bonos exclusivos del equipo?',
      answer: 'Al registrarte a través de los enlaces de esta página, el sistema de LiveGood te asigna de forma directa y automática al equipo oficial de Johnny. Una vez completado tu registro, simplemente haz clic en el botón de WhatsApp para confirmar tu usuario y recibirás de inmediato el acceso al grupo privado VIP, la guía digital de bienvenida y el paquete de herramientas.',
      points: [
        'Asignación directa con Johnny como tu mentor de equipo.',
        'Entrega inmediata de la guía digital y herramientas listas para usar.',
        'Soporte continuo y directo por WhatsApp (+51 900292484).'
      ]
    }
  ];

  const toggleAccordion = (index: number) => {
    const isExpanding = openIndex !== index;
    setOpenIndex(isExpanding ? index : null);
    if (isExpanding) {
      trackFaqInteraction(faqs[index].question, true);
    }
  };

  const handleWhatsAppContact = () => {
    if (onContactJohnny) {
      onContactJohnny();
    } else {
      trackWhatsAppClick('faq_contact_button');
      window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  const handleLegalConditions = () => {
    if (onOpenConditions) {
      onOpenConditions();
    } else {
      setIsLegalOpen(true);
    }
  };

  return (
    <>
      <section id="faq" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Preguntas Frecuentes · FAQ Interactiva</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Resolvemos Todas Tus Dudas con Total Claridad
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Creemos en la transparencia comercial absoluta. Aquí tienes las respuestas directas a las preguntas más frecuentes antes de registrarte.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-slate-900 border-emerald-500/70 shadow-xl ring-1 ring-emerald-500/30' 
                    : 'bg-slate-900/80 hover:bg-slate-900 border-slate-800 shadow-sm'
                }`}
              >
                {/* Accordion Question Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-0.5 rounded-full inline-block">
                      {faq.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-emerald-500 text-slate-950 rotate-180' : 'bg-slate-800 text-slate-300'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Answer Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 border-t border-slate-800 animate-fade-in space-y-4">
                    <p className="leading-relaxed">
                      {faq.answer}
                    </p>

                    {faq.points && (
                      <ul className="space-y-2 pt-1">
                        {faq.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-8 rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              ¿Tienes alguna otra pregunta específica?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Johnny te responderá de forma personalizada por WhatsApp sin ningún compromiso.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppContact}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Hablar con Johnny</span>
            </button>

            <button
              onClick={handleLegalConditions}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Ver Condiciones Legales</span>
            </button>
          </div>
        </div>

      </section>

      {/* Internal Legal Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        initialTab="condiciones"
        onClose={() => setIsLegalOpen(false)}
        onContactJohnny={handleWhatsAppContact}
      />
    </>
  );
};

export default FaqSection;

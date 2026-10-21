import React from 'react';
import { ShieldCheck, RefreshCw, XCircle, CheckCircle2, FileText, ArrowRight, HelpCircle } from 'lucide-react';
import { type LegalTab } from './LegalModal';

interface MembershipConditionsProps {
  onOpenLegal: (tab: LegalTab) => void;
  onContactJohnny: () => void;
  onRegisterClick?: () => void;
}

const PRE_REGISTRATION_URL = 'https://livegoodtour.com/JILSZO';

export const MembershipConditions: React.FC<MembershipConditionsProps> = ({
  onOpenLegal,
  onContactJohnny
}) => {
  return (
    <section id="condiciones-membresia" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Claridad y Transparencia Comercial</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#093725] tracking-tight">
          Condiciones de la Membresía y Programa de Afiliación
        </h2>
        
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#4a5d53] leading-relaxed">
          Toda la información desglosada para que conozcas los costos reales, las cuotas recurrentes, las políticas de cancelación y el modelo de afiliación antes de tomar cualquier decisión.
        </p>
      </div>

      {/* 2 Main Columns: Membresía Consumidor vs Programa de Afiliación */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
        
        {/* Card 1: Membresía de Consumidor (Productos) */}
        <div className="rounded-3xl bg-white border border-emerald-100 p-6 sm:p-8 shadow-[0_15px_40px_rgba(9,55,37,0.06)] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs uppercase font-extrabold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">
                Opción 1 · Para Consumidores
              </span>
              <span className="text-xs text-slate-500 font-semibold">Uso personal</span>
            </div>

            <h3 className="text-2xl font-black text-[#093725] tracking-tight">
              Membresía de Bienestar
            </h3>
            <p className="text-sm text-[#4a5d53] mt-2 leading-relaxed">
              Pensada para personas que desean comprar suplementos nutricionales y productos de bienestar con descuento directo de fábrica.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-[#f7fcf9] border border-emerald-100">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-[#093725]">$9.95</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">USD / mes</span>
              </div>
              <p className="text-xs text-[#5e7368] mt-1">
                O también disponible en pago anual de <strong>$99.95 USD</strong> (ahorro de $20 USD / 2 meses gratis).
              </p>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#374740]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Acceso directo a precios exclusivos de miembro en más de 25 productos de bienestar.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Sin compras mensuales forzadas:</strong> No hay autoenvíos obligatorios ni cuotas de consumo mínimo.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Garantía de reembolso de 90 días en envases vacíos si no estás satisfecho.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Cancelación libre:</strong> Puedes cancelar tu suscripción mensual en cualquier momento sin penalizaciones.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100">
            <button
              onClick={() => onOpenLegal('condiciones')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>Ver detalles completos de cancelación y reembolsos</span>
            </button>
          </div>
        </div>

        {/* Card 2: Programa de Afiliación (Opcional) */}
        <div className="rounded-3xl bg-white border border-emerald-900/15 p-6 sm:p-8 shadow-[0_15px_40px_rgba(9,55,37,0.08)] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs uppercase font-extrabold tracking-wider bg-[#093725] text-emerald-300 px-3 py-1 rounded-full">
                Opción 2 · Para Emprendedores
              </span>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full">Opcional</span>
            </div>

            <h3 className="text-2xl font-black text-[#093725] tracking-tight">
              Programa de Afiliación
            </h3>
            <p className="text-sm text-[#4a5d53] mt-2 leading-relaxed">
              Diseñado para quienes además de consumir desean comercializar y recomendar la membresía para generar comisiones como afiliados independientes.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-[#093725] text-white">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">$40.00</span>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">USD (Pago Único)</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Cuota única de activación de afiliado + tu membresía mensual de $9.95 USD (Total inicial: <strong>$49.95 USD</strong>).
              </p>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#374740]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Oficina virtual propia, enlaces de referido y herramientas de difusión comercial.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Acceso a capacitaciones semanales del equipo de Johnny y soporte continuo.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Sin inventarios obligatorios:</strong> La empresa envía directamente al cliente final.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Sin garantías de ingresos:</strong> Las ganancias dependen del esfuerzo, ventas y resultados comerciales individuales.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100">
            <button
              onClick={() => onOpenLegal('afiliacion')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>Conocer plan de compensación y descargo de ingresos</span>
            </button>
          </div>
        </div>

      </div>

      {/* Transparency Summary Bar: Costos, Cancelación, Garantía */}
      <div className="rounded-3xl bg-[#f0f9f5] border border-emerald-200/80 p-6 sm:p-8">
        <h4 className="text-base sm:text-lg font-black text-[#093725] mb-5 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          Resumen de Transparencia Comercial
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <RefreshCw className="w-4 h-4 text-emerald-600" />
              <span>Cuotas Recurrentes</span>
            </div>
            <p className="text-xs sm:text-sm text-[#4a5d53] leading-relaxed">
              La única tarifa recurrente es de <strong>$9.95 USD al mes</strong> para conservar los precios de descuento. No existen cuotas ocultas ni recargos sorpresa.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <XCircle className="w-4 h-4 text-emerald-600" />
              <span>Condiciones de Cancelación</span>
            </div>
            <p className="text-xs sm:text-sm text-[#4a5d53] leading-relaxed">
              Puedes cancelar tu membresía en cualquier momento desde tu cuenta personal o contactando al soporte oficial, sin permanencia obligatoria ni penalizaciones.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <HelpCircle className="w-4 h-4 text-emerald-600" />
              <span>Otros Costes</span>
            </div>
            <p className="text-xs sm:text-sm text-[#4a5d53] leading-relaxed">
              Si compras productos físicos, se aplican los costes de envío e impuestos locales de importación de tu país, calculados transparentemente antes del pago.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#5e7368] text-center sm:text-left">
            ¿Tienes dudas sobre los costos o sobre si te conviene como cliente o afiliado?
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onContactJohnny}
              className="flex-1 sm:flex-initial btn-outline-whatsapp text-xs py-2.5 px-4 font-bold"
            >
              Consultar por WhatsApp
            </button>
            <a
              href={PRE_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial btn-primary-emerald text-xs py-2.5 px-5 flex items-center justify-center gap-1.5"
            >
              <span>Evaluar Opciones</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};

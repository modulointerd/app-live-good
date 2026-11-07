import React, { useState } from 'react';
import { LegalModal, type LegalTab } from './LegalModal';
import { AFFILIATE_CONFIG, getWhatsAppUrl } from '../constants/links';
import { trackWhatsAppClick } from '../utils/analytics';

interface FooterProps {
  onOpenLegal?: (tab: LegalTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const [internalLegalTab, setInternalLegalTab] = useState<LegalTab | null>(null);

  const handleOpenLegal = (tab: LegalTab) => {
    if (onOpenLegal) {
      onOpenLegal(tab);
    } else {
      setInternalLegalTab(tab);
    }
  };

  const handleContactJohnny = () => {
    trackWhatsAppClick('footer_legal_modal');
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <footer className="bg-slate-950 text-slate-400 py-12 pb-32 sm:pb-28 px-4 sm:px-6 lg:px-8 border-t border-slate-900 mt-12">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Top Footer Row: Brand Logo, Independent Affiliate Badge & Navigation Links */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/livegood-logo-light.png"
                  alt="LiveGood"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
                <span className="text-xs font-semibold text-slate-300 pl-3 border-l border-slate-800">
                  Afiliado Independiente Oficial: {AFFILIATE_CONFIG.name}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2 max-w-xl">
                Portal informativo de distribución independiente. Productos de bienestar directo de fábrica, membresía accesible y modelo de negocio ético.
              </p>
            </div>

            {/* Legal Navigation Links required by Meta Advertising Policies */}
            <nav aria-label="Enlaces legales y de transparencia" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-emerald-400">
              <button
                onClick={() => handleOpenLegal('privacidad')}
                className="hover:text-white hover:underline transition-colors"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => handleOpenLegal('terminos')}
                className="hover:text-white hover:underline transition-colors"
              >
                Términos de Servicio
              </button>
              <button
                onClick={() => handleOpenLegal('afiliacion')}
                className="hover:text-white hover:underline transition-colors"
              >
                Aviso de Exoneración de Responsabilidad (Earnings Disclaimer)
              </button>
              <button
                onClick={() => handleOpenLegal('condiciones')}
                className="hover:text-white hover:underline transition-colors"
              >
                Condiciones de Membresía y Cancelación
              </button>
              <button
                onClick={() => handleOpenLegal('contacto')}
                className="hover:text-white hover:underline transition-colors"
              >
                Contacto y Soporte
              </button>
            </nav>
          </div>

          {/* Compliance Disclaimers Grid (Mandatory for Meta Ads Policy Compliance) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] leading-relaxed text-slate-400">
            
            {/* Meta Platforms / Facebook Disclaimer */}
            <div className="space-y-1.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <p className="font-bold text-slate-200 uppercase tracking-wider text-[10px]">
                Descargo sobre Meta Platforms / Facebook
              </p>
              <p>
                Este sitio web no forma parte del sitio web de Meta Platforms, Inc. o Facebook. Asimismo, este sitio NO está respaldado, patrocinado ni administrado por Meta Platforms, Inc. FACEBOOK y META son marcas registradas propiedad de Meta Platforms, Inc.
              </p>
            </div>

            {/* Income & Earnings Disclaimer */}
            <div className="space-y-1.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <p className="font-bold text-slate-200 uppercase tracking-wider text-[10px]">
                Descargo de Responsabilidad de Ingresos (Earnings Disclaimer)
              </p>
              <p>
                Cualquier ejemplo, proyección o estimación de ingresos en este sitio web es estrictamente ilustrativo y se fundamenta en el plan de compensación oficial. No representa una promesa ni garantía de ganancias financieras. El éxito depende únicamente del tiempo, ventas comerciales y esfuerzo individual de cada afiliado independiente.
              </p>
            </div>

            {/* Health & Commercial Transparency */}
            <div className="space-y-1.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <p className="font-bold text-slate-200 uppercase tracking-wider text-[10px]">
                Aviso de Salud y Condiciones de Membresía
              </p>
              <p>
                Las declaraciones sobre suplementos no han sido evaluadas por la FDA ni por agencias sanitarias locales y no pretenden diagnosticar, tratar, curar ni prevenir enfermedades. Membresía mensual: $9.95 USD/mes. Cuota de activación (opcional): $40 USD pago único. Cero compras forzadas. Cancelación en cualquier momento. Garantía de reembolso de 90 días en envases vacíos.
              </p>
            </div>

          </div>

          {/* Bottom Copyright & Contact details */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Johnnylivegood.com - Sitio Informativo de Afiliado Independiente ({AFFILIATE_CONFIG.name}). Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-emerald-400 font-medium">WhatsApp: {AFFILIATE_CONFIG.phone}</span>
              <span>•</span>
              <button
                onClick={() => handleOpenLegal('contacto')}
                className="text-emerald-400 hover:underline"
              >
                Canales de Atención Oficial
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Internal Legal Modal */}
      <LegalModal
        isOpen={internalLegalTab !== null}
        initialTab={internalLegalTab || 'condiciones'}
        onClose={() => setInternalLegalTab(null)}
        onContactJohnny={handleContactJohnny}
      />
    </>
  );
};

export default Footer;

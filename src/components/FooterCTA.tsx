import React from 'react';
import { ArrowRight, Sparkles, Download, CheckCircle2 } from 'lucide-react';
import { AFFILIATE_CONFIG } from '../constants/links';
import { trackAffiliateClick, trackCatalogClick } from '../utils/analytics';

export const FooterCTA: React.FC = () => {
  const handleCtaClick = () => {
    trackAffiliateClick('footer_cta', AFFILIATE_CONFIG.tourUrl);
    window.open(AFFILIATE_CONFIG.tourUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadCatalog = (e: React.MouseEvent) => {
    e.preventDefault();
    trackCatalogClick('footer_cta_pdf');
    window.open(AFFILIATE_CONFIG.catalogPdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[2.5rem] bg-gradient-to-r from-slate-950 via-[#072d1f] to-emerald-700 p-8 sm:p-12 lg:p-16 text-white text-center shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-emerald-500/30 overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          
          {/* Top Chip */}
          <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md text-emerald-300 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cierre de Conversión · Tu Oportunidad Global</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Tu Salud y Tu Futuro Financiero Comienzan con una{' '}
            <span className="text-emerald-400 underline decoration-emerald-500/50 decoration-wavy">
              Decisión Inteligente
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Únete a más de 2 millones de personas en 190+ países que ahorran hasta un 75% en suplementos nutricionales de calidad farmacéutica o emprenden bajo un modelo de suscripción ético de solo $9.95/mes.
          </p>

          {/* CTA Action Button & Micro-copy */}
          <div className="pt-4 flex flex-col items-center gap-3">
            <button
              onClick={handleCtaClick}
              className="w-full sm:w-auto btn-primary-pulse group flex items-center justify-center gap-3 text-sm sm:text-base font-black py-4 sm:py-5 px-8 sm:px-12 rounded-full bg-white text-slate-950 hover:bg-emerald-50 shadow-[0_12px_35px_rgba(0,0,0,0.5)] transition-all transform hover:-translate-y-0.5 active:scale-98"
              aria-label="Obtener mi membresía y ver catálogo"
            >
              <span className="uppercase tracking-wide">OBTENER MI MEMBRESÍA Y VER CATÁLOGO</span>
              <span className="bg-slate-950 text-white p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </button>

            {/* Micro-copy under button */}
            <p className="text-xs sm:text-sm text-emerald-300 font-semibold flex items-center justify-center gap-1.5 pt-1">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Registro seguro • Cancela cuando quieras • Acceso inmediato</span>
            </p>
          </div>

          {/* Secondary Link: Download Catalog */}
          <div className="pt-3">
            <button
              onClick={handleDownloadCatalog}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>O descarga primero el catálogo oficial con precios (PDF)</span>
            </button>
          </div>

          {/* Quick Certainty Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Garantía Empty Bottle de 90 días</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Membresía $9.95/mes sin contratos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Asignado al equipo VIP de Johnny</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FooterCTA;

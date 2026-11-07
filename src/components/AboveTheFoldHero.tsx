import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Sparkles, 
  Activity, 
  ExternalLink
} from 'lucide-react';
import { AFFILIATE_CONFIG, getWhatsAppUrl } from '../constants/links';
import { trackAffiliateClick, trackCatalogClick, trackWhatsAppClick } from '../utils/analytics';

interface AboveTheFoldHeroProps {
  onContactJohnny?: () => void;
  onOpenConditions?: () => void;
}

export const AboveTheFoldHero: React.FC<AboveTheFoldHeroProps> = ({ 
  onContactJohnny,
  onOpenConditions 
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const handleCtaClick = () => {
    trackAffiliateClick('above_the_fold', AFFILIATE_CONFIG.tourUrl);
    window.open(AFFILIATE_CONFIG.tourUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCatalogClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackCatalogClick('hero_secondary');
    window.open(AFFILIATE_CONFIG.catalogPdfUrl, '_blank', 'noopener,noreferrer');
  };

  const handleJohnnyContact = () => {
    if (onContactJohnny) {
      onContactJohnny();
    } else {
      trackWhatsAppClick('hero_advisor_card');
      window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="relative pt-4 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-500/10 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-4 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 bg-teal-500/10 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>

      {/* Top Bar / Quick Action Resources (Preserving Johnny's original utility paths) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5 sm:mb-6">
        
        {/* Kicker / Category Badge required by structure */}
        <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Membresía Internacional de Bienestar y Negocio</span>
        </div>

        {/* Auxiliary Health Assessment & Clinic Tools */}
        <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
          <a
            href={AFFILIATE_CONFIG.healthReportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-slate-200 hover:text-emerald-300 hover:border-emerald-400 transition-all font-semibold shadow-xs"
            title="Evaluación Gratuita de Salud"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xs:inline">Evaluación Gratis</span>
            <ExternalLink className="w-3 h-3 text-emerald-400/80" />
          </a>

          <a
            href={AFFILIATE_CONFIG.clinicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-slate-200 hover:text-emerald-300 hover:border-emerald-400 transition-all font-semibold shadow-xs"
            title="LiveGood Clinic Portal"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xs:inline">LiveGood Clinic</span>
            <ExternalLink className="w-3 h-3 text-emerald-400/80" />
          </a>
        </div>
      </div>

      {/* Main Grid: Copy on Left, Media/VSL on Right (Desktop) | Mobile-First Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        
        {/* LEFT COLUMN: Headline, Subtitle, CTA, Micro-copy */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5">
          
          {/* TÍTULO PRINCIPAL (Promesa Clara Meta-Compliant) */}
          <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-[1.18] sm:leading-[1.15]">
            Ahorra hasta un{' '}
            <span className="text-emerald-400 relative inline-block whitespace-nowrap">
              75% en Suplementos Premium
              <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-emerald-500/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>{' '}
            o Construye un Negocio Global desde Casa por Solo $9.95/mes.
          </h1>

          {/* SUBTÍTULO DE REFUERZO */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl">
            Productos de calidad farmacéutica directos de fábrica, sin compras mensuales obligatorias ni contratos forzosos.
          </p>

          {/* MOBILE FAST CTA (Visible Immediately Above The Fold on Smartphones) */}
          <div className="w-full pt-1 sm:pt-2 flex flex-col items-stretch sm:items-start gap-2">
            
            {/* LLAMADO A LA ACCIÓN (CTA PRINCIPAL) */}
            <button
              onClick={handleCtaClick}
              className="w-full sm:w-auto btn-primary-emerald btn-primary-pulse group flex items-center justify-center gap-3 text-sm sm:text-base font-extrabold py-3.5 sm:py-4 px-6 sm:px-9 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-700 text-white shadow-[0_10px_30px_rgba(16,185,129,0.45)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.6)] transition-all transform active:scale-98"
              aria-label="Obtener mi membresía y ver catálogo oficial"
            >
              <span className="tracking-wide uppercase">OBTENER MI MEMBRESÍA Y VER CATÁLOGO</span>
              <span className="bg-white/20 p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </span>
            </button>

            {/* MICRO-COPY DE SEGURIDAD BAJO EL BOTÓN (Exact requirement) */}
            <p className="text-xs sm:text-sm text-emerald-300/90 font-semibold flex items-center justify-center sm:justify-start gap-1.5 pt-1">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Registro seguro • Cancela cuando quieras • Acceso inmediato</span>
            </p>

            {/* Secondary Action Link / Download Catalog */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
              <button
                onClick={handleCatalogClick}
                className="text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-4 flex items-center gap-1 transition-colors"
              >
                <span>Descargar Catálogo Completo (PDF)</span>
                <ExternalLink className="w-3 h-3" />
              </button>

              <span className="text-slate-600 hidden sm:inline">•</span>

              {onOpenConditions ? (
                <button
                  onClick={onOpenConditions}
                  className="text-slate-400 hover:text-white font-medium transition-colors"
                >
                  Condiciones y costos de membresía
                </button>
              ) : (
                <a
                  href="#faq"
                  className="text-slate-400 hover:text-white font-medium transition-colors"
                >
                  Condiciones y costos de membresía
                </a>
              )}
            </div>
          </div>

          {/* Quick Key Highlights */}
          <div className="pt-2 grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-lg border-t border-slate-800 text-center sm:text-left">
            <div className="bg-slate-900/90 rounded-2xl p-2.5 sm:p-3 border border-slate-800 shadow-sm">
              <span className="block text-xs sm:text-sm font-black text-white">$9.95 USD</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-tight">Membresía/mes</span>
            </div>
            <div className="bg-slate-900/90 rounded-2xl p-2.5 sm:p-3 border border-slate-800 shadow-sm">
              <span className="block text-xs sm:text-sm font-black text-emerald-400">0 Compras</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-tight">Sin compras forzadas</span>
            </div>
            <div className="bg-slate-900/90 rounded-2xl p-2.5 sm:p-3 border border-slate-800 shadow-sm">
              <span className="block text-xs sm:text-sm font-black text-white">190+ Países</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-tight">Cobertura global</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: ELEMENTO MULTIMEDIA (VSL Sales Video / Corporate Showcase) */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-3xl bg-slate-900 border border-emerald-500/30 shadow-[0_15px_45px_rgba(0,0,0,0.5)] overflow-hidden group">
            
            {/* Top Bar of Media Player */}
            <div className="bg-slate-950 px-4 py-2.5 flex items-center justify-between text-white text-xs border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                <span className="font-extrabold tracking-wide uppercase text-[11px] text-emerald-400">
                  Video Explicativo Oficial (VSL)
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">5 Minutos</span>
            </div>

            {/* Video Player Container (16:9 Aspect Ratio) */}
            <div className="relative aspect-video bg-black overflow-hidden">
              {isPlayingVideo ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${AFFILIATE_CONFIG.vslYoutubeId}?autoplay=1&rel=0`}
                  title="Presentación Oficial LiveGood"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <div 
                  onClick={() => setIsPlayingVideo(true)}
                  className="w-full h-full relative cursor-pointer group/media bg-gradient-to-tr from-slate-950 via-slate-900 to-[#072418] flex items-center justify-center"
                >
                  {/* Background Showcase Product Image */}
                  <img
                    src="/images/super-reds.png"
                    alt="LiveGood Productos Premium"
                    className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover/media:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/50"></div>

                  {/* Play Button & Call to Action Overlay */}
                  <div className="relative z-10 flex flex-col items-center text-center px-4">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,0.8)] group-hover/media:scale-110 group-hover/media:bg-emerald-400 transition-all duration-300">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                    </div>
                    <span className="mt-3 text-white font-extrabold text-sm sm:text-base drop-shadow-md">
                      Ver Video de Presentación
                    </span>
                    <span className="text-emerald-300 text-xs font-semibold drop-shadow">
                      Conoce el modelo de membresía y ahorro en 5 minutos
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Media Card Info: Asesor Johnny & Direct Help */}
            <div className="p-3.5 sm:p-4 bg-slate-950 flex items-center justify-between gap-3 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-emerald-500/40 flex-shrink-0">
                  <img
                    src="/images/johnny.png"
                    alt="Johnny - Asesor LiveGood"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-white">Johnny</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-[11px] text-slate-400">Asesor & Afiliado Independiente</p>
                </div>
              </div>

              <button
                onClick={handleJohnnyContact}
                className="px-3 py-1.5 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 hover:text-white text-[11px] font-bold border border-emerald-500/40 transition-colors flex items-center gap-1 flex-shrink-0"
              >
                <span>Dudas por WhatsApp</span>
              </button>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default AboveTheFoldHero;

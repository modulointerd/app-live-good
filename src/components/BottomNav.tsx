import React from 'react';
import { Home, TrendingDown, Gift, HelpCircle, ArrowRight } from 'lucide-react';
import { AFFILIATE_CONFIG } from '../constants/links';
import { trackAffiliateClick } from '../utils/analytics';

export type SectionNav = 'hero' | 'comparativa' | 'bonos' | 'faq';

interface BottomNavProps {
  activeSection?: SectionNav;
  onNavigateSection?: (section: SectionNav) => void;
}

export const BottomNav: React.FC<BottomNavProps> = () => {
  const handleCtaClick = () => {
    trackAffiliateClick('sticky_mobile', AFFILIATE_CONFIG.tourUrl);
    window.open(AFFILIATE_CONFIG.tourUrl, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-auto max-w-[96vw]">
      {/* Floating Pill Nav Bar */}
      <nav
        aria-label="Navegación principal inferior"
        className="glass-pill rounded-full p-1.5 px-2.5 sm:px-3.5 flex items-center gap-1.5 sm:gap-2.5 shadow-[0_12px_35px_rgba(9,55,37,0.22)] border border-emerald-500/30 bg-white/95 backdrop-blur-md"
      >
        {/* Button 1: Inicio */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold text-[#4a5d53] hover:text-[#093725] hover:bg-emerald-50 transition-colors"
          aria-label="Ir al inicio"
        >
          <Home className="w-3.5 h-3.5 text-emerald-600" />
          <span className="hidden xs:inline">Inicio</span>
        </button>

        {/* Button 2: Comparativa */}
        <button
          onClick={() => scrollToSection('comparativa')}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold text-[#4a5d53] hover:text-[#093725] hover:bg-emerald-50 transition-colors"
          aria-label="Ver comparativa de precios"
        >
          <TrendingDown className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ahorro</span>
        </button>

        {/* Button 3: Bonos */}
        <button
          onClick={() => scrollToSection('bonos')}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold text-[#4a5d53] hover:text-[#093725] hover:bg-emerald-50 transition-colors"
          aria-label="Ver bonos de afiliado"
        >
          <Gift className="w-3.5 h-3.5 text-emerald-600" />
          <span>Bonos</span>
        </button>

        {/* Button 4: FAQ */}
        <button
          onClick={() => scrollToSection('faq')}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold text-[#4a5d53] hover:text-[#093725] hover:bg-emerald-50 transition-colors"
          aria-label="Preguntas Frecuentes"
        >
          <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>FAQ</span>
        </button>

        {/* Floating High-Converting Direct CTA */}
        <button
          onClick={handleCtaClick}
          className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md transition-all active:scale-95 animate-pulse"
          aria-label="Membresía por $9.95 al mes"
        >
          <span>UNIRME $9.95</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </nav>
    </div>
  );
};

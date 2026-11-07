import React, { useState } from 'react';
import { Download, FileText, ArrowRight } from 'lucide-react';
import { LegalModal, type LegalTab } from './LegalModal';
import { AFFILIATE_CONFIG, getWhatsAppUrl } from '../constants/links';
import { trackCatalogClick, trackAffiliateClick, trackWhatsAppClick } from '../utils/analytics';

interface NavbarProps {
  onOpenCalculator?: () => void;
  onOpenLegal?: (tab: LegalTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLegal }) => {
  const [internalLegalTab, setInternalLegalTab] = useState<LegalTab | null>(null);

  const handleOpenConditions = () => {
    if (onOpenLegal) {
      onOpenLegal('condiciones');
    } else {
      setInternalLegalTab('condiciones');
    }
  };

  const handleCatalogClick = () => {
    trackCatalogClick('navbar');
  };

  const handleCtaClick = () => {
    trackAffiliateClick('navbar', AFFILIATE_CONFIG.tourUrl);
    window.open(AFFILIATE_CONFIG.tourUrl, '_blank', 'noopener,noreferrer');
  };

  const handleContactJohnny = () => {
    trackWhatsAppClick('navbar_modal');
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header className="w-full py-3 sm:py-3.5 px-4 sm:px-8 bg-slate-900/90 backdrop-blur-md sticky top-0 z-40 border-b border-emerald-500/20 transition-all shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Brand Logo matching official LiveGood identity */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="LiveGood - Inicio"
          >
            <img
              src="/images/livegood-logo-light.png"
              alt="LiveGood"
              className="h-7 sm:h-9 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
            <span className="hidden sm:inline-block ml-3 pl-3 border-l border-emerald-800 text-[11px] font-bold text-emerald-400">
              Johnny · Asesor Oficial
            </span>
          </div>

          {/* Quick Section Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-300">
            <a href="#comparativa" className="hover:text-emerald-400 transition-colors">
              Comparativa de Ahorro
            </a>
            <a href="#bonos" className="hover:text-emerald-400 transition-colors">
              Bonos de Afiliado
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">
              Preguntas Frecuentes
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleOpenConditions}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white bg-emerald-950/60 border border-emerald-800/80 hover:border-emerald-500 px-3.5 py-1.5 rounded-full transition-colors shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Condiciones</span>
            </button>

            <a
              href={AFFILIATE_CONFIG.catalogPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCatalogClick}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-white bg-slate-800 hover:bg-slate-700 border border-emerald-500/30 px-3.5 py-2 rounded-full transition-all"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>CATÁLOGO PDF</span>
            </a>

            <button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 px-3.5 sm:px-4 py-2 rounded-full shadow-md hover:shadow-emerald-500/25 transition-all active:scale-95 uppercase tracking-wide"
            >
              <span>MEMBRESÍA ($9.95)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Internal Legal Modal Fallback */}
      <LegalModal
        isOpen={internalLegalTab !== null}
        initialTab={internalLegalTab || 'condiciones'}
        onClose={() => setInternalLegalTab(null)}
        onContactJohnny={handleContactJohnny}
      />
    </>
  );
};

export default Navbar;

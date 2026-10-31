import React from 'react';
import { Download, FileText } from 'lucide-react';
import { type LegalTab } from './LegalModal';

const CATALOG_URL = 'https://drive.google.com/file/d/1KGsd9-1-XxLWdkWDu7HppS7myG4EIBJX/view?usp=sharing';

interface NavbarProps {
  onOpenCalculator?: () => void;
  onOpenLegal?: (tab: LegalTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLegal }) => {
  return (
    <header className="w-full py-3.5 px-4 sm:px-8 bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-emerald-900/5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo matching official LiveGood identity */}
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="LiveGood"
        >
          <img
            src="/images/livegood-logo.png"
            alt="LiveGood"
            className="h-8 sm:h-9 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenLegal && (
            <button
              onClick={() => onOpenLegal('condiciones')}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-[#093725] hover:text-emerald-700 bg-white border border-emerald-200/80 hover:border-emerald-400 px-3 py-1.5 rounded-full transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Condiciones de Membresía</span>
            </button>
          )}

          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>DESCARGAR CATÁLOGO</span>
          </a>
        </div>
      </div>
    </header>
  );
};

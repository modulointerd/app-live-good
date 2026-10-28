import React from 'react';
import { ShieldCheck, Download, FileText } from 'lucide-react';
import { type LegalTab } from './LegalModal';

const CATALOG_URL = 'https://drive.google.com/file/d/1l1bezloTk1p5Ru1yUzJFtUU3lsBj6MUM/view?usp=sharing';

interface NavbarProps {
  onOpenCalculator?: () => void;
  onOpenLegal?: (tab: LegalTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLegal }) => {
  return (
    <header className="w-full py-4 px-4 sm:px-8 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-emerald-900/5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo matching screenshot */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-black text-sm shadow-md group-hover:scale-105 transition-transform">
            LG
          </div>
          <div className="flex items-center text-2xl tracking-tight font-extrabold font-sans">
            <span className="text-[#093725]">LIVE</span>
            <span className="text-[#0fa968] flex items-center">
              GOOD
              <span className="w-2 h-2 rounded-full bg-[#0fa968] ml-0.5 animate-pulse inline-block"></span>
            </span>
          </div>
        </div>

        {/* Action Button & Live Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenLegal && (
            <button
              onClick={() => onOpenLegal('condiciones')}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-[#093725] hover:text-emerald-700 bg-white/90 border border-emerald-200/80 hover:border-emerald-400 px-3 py-1.5 rounded-full transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Condiciones de Membresía</span>
            </button>
          )}

          <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Información Verificada 2026</span>
          </div>

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

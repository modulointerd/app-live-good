import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator }) => {
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
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Sistema Verificado 2026</span>
          </div>

          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>CALCULAR</span>
          </button>
        </div>
      </div>
    </header>
  );
};

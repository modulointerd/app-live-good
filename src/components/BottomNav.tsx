import React from 'react';
import { Home, BarChart3, Package, ArrowRight, Sparkles } from 'lucide-react';

export type TabType = 'inicio' | 'ingresos' | 'productos' | 'miembros';

const PRE_REGISTRATION_URL = 'https://livegoodtour.com/JILSZO';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-auto max-w-[96vw]">
      {/* Floating Pill Nav Bar */}
      <div className="glass-pill rounded-full p-1.5 px-2 sm:px-3 flex items-center gap-1 sm:gap-2 shadow-[0_12px_35px_rgba(9,55,37,0.15)] border border-emerald-500/20">
        
        {/* Tab 1: Inicio */}
        <button
          onClick={() => onTabChange('inicio')}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            activeTab === 'inicio'
              ? 'bg-[#0fa968] text-white shadow-md'
              : 'text-[#4a5d53] hover:text-[#093725] hover:bg-slate-100/60'
          }`}
        >
          <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Inicio</span>
        </button>

        {/* Tab 2: Productos */}
        <button
          onClick={() => onTabChange('productos')}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            activeTab === 'productos'
              ? 'bg-[#0fa968] text-white shadow-md'
              : 'text-[#4a5d53] hover:text-[#093725] hover:bg-slate-100/60'
          }`}
        >
          <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Productos</span>
        </button>

        {/* Center Prominent Primary CTA */}
        <a
          href={PRE_REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-bottom-cta flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>ASEGURAR <span className="hidden sm:inline">MI </span>POSICIÓN</span>
          <ArrowRight className="w-3 h-3" />
        </a>

        {/* Tab 3: Ingresos */}
        <button
          onClick={() => onTabChange('ingresos')}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            activeTab === 'ingresos'
              ? 'bg-[#0fa968] text-white shadow-md'
              : 'text-[#4a5d53] hover:text-[#093725] hover:bg-slate-100/60'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Ingresos</span>
        </button>

      </div>
    </div>
  );
};

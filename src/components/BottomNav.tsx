import React from 'react';
import { Home, BarChart3, Package, Users } from 'lucide-react';

export type TabType = 'inicio' | 'ingresos' | 'productos' | 'miembros';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-auto max-w-[96vw]">
      {/* Floating Pill Nav Bar */}
      <nav
        aria-label="Navegación principal inferior"
        className="glass-pill rounded-full p-1.5 px-2 sm:px-3 flex items-center gap-1 sm:gap-2 shadow-[0_12px_35px_rgba(9,55,37,0.18)] border border-emerald-500/25 bg-white/95 backdrop-blur-md"
      >
        {/* Tab 1: Inicio */}
        <button
          onClick={() => onTabChange('inicio')}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            activeTab === 'inicio'
              ? 'bg-[#0fa968] text-white shadow-md'
              : 'text-[#4a5d53] hover:text-[#093725] hover:bg-slate-100/60'
          }`}
          aria-label="Ir a Inicio"
        >
          <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Inicio</span>
        </button>

        {/* Tab 2: Ingresos */}
        <button
          onClick={() => onTabChange('ingresos')}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            activeTab === 'ingresos'
              ? 'bg-[#0fa968] text-white shadow-md'
              : 'text-[#4a5d53] hover:text-[#093725] hover:bg-slate-100/60'
          }`}
          aria-label="Ir a Ingresos"
        >
          <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Ingresos</span>
        </button>

        {/* Tab 3: Productos */}
        <button
          onClick={() => onTabChange('productos')}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            activeTab === 'productos'
              ? 'bg-[#0fa968] text-white shadow-md'
              : 'text-[#4a5d53] hover:text-[#093725] hover:bg-slate-100/60'
          }`}
          aria-label="Ir a Productos"
        >
          <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Productos</span>
        </button>

        {/* Tab 4: Miembros */}
        <button
          onClick={() => onTabChange('miembros')}
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            activeTab === 'miembros'
              ? 'bg-[#0fa968] text-white shadow-md'
              : 'text-[#4a5d53] hover:text-[#093725] hover:bg-slate-100/60'
          }`}
          aria-label="Ir a Miembros"
        >
          <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Miembros</span>
        </button>
      </nav>
    </div>
  );
};

import React from 'react';
import { Home, BarChart3, Package, Users } from 'lucide-react';

export type TabType = 'inicio' | 'ingresos' | 'productos' | 'miembros';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-auto">
      
      {/* Top Header Tag matching screenshot */}
      <div className="bg-[#093725] text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full mb-1.5 shadow-md border border-emerald-500/30 animate-pulse">
        ANTES DE DECIDIR
      </div>

      {/* Floating Pill Nav Bar */}
      <div className="glass-pill rounded-full p-1.5 px-3 flex items-center gap-1 sm:gap-2 shadow-[0_12px_35px_rgba(9,55,37,0.15)] border border-emerald-500/20">
        
        {/* Tab 1: Inicio */}
        <button
          onClick={() => onTabChange('inicio')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            activeTab === 'inicio'
              ? 'bg-[#0fa968] text-white shadow-md'
              : 'text-[#4a5d53] hover:text-[#093725] hover:bg-slate-100/60'
          }`}
        >
          <Home className="w-4 h-4" />
          <span>Inicio</span>
        </button>

        {/* Tab 2: Ingresos */}
        <button
          onClick={() => onTabChange('ingresos')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            activeTab === 'ingresos'
              ? 'bg-[#0fa968] text-white shadow-md'
              : 'text-[#4a5d53] hover:text-[#093725] hover:bg-slate-100/60'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Ingresos</span>
        </button>

        {/* Tab 3: Productos */}
        <button
          onClick={() => onTabChange('productos')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            activeTab === 'productos'
              ? 'bg-[#0fa968] text-white shadow-md'
              : 'text-[#4a5d53] hover:text-[#093725] hover:bg-slate-100/60'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Productos</span>
        </button>

        {/* Tab 4: Miembros */}
        <button
          onClick={() => onTabChange('miembros')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            activeTab === 'miembros'
              ? 'bg-[#0fa968] text-white shadow-md'
              : 'text-[#4a5d53] hover:text-[#093725] hover:bg-slate-100/60'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Miembros</span>
        </button>

      </div>
    </div>
  );
};

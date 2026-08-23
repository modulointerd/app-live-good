import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { DollarSign, TrendingUp, Sparkles, Award } from 'lucide-react';

interface IncomeCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

export const IncomeCalculatorModal: React.FC<IncomeCalculatorProps> = ({
  isOpen,
  onClose,
  onRegisterClick
}) => {
  const [directReferrals, setDirectReferrals] = useState<number>(3);
  const [teamDepth, setTeamDepth] = useState<number>(4);

  // Live calculation formulas based on LiveGood matrix model
  // 1. Fast Start Bonus: $25 per direct referral
  const fastStartBonus = directReferrals * 25;

  // 2. Matrix Bonus: Up to $2,047.50 per month even without referrals, or up to $16,383.50 as Diamond
  const totalTeamMembers = Math.pow(2, teamDepth) * directReferrals;
  const monthlyMatrixIncome = Math.min(16383, Math.round(totalTeamMembers * 0.25 + (directReferrals * 12.5)));
  
  // 3. Matching bonus (50% matching on personal referrals' matrix check)
  const matchingBonus = Math.round(directReferrals * (monthlyMatrixIncome * 0.5));
  const totalMonthlyPotential = monthlyMatrixIncome + matchingBonus;

  useEffect(() => {
    if (isOpen && directReferrals >= 5) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  }, [isOpen, directReferrals]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-emerald-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-sm"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Simulador Oficial de Comisiones</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#093725]">
            Calculadora de Ingresos <span className="text-[#0fa968]">LiveGood</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5e7368]">
            Descubre cuánto puedes generar con una inversión única de $40 USD
          </p>
        </div>

        {/* Sliders Box */}
        <div className="space-y-6 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 mb-6">
          
          {/* Slider 1: Direct Referrals */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-bold text-[#093725] flex items-center gap-2">
                <span>Personas que invitas directamente:</span>
              </label>
              <span className="text-emerald-700 font-extrabold text-base bg-emerald-100 px-3 py-0.5 rounded-md">
                {directReferrals} {directReferrals === 1 ? 'persona' : 'personas'}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="20"
              value={directReferrals}
              onChange={(e) => setDirectReferrals(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0fa968]"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
              <span>0 (Solo Matriz)</span>
              <span>10 personas</span>
              <span>20+ personas</span>
            </div>
          </div>

          {/* Slider 2: Team Depth Level */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-bold text-[#093725]">
                Profundidad de Equipo en la Matriz 2x15:
              </label>
              <span className="text-emerald-700 font-extrabold text-base bg-emerald-100 px-3 py-0.5 rounded-md">
                Nivel {teamDepth}
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="12"
              value={teamDepth}
              onChange={(e) => setTeamDepth(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0fa968]"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
              <span>Nivel 1</span>
              <span>Nivel 6</span>
              <span>Nivel 12 (Máximo)</span>
            </div>
          </div>

        </div>

        {/* Live Earnings Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          
          {/* Card 1: Fast Start Bonus */}
          <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Bono de Inicio Rápido</span>
              <DollarSign className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-black text-[#093725]">
              ${fastStartBonus} <span className="text-xs font-semibold text-emerald-700">USD (Pago Único)</span>
            </div>
            <p className="text-[11px] text-emerald-700 mt-1 font-medium">
              Ganas $25 por cada persona directa que ingresa.
            </p>
          </div>

          {/* Card 2: Estimated Monthly Residual Income */}
          <div className="bg-gradient-to-br from-[#093725] to-[#0d5238] p-4 rounded-2xl text-white shadow-lg">
            <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Ingreso Residual Mensual</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-white">
              ${totalMonthlyPotential.toLocaleString()} <span className="text-xs font-semibold text-emerald-300">USD / mes</span>
            </div>
            <p className="text-[11px] text-emerald-200 mt-1 font-medium">
              Matriz residual de $0.25/mes por miembro + 50% Matching.
            </p>
          </div>

        </div>

        {/* Investment ROI Highlight */}
        <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 text-xs text-amber-900 flex items-center gap-2 mb-6 font-medium">
          <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span>
            {directReferrals >= 2 ? (
              <strong className="text-amber-800 font-bold">¡RECUPERACIÓN TOTAL! Con solo 2 referidos recuperas los $40 de tu membresía y el resto es ganancia neta.</strong>
            ) : (
              <span>Con solo 2 personas directas recuperas el 100% de tu inversión inicial de $40 USD.</span>
            )}
          </span>
        </div>

        {/* CTA */}
        <div className="space-y-3">
          <button
            onClick={() => {
              onClose();
              onRegisterClick();
            }}
            className="w-full btn-primary-emerald py-4 text-center justify-center font-extrabold text-base"
          >
            <span>RESERVAR MI POSICIÓN EN LA MATRIZ CON $40</span>
          </button>
          
          <p className="text-center text-xs text-slate-400">
            🔒 Inclusión oficial en la línea directa de Johnny
          </p>
        </div>

      </div>
    </div>
  );
};

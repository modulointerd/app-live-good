import React from 'react';
import { DollarSign, MessageCircle, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenCalculator: () => void;
  onContactJohnny: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator, onContactJohnny }) => {
  return (
    <section className="relative pt-6 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-teal-100/40 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column - Main Copy & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Active Members Badge */}
          <div className="badge-active-members animate-fade-in">
            <span className="badge-pulse-dot"></span>
            <span>+2 MILLONES DE MIEMBROS ACTIVOS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#093725] tracking-tight leading-[1.1] font-sans">
            El negocio que no <br />
            te pide que <span className="text-[#0fa968] relative inline-block">
              vendas
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#0fa968]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#4a5d53] font-medium max-w-xl leading-relaxed">
            Más de 2 millones de personas ya ganan dinero <strong className="text-[#093725] font-bold">sin salir de casa.</strong>
          </p>

          {/* Comisiones Reales Pill Badge */}
          <div className="pt-1">
            <span className="badge-comisiones flex items-center gap-1.5 shadow-sm">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Comisiones reales
            </span>
          </div>

          {/* CTA Button matching screenshot */}
          <div className="pt-2">
            <button
              onClick={onOpenCalculator}
              className="btn-primary-emerald group"
            >
              <span className="bg-white/20 p-1 rounded-full group-hover:rotate-12 transition-transform">
                <DollarSign className="w-5 h-5 text-white" />
              </span>
              <span>CALCULAR MIS INGRESOS</span>
            </button>
          </div>

          {/* Social Proof Quick Stats */}
          <div className="pt-4 flex items-center gap-6 text-xs sm:text-sm font-semibold text-[#5e7368]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Inversión única de $40</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Sin compras mensuales obligatorias</span>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Card matching Johnny */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-[0_15px_40px_rgba(9,55,37,0.08)] border border-emerald-900/10 hover:shadow-[0_20px_50px_rgba(9,55,37,0.14)] transition-all duration-300 relative group">
            
            {/* Soft Ambient Light inside Card */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>

            <div className="flex items-start gap-4">
              
              {/* Avatar with Verified Badge */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden ring-4 ring-emerald-500/20 shadow-md bg-emerald-50">
                  <img
                    src="/images/johnny.png"
                    alt="Johnny"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 shadow-md border-2 border-white" title="Líder Verificado">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              {/* Leader Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-extrabold text-[#093725] tracking-tight">
                  Johnny
                </h3>
                
                <div className="mt-1 inline-flex items-center gap-1.5 bg-emerald-50 text-[#0fa968] text-[11px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider border border-emerald-200/60">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>LÍDER DE EQUIPO - LIVEGOOD</span>
                </div>
              </div>
            </div>

            {/* Personal Statement */}
            <div className="mt-5 bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
              <p className="text-xs sm:text-sm text-[#3a4d43] leading-relaxed font-medium">
                "Entré a <strong className="text-[#093725]">LiveGood con $40</strong>. Hoy es mi fuente principal de ingresos. Te enseño exactamente cómo lo hice, paso a paso."
              </p>
            </div>

            {/* Link preview info badge */}
            <div className="mt-3 text-[11px] text-[#5e7368] flex items-center justify-between font-semibold px-1">
              <span>Sitio Oficial:</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                Johnnylivegood.com
              </span>
            </div>

            {/* Glowing Accent Bar */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent my-4 opacity-60"></div>

            {/* WhatsApp CTA Button */}
            <button
              onClick={onContactJohnny}
              className="btn-outline-whatsapp group"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>ESCRIBIR A JOHNNY (+51 900292484)</span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

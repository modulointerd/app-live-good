import React from 'react';
import { CheckCircle2, Sparkles, ArrowRight, FileText, Activity, ExternalLink, MessageCircle } from 'lucide-react';

interface HeroProps {
  onContactJohnny: () => void;
  onRegisterClick?: () => void;
  onOpenConditions?: () => void;
}

const PRE_REGISTRATION_URL = 'https://livegoodtour.com/JILSZO';

export const Hero: React.FC<HeroProps> = ({ onContactJohnny, onOpenConditions }) => {
  return (
    <section className="relative pt-6 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-teal-100/40 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>

      {/* Top Banner Row: Active Members Badge (Left) + 2 Quick Action Buttons (Right, matching user screenshot) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 animate-fade-in">
        {/* Active Members Badge */}
        <div className="badge-active-members self-start">
          <span className="badge-pulse-dot"></span>
          <span>+2 MILLONES DE MIEMBROS ACTIVOS</span>
        </div>

        {/* Action Buttons: Evaluación Personalizada + LiveGood Clinic */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Botón 1: Evaluación Personalizada */}
          <a
            href="https://www.myfreehealthreport.com/JILSZO"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-2xl bg-white hover:bg-emerald-50/70 border border-emerald-300/80 hover:border-emerald-500 text-left transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Activity className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#093725] leading-tight">
                  Desbloquea tu evaluación personalizada
                </span>
                <span className="text-[11px] font-medium text-emerald-700 leading-tight">
                  Es gratis y podría cambiar tu vida.
                </span>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-600/70 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
          </a>

          {/* Botón 2: LiveGood Clinic */}
          <a
            href="https://www.LiveGoodClinic.com/JILSZO"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-2xl bg-white hover:bg-emerald-50/70 border border-emerald-300/80 hover:border-emerald-500 text-left transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#093725] leading-tight">
                Impulsa tu camino hacia el bienestar.
              </span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-600/70 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column - Main Copy & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">

          {/* Main Headline — Neutral y Transparente conforme a Políticas Publicitarias de Meta */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#093725] tracking-tight leading-[1.15] font-sans">
            Conoce LiveGood:{' '}
            <span className="text-[#0fa968] relative inline-block">
              productos de bienestar
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#0fa968]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>{' '}
            y una oportunidad de afiliación
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#1e342a] font-semibold max-w-xl leading-relaxed">
            Explora el catálogo de productos de bienestar, consulta las condiciones de la membresía y conoce cómo funciona el programa de afiliación.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href={PRE_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-emerald btn-primary-pulse group flex items-center justify-center gap-2"
            >
              <span className="bg-white/20 p-1 rounded-full group-hover:rotate-12 transition-transform">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
              <span>CONOCER MÁS / REGISTRARME</span>
            </a>

            {onOpenConditions ? (
              <button
                onClick={onOpenConditions}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-emerald-300 bg-white/80 hover:bg-emerald-50 text-[#093725] text-xs sm:text-sm font-bold transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Ver condiciones y costos</span>
              </button>
            ) : (
              <a
                href="#condiciones-membresia"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-emerald-300 bg-white/80 hover:bg-emerald-50 text-[#093725] text-xs sm:text-sm font-bold transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Ver condiciones y costos</span>
              </a>
            )}
          </div>

          {/* Certainty Microcopy */}
          <div className="certainty-badges">
            <span className="certainty-badge">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Sin contratos de permanencia
            </span>
            <span className="certainty-badge">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Transparencia en precios y cuotas
            </span>
            <span className="certainty-badge">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Soporte directo por WhatsApp
            </span>
          </div>

          {/* Social Proof Quick Stats */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-[#5e7368]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Membresía $9.95 USD/mes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Afiliación $40 USD (opcional)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Disponible en 190+ países</span>
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
                  <span>ASESOR · AFILIADO INDEPENDIENTE</span>
                </div>
              </div>
            </div>

            {/* Personal Statement */}
            <div className="mt-5 bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
              <p className="text-xs sm:text-sm text-[#3a4d43] leading-relaxed font-medium">
                "En <strong className="text-[#093725]">LiveGood</strong> encontré una forma accesible de consumir productos de bienestar con descuento directo y desarrollar un proyecto de afiliación independiente. Te brindo información objetiva para evaluar tus opciones."
              </p>
            </div>

            {/* Team Support Bullets */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#3a4d43] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Capacitaciones semanales y orientación continua</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#3a4d43] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Recursos y herramientas de difusión claras</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#3a4d43] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Acompañamiento personalizado por WhatsApp</span>
              </div>
            </div>

            {/* Glowing Accent Bar */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent my-4 opacity-60"></div>

            {/* WhatsApp CTA Button — Secondary */}
            <button
              onClick={onContactJohnny}
              className="btn-outline-whatsapp group"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>RESOLVER MIS DUDAS POR WHATSAPP</span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

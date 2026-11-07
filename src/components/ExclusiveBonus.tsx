import React from 'react';
import { Gift, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Sparkles, BookOpen, Users, Rocket } from 'lucide-react';
import { AFFILIATE_CONFIG, getWhatsAppUrl } from '../constants/links';
import { trackAffiliateClick, trackWhatsAppClick } from '../utils/analytics';

interface ExclusiveBonusProps {
  onContactJohnny?: () => void;
}

export const ExclusiveBonus: React.FC<ExclusiveBonusProps> = ({ onContactJohnny }) => {
  const handleCtaClick = () => {
    trackAffiliateClick('exclusive_bonus', AFFILIATE_CONFIG.tourUrl);
    window.open(AFFILIATE_CONFIG.tourUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppHelp = () => {
    if (onContactJohnny) {
      onContactJohnny();
    } else {
      trackWhatsAppClick('exclusive_bonus_card');
      window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  const bonuses = [
    {
      icon: Users,
      badge: 'Bono #1 · Soporte Continuo',
      title: 'Acceso al Grupo Privado VIP de WhatsApp & Telegram',
      description: 'Únete a nuestra comunidad exclusiva de miembros donde resolvemos preguntas en tiempo real, compartimos tips de consumo y testimonios reales de bienestar.',
      value: 'Valor estimado: $97 USD'
    },
    {
      icon: BookOpen,
      badge: 'Bono #2 · Guía Paso a Paso',
      title: 'Guía Digital de Bienvenida y Arranque Rápido',
      description: 'Manual digital interactivo que te enseña cómo navegar tu oficina virtual, cómo pedir tus suplementos al menor precio de fábrica y cómo maximizar el ahorro.',
      value: 'Valor estimado: $49 USD'
    },
    {
      icon: Rocket,
      badge: 'Bono #3 · Herramientas Listas',
      title: 'Embudos de Prospección y Materiales de Difusión',
      description: 'Si decides emprender, tendrás acceso a páginas de captura, creativos y textos listos para usar sin necesidad de saber programar ni diseñar desde cero.',
      value: 'Valor estimado: $97 USD'
    },
    {
      icon: MessageCircle,
      badge: 'Bono #4 · Mentoría Directa',
      title: 'Asesoría y Orientación Inicial 1 a 1 con Johnny',
      description: 'Acompañamiento personalizado directo por WhatsApp (+51 900292484) para resolver cualquier inquietud antes, durante y después de tu registro.',
      value: 'Valor estimado: $54 USD'
    }
  ];

  return (
    <section id="bonos" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Outer Card with High-Impact Gradient Border */}
      <div className="relative rounded-[2.5rem] bg-gradient-to-b from-emerald-600/40 via-emerald-800/20 to-slate-900 p-1 sm:p-1.5 shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden">
        
        {/* Soft Ambient Lights inside Card */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 bg-slate-950/95 rounded-[2.35rem] p-6 sm:p-10 lg:p-12 text-white">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-12">
            
            <div className="inline-flex items-center gap-2 bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
              <Gift className="w-4 h-4 text-emerald-400" />
              <span>Factor Diferenciador · Bono de Afiliado</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Regístrate con Mi Enlace y Llévate Este Pack Exclusivo{' '}
              <span className="text-emerald-400">100% Gratis</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              No empieces en solitario. Al unirte al equipo oficial de <strong>Johnny</strong>, recibes herramientas y soporte directo para acelerar tus resultados desde el primer minuto.
            </p>

            {/* Total Value Pill */}
            <div className="inline-block pt-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-black">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>Valor Total de Bonos: $297 USD — ¡Tuyo por $0 adicionales!</span>
              </span>
            </div>

          </div>

          {/* 4 Bonuses Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
            {bonuses.map((bonus, idx) => {
              const Icon = bonus.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl p-6 sm:p-7 bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full">
                        {bonus.badge}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">
                        {bonus.value}
                      </span>
                    </div>

                    <div className="flex items-start gap-4 mt-2 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {bonus.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-0 sm:pl-16">
                      {bonus.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Incluido sin costo con tu registro</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mentor Profile Callout & Big Action */}
          <div className="rounded-3xl bg-slate-900 border border-emerald-500/30 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            
            <div className="flex items-center gap-4 text-left">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-4 ring-emerald-500/40 shadow-lg flex-shrink-0 bg-emerald-950">
                <img
                  src="/images/johnny.png"
                  alt="Johnny Asesor LiveGood"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                  Tu Mentor y Asesor Directo
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">Johnny</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-md">
                  "Mi compromiso es que tengas claridad total, aproveches los precios de fábrica y cuentes con respaldo real en cada paso."
                </p>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              
              <button
                onClick={handleCtaClick}
                className="btn-primary-emerald btn-primary-pulse py-4 px-8 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/40"
              >
                <span>OBTENER MI MEMBRESÍA Y ACTIVAR BONOS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppHelp}
                className="px-5 py-4 rounded-full border border-emerald-500/40 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Consultar con Johnny</span>
              </button>

            </div>

          </div>

          {/* Security Notice Under Bonus */}
          <div className="mt-6 text-center text-xs text-slate-400 font-medium flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Los bonos se activan inmediatamente una vez completado el registro oficial de membresía.</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ExclusiveBonus;

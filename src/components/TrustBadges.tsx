import React from 'react';
import { ShieldCheck, Award, Users, RefreshCw, CheckCircle, FileCheck } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const trustItems = [
    {
      icon: FileCheck,
      title: 'Certificación de Laboratorio',
      subtitle: 'Pruebas de Terceros',
      description: 'Cada lote es analizado por laboratorios independientes. Certificados de Análisis (COA) públicos para máxima transparencia.'
    },
    {
      icon: Award,
      title: 'Pureza Garantizada',
      subtitle: 'Estándares cGMP & Non-GMO',
      description: 'Ingredientes 100% orgánicos y de grado farmacéutico, libres de rellenos artificiales, gluten y metales pesados.'
    },
    {
      icon: Users,
      title: 'Comunidad Global Activa',
      subtitle: '+2 Millones de Miembros',
      description: 'Presencia consolidada en más de 190 países. Consumidores y afiliados compartiendo testimonios verificados a diario.'
    },
    {
      icon: RefreshCw,
      title: 'Garantía de 90 Días',
      subtitle: 'Política "Empty Bottle"',
      description: 'Prueba los productos sin riesgo. Si no quedas satisfecho, devuelves el envase totalmente vacío para un reembolso completo.'
    }
  ];

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-y border-emerald-900/30 bg-slate-900/60 backdrop-blur-sm rounded-3xl my-6 shadow-xl">

      {/* Small Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Barra de Confianza y Sellos de Calidad</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Estándares Internacionales de Máxima Credibilidad
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Respaldado por la ciencia, producido con los controles más estrictos de Estados Unidos y auditado por terceros.
        </p>
      </div>

      {/* 4 Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl p-5 bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-sm font-extrabold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verificado & Certificado</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Country Flags Ticker */}
      <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-bold text-slate-200">Envíos directos a más de 190 países:</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 font-semibold text-slate-300">
          <span>🇺🇸 Estados Unidos</span>
          <span>🇲🇽 México</span>
          <span>🇵🇪 Perú</span>
          <span>🇨🇴 Colombia</span>
          <span>🇨🇱 Chile</span>
          <span>🇪🇸 España</span>
          <span>🇪🇨 Ecuador</span>
          <span>Y 185+ naciones más</span>
        </div>
      </div>

    </section>
  );
};

export default TrustBadges;

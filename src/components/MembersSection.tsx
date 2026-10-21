import React from 'react';
import { MessageCircle, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

const PRE_REGISTRATION_URL = 'https://livegoodtour.com/JILSZO';

interface MembersProps {
  onContactJohnny: () => void;
}

export const MembersSection: React.FC<MembersProps> = ({ onContactJohnny }) => {
  return (
    <section id="register-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="bg-[#e7f7ee] rounded-[2rem] overflow-hidden shadow-[0_25px_70px_rgba(15,169,104,0.14)] border border-emerald-100">
        <div className="bg-gradient-to-br from-[#0f5d3d] to-[#0c4b35] px-8 py-10 text-center text-white">
          <div className="mx-auto mb-5 h-28 w-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src="/images/johnny.png" alt="Johnny" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200 font-bold mb-3">
            Tu Mentor en LiveGood
          </p>
          <h2 className="text-3xl sm:text-4xl font-black leading-tight">
            Johnny
          </h2>
          <p className="text-sm text-emerald-200 mt-2">
            Emprendedor Moderno · Líder de Equipo LiveGood
          </p>
        </div>

        <div className="p-8 bg-white">
          {/* Team Support Highlights — Maleta 3: Certeza */}
          <div className="rounded-[2rem] border border-emerald-100 bg-[#f3fdf8] p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#093725] mb-4 text-center">Lo que recibes al unirte al equipo</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-sm text-[#3a4d43] font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#093725]">Capacitaciones semanales en vivo</strong> con estrategias actualizadas de crecimiento.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#3a4d43] font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#093725]">Embudos de captación listos</strong> para que no empieces de cero.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#3a4d43] font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#093725]">Acompañamiento paso a paso</strong> personalizado por WhatsApp.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#3a4d43] font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#093725]">Comunidad activa</strong> de emprendedores modernos apoyándose mutuamente.</span>
              </div>
            </div>

            {/* Certainty Badges — Maleta 3 */}
            <div className="certainty-badges mb-6">
              <span className="certainty-badge">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                Sin contratos de permanencia
              </span>
              <span className="certainty-badge">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                Transparencia total en pagos
              </span>
              <span className="certainty-badge">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                Soporte directo por WhatsApp
              </span>
            </div>

            {/* Primary CTA — Unified */}
            <a
              href={PRE_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary-emerald btn-primary-pulse text-center justify-center py-4"
            >
              <ArrowRight className="w-5 h-5" />
              ASEGURAR MI POSICIÓN AHORA
            </a>

            <p className="text-center text-[11px] text-[#5e7368] mt-3 font-medium">
              🔒 Registro oficial · Membresía $9.95/mes · Afiliación $40 USD (opcional) · Sin permanencia
            </p>
          </div>

          {/* Secondary: WhatsApp for questions */}
          <button
            onClick={onContactJohnny}
            className="mt-6 w-full inline-flex items-center justify-center gap-3 rounded-full border-2 border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 py-3.5 text-sm font-bold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            ¿Tienes dudas? Escribe a Johnny por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

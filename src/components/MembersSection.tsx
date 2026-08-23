import React from 'react';
import { MessageCircle } from 'lucide-react';

interface MembersProps {
  onContactJohnny: () => void;
}

export const MembersSection: React.FC<MembersProps> = ({ onContactJohnny }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="bg-[#e7f7ee] rounded-[2rem] overflow-hidden shadow-[0_25px_70px_rgba(15,169,104,0.14)] border border-emerald-100">
        <div className="bg-gradient-to-br from-[#0f5d3d] to-[#0c4b35] px-8 py-10 text-center text-white">
          <div className="mx-auto mb-5 h-28 w-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src="/images/johnny.png" alt="Johnny" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200 font-bold mb-3">
            Equipo Johnny LiveGood
          </p>
          <h2 className="text-3xl sm:text-4xl font-black leading-tight">
            Johnny
          </h2>
          <p className="text-sm text-emerald-200 mt-2">
            Líder de Equipo LiveGood
          </p>
        </div>

        <div className="p-8 bg-white">
          <div className="rounded-[2rem] border border-emerald-100 bg-[#f3fdf8] p-8 text-center">
            <div className="inline-flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto shadow-sm">
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                <path d="M12 1.75a6.25 6.25 0 0 0-6.25 6.25v3.79a.75.75 0 0 1-1.5 0V8A7.75 7.75 0 0 1 12 .25a7.75 7.75 0 0 1 7.75 7.75v3.79a.75.75 0 0 1-1.5 0V8A6.25 6.25 0 0 0 12 1.75Z" />
                <path d="M17.75 12.5a.75.75 0 0 0-.75.75v3.5A4.75 4.75 0 0 1 12.25 21h-1.5A4.75 4.75 0 0 1 6 16.75v-3.5a.75.75 0 0 0-1.5 0v3.5A6.25 6.25 0 0 0 12.75 22h1.5A6.25 6.25 0 0 0 20.5 15.75v-3.5a.75.75 0 0 0-.75-.75Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#093725] mb-3">Zona Exclusiva del Equipo</h3>
            <p className="text-sm text-[#4a5d3f] leading-relaxed">
              Aquí se construye la libertad financiera. <br /> ¿Quieres ser parte?
            </p>
          </div>

          <button
            onClick={onContactJohnny}
            className="mt-8 w-full inline-flex items-center justify-center gap-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-sm font-bold transition-shadow shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Quiero unirme al equipo
          </button>
        </div>
      </div>
    </section>
  );
};

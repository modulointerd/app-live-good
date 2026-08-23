import React from 'react';
import { HeartPulse, Download, ExternalLink } from 'lucide-react';

interface ProductsProps {
  onRegisterClick?: () => void;
}

const STORE_URL = 'https://www.LiveGood.com/JILSZO';
const CATALOG_URL = 'https://drive.google.com/file/d/1l1bezloTk1p5Ru1yUzJFtUU3lsBj6MUM/view?usp=sharing';
const PRODUCT_VIDEO_URL = 'https://www.youtube-nocookie.com/embed/l4lycwQRqmE?autoplay=0&rel=0';
const WHATSAPP_URL = 'https://wa.me/51900292484?text=Hola%20Johnny%2C%20quiero%20informaci%C3%B3n%20sobre%20LiveGood%20y%20tu%20equipo.';
const PRE_REGISTRATION_URL = 'https://livegoodtour.com/JILSZO';

export const ProductsSection: React.FC<ProductsProps> = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Header with profile */}
      <div className="rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#0f5d3e] to-[#093725] p-8 text-white shadow-2xl mb-10">
        <div className="max-w-4xl mx-auto grid gap-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-3xl sm:text-4xl font-black tracking-tight">LIVE GOOD</div>
            <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
              <img src="/images/johnny.png" alt="Johnny" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-3xl font-black">Johnny</h1>
              <p className="text-sm text-emerald-200 uppercase tracking-[0.24em]">Líder de Equipo LiveGood</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] items-start">
        <div className="rounded-3xl bg-white border border-emerald-100 shadow-[0_20px_50px_rgba(15,169,104,0.08)] overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.24em] mb-6">
              <HeartPulse className="w-4 h-4 text-emerald-600" />
              La mayor calidad al precio más bajo
            </div>

            <div className="rounded-[2rem] overflow-hidden bg-slate-50 p-6 mb-6 border border-emerald-100">
              <img
                src="/images/super-reds.png"
                alt="Productos LiveGood"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-700 font-bold mb-3">Paso 1</p>
                <p className="text-sm text-[#093725] leading-7">
                  Obtén el PDF de productos completo con precios de fábrica.
                </p>
              </div>

              <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-700 font-bold mb-3">Paso 2</p>
                <p className="text-sm text-[#093725] leading-7">
                  Contáctame por WhatsApp para resolver tus dudas: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-[#0f6f42] hover:underline">Escribirme ahora</a>.
                </p>
              </div>

              <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-700 font-bold mb-3">Paso 3</p>
                <p className="text-sm text-[#093725] leading-7">
                  Gana salud consumiendo y dinero recomendando.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-100 p-6 sm:p-8 bg-[#f7fdf6]">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0f5d3e] text-white py-4 text-sm font-bold transition hover:bg-[#134d37]"
              >
                <Download className="w-4 h-4" />
                DESCARGAR CATÁLOGO
              </a>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300 bg-white text-[#0f5d3e] py-4 text-sm font-bold transition hover:bg-emerald-50"
              >
                <ExternalLink className="w-4 h-4" />
                IR A LA TIENDA VIRTUAL
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-emerald-100 p-6 shadow-[0_20px_50px_rgba(15,169,104,0.08)]">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-500 font-bold">Ingreso mensual estimado</p>
                <p className="text-4xl sm:text-5xl font-black text-[#093725] mt-4">$115</p>
                <p className="text-sm text-[#5e7368] mt-2">COP 480,900</p>
              </div>
              <div className="rounded-3xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-center">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-600 font-bold">Modelo de ingreso</p>
                <p className="text-sm text-[#093725] font-semibold mt-2">Matriz + bonos + duplicación</p>
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden border border-emerald-100 bg-black shadow-lg">
              <div className="relative aspect-video">
                <iframe
                  src={PRODUCT_VIDEO_URL}
                  title="Video explicativo de LiveGood"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300 bg-white text-[#0f5d3e] py-4 text-sm font-bold transition hover:bg-emerald-50"
              >
                <ExternalLink className="w-4 h-4" />
                IR A LA TIENDA VIRTUAL
              </a>
              <button
                onClick={() => window.open(PRE_REGISTRATION_URL, '_blank')}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0f5d3e] text-white py-4 text-sm font-bold transition hover:bg-[#134d37]"
              >
                <Download className="w-4 h-4" />
                PRE-REGISTRARME GRATIS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Star, Search, Quote, ArrowRight } from 'lucide-react';

const PRE_REGISTRATION_URL = 'https://livegoodtour.com/JILSZO';

interface TestimonialItem {
  id: string;
  name: string;
  rank: 'DIAMANTE' | 'PLATA' | 'BRONCE';
  rankClass: string;
  image: string;
  before: string;
  quote: string;
  location: string;
  earnings: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 'pedro',
    name: 'Pedro Suárez',
    rank: 'DIAMANTE',
    rankClass: 'rank-diamante',
    image: '/images/pedro.png',
    before: 'Cansado de trabajar 12 horas sin ver crecimiento real.',
    quote: 'Invertí $40 dólares. El primer mes recuperé la inversión. Hoy es mi ingreso principal y trabajo desde la comodidad de mi hogar o desde cualquier parte del mundo.',
    location: 'Bogotá, Colombia',
    earnings: '$4,200+/mes'
  },
  {
    id: 'esther',
    name: 'Dra. Esther Molinaros Rodríguez',
    rank: 'PLATA',
    rankClass: 'rank-plata',
    image: '/images/esther.png',
    before: 'Escéptica de las redes tradicionales por los precios inflados.',
    quote: 'Descubrí un modelo de salud integral con precios reales. Hoy tengo un negocio internacional que me genera ingresos incluso mientras descanso.',
    location: 'Ciudad de México, México',
    earnings: '$1,850+/mes'
  },
  {
    id: 'veronica',
    name: 'Verónica Sepúlveda',
    rank: 'BRONCE',
    rankClass: 'rank-bronce',
    image: '/images/veronica.png',
    before: 'No quería vender nada por catálogo ni presionar a mi familia.',
    quote: 'Ahorro $100/mes en mis suplementos y genero un ingreso constante. Los productos se recomiendan solos, no tuve que convencer a nadie.',
    location: 'Santiago, Chile',
    earnings: '$950+/mes'
  }
];

export const Testimonials: React.FC = () => {
  const [activeModal, setActiveModal] = useState<TestimonialItem | null>(null);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header — Maleta 4: Prueba Social */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-sm">
          <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
          <span>Historias reales de transformación</span>
        </div>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#093725] max-w-2xl mx-auto leading-tight">
          Consumidores inteligentes que construyeron un <span className="text-[#0fa968]">ingreso extra real</span>
        </h2>
      </div>

      {/* 3 Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonialsData.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModal(item)}
            className="testimonial-card cursor-pointer group"
          >
            {/* Header Image with Zoom Icon */}
            <div className="card-header-image">
              <img
                src={item.image}
                alt={item.name}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="card-image-overlay"></div>
              
              <div className="card-zoom-icon group-hover:bg-emerald-600 transition-colors">
                <Search className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Body */}
            <div className="card-body">
              <div>
                <div className="card-author-row">
                  <h3 className="card-author-name">{item.name}</h3>
                  <span className={`rank-badge ${item.rankClass}`}>
                    {item.rank}
                  </span>
                </div>

                {/* Before state — Transformation narrative */}
                <p className="text-[11px] text-red-500/80 font-semibold mb-2 leading-snug">
                  Antes: {item.before}
                </p>

                <p className="card-quote">
                  "{item.quote}"
                </p>
              </div>

              {/* Extra details on hover */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#5e7368] font-medium">
                <span>{item.location}</span>
                <span className="text-emerald-700 font-extrabold bg-emerald-50 px-2 py-0.5 rounded">
                  {item.earnings}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Income Disclaimer banner to comply with Meta advertising guidelines */}
      <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto">
        <p className="text-[11px] text-[#5e7368] leading-relaxed">
          * <strong>Aviso legal sobre testimonios e ingresos:</strong> Las experiencias compartidas corresponden a resultados individuales y no representan una garantía de ingresos. En el programa de afiliación de LiveGood, las ganancias dependen exclusivamente de las ventas generadas y del tiempo, habilidades y dedicación de cada persona.
        </p>
      </div>

      {/* Modal preview when clicking card */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl border border-emerald-100">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-4">
              <img
                src={activeModal.image}
                alt={activeModal.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500 shadow-md"
              />
              <div>
                <h3 className="text-lg font-bold text-[#093725]">{activeModal.name}</h3>
                <span className={`rank-badge ${activeModal.rankClass} inline-block mt-1`}>
                  RANGO {activeModal.rank}
                </span>
              </div>
            </div>

            {/* Before state highlight */}
            <div className="bg-red-50/60 rounded-xl p-3 border border-red-100 mb-3">
              <p className="text-xs text-red-600 font-semibold">
                ❌ Antes: {activeModal.before}
              </p>
            </div>

            <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100 mb-6">
              <Quote className="w-6 h-6 text-emerald-600 mb-2 opacity-50" />
              <p className="text-sm text-[#093725] font-medium leading-relaxed italic">
                ✅ "{activeModal.quote}"
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#4a5d53] mb-6">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Ubicación:</span>
                <strong className="text-slate-800">{activeModal.location}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Inversión Inicial:</span>
                <strong className="text-emerald-700 font-bold">$40 USD</strong>
              </div>
              <div className="flex justify-between py-1">
                <span>Promedio mensual:</span>
                <strong className="text-emerald-600 font-extrabold">{activeModal.earnings}</strong>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 italic mb-4 text-center">
              * Nota: Ejemplo ilustrativo de experiencia individual. No garantiza ingresos futuros.
            </p>

            {/* Unified CTA */}
            <a
              href={PRE_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary-emerald text-center justify-center"
            >
              <ArrowRight className="w-5 h-5" />
              ASEGURAR MI POSICIÓN AHORA
            </a>
          </div>
        </div>
      )}

    </section>
  );
};

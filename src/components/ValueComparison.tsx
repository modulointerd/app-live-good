import React, { useState } from 'react';
import { Check, X, ArrowRight, Download, Sparkles, TrendingDown } from 'lucide-react';
import { AFFILIATE_CONFIG } from '../constants/links';
import { trackAffiliateClick, trackCatalogClick } from '../utils/analytics';

interface ProductCompare {
  id: string;
  name: string;
  category: string;
  image: string;
  liveGoodPrice: number;
  marketPrice: number;
  competitorBrand: string;
  keyBenefits: string[];
}

const productsToCompare: ProductCompare[] = [
  {
    id: 'super-reds',
    name: 'Organic Super Reds',
    category: 'Salud Cardiovascular & Energía',
    image: '/images/super-reds.png',
    liveGoodPrice: 18.00,
    marketPrice: 69.95,
    competitorBrand: 'SuperBeets / Marcas Premium',
    keyBenefits: [
      'Ingredientes 100% orgánicos certificados USDA',
      'Óxido nítrico natural para óptima circulación',
      'Certificados de análisis de laboratorio público'
    ]
  },
  {
    id: 'cbd-oil',
    name: 'Aceite de CBD 750mg',
    category: 'Relajación & Bienestar Integral',
    image: '/images/super-reds.png',
    liveGoodPrice: 18.00,
    marketPrice: 79.95,
    competitorBrand: 'Charlotte\'s Web / Marcas Retail',
    keyBenefits: [
      'Cáñamo cultivado en EE.UU. 100% puro',
      'Extracción limpia libre de solventes y pesticidas',
      'Absorción rápida con aceite portador MCT orgánico'
    ]
  },
  {
    id: 'multivitamin',
    name: 'Bio-Active Multivitamin',
    category: 'Inmunidad & Nutrición Diaria',
    image: '/images/super-reds.png',
    liveGoodPrice: 9.95,
    marketPrice: 34.00,
    competitorBrand: 'Centrum / GNC Mega Men',
    keyBenefits: [
      '24 vitaminas y minerales de máxima biodisponibilidad',
      'Formulado para absorberse eficazmente sin malestar',
      'Calidad farmacéutica a fracción de costo de farmacia'
    ]
  },
  {
    id: 'magnesium',
    name: 'Ultra Magnesium Complex',
    category: 'Músculos, Sueño & Sistema Nervioso',
    image: '/images/super-reds.png',
    liveGoodPrice: 8.95,
    marketPrice: 29.00,
    competitorBrand: 'Calm / Solgar Magnesium',
    keyBenefits: [
      'Complejo dual: Glicinato y Gluconato de Magnesio',
      'Mejora la calidad del descanso y recuperación',
      'Cero laxantes ni aditivos de baja calidad'
    ]
  }
];

export const ValueComparison: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>('super-reds');

  const selectedProduct = productsToCompare.find(p => p.id === selectedProductId) || productsToCompare[0];
  const totalSavings = selectedProduct.marketPrice - selectedProduct.liveGoodPrice;
  const percentageSavings = Math.round((totalSavings / selectedProduct.marketPrice) * 100);

  const handleCtaClick = () => {
    trackAffiliateClick('value_comparison', AFFILIATE_CONFIG.tourUrl);
    window.open(AFFILIATE_CONFIG.tourUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCatalogDownload = () => {
    trackCatalogClick('value_comparison_pdf');
    window.open(AFFILIATE_CONFIG.catalogPdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="comparativa" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <TrendingDown className="w-4 h-4 text-emerald-400" />
          <span>Comparativa de Valor · Rompiendo Objeciones</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          La Misma Calidad Farmacéutica.{' '}
          <span className="text-emerald-400">Hasta 75% Menos Dinero.</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Comprueba visualmente la diferencia de precios entre LiveGood y las marcas convencionales de la industria. No pagues sobreprecios por intermediarios ni publicidad de retail.
        </p>
      </div>

      {/* Interactive Product Selector Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {productsToCompare.map((prod) => (
          <button
            key={prod.id}
            onClick={() => setSelectedProductId(prod.id)}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
              selectedProductId === prod.id
                ? 'bg-emerald-600 text-white shadow-md scale-102 ring-2 ring-emerald-400/50'
                : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <span>{prod.name}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
              selectedProductId === prod.id ? 'bg-white/20 text-white' : 'bg-emerald-950 text-emerald-400 border border-emerald-800/60'
            }`}>
              -${Math.round(prod.marketPrice - prod.liveGoodPrice)} USD
            </span>
          </button>
        ))}
      </div>

      {/* Featured Side-by-Side Comparison Card */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Banner with Direct Savings Math */}
        <div className="bg-gradient-to-r from-slate-950 via-[#072d1f] to-emerald-700 p-4 sm:p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold block">
              {selectedProduct.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              {selectedProduct.name}
            </h3>
          </div>

          <div className="bg-slate-950/70 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-emerald-500/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-400 text-slate-950 flex items-center justify-center font-black text-lg">
              %
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">Ahorro Directo</p>
              <p className="text-lg sm:text-xl font-black text-white">
                {percentageSavings}% de descuento (Ahorras ${totalSavings.toFixed(2)} USD)
              </p>
            </div>
          </div>
        </div>

        {/* Side-by-Side Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          
          {/* Column 1: LiveGood (The Winner) */}
          <div className="p-6 sm:p-8 bg-slate-900/90 flex flex-col justify-between relative">
            <div className="absolute top-4 right-4 bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Elección Inteligente
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/images/livegood-logo-light.png"
                  alt="LiveGood"
                  className="h-6 w-auto object-contain"
                />
                <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">
                  Precio de Miembro
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-black text-white">
                  ${selectedProduct.liveGoodPrice.toFixed(2)}
                </span>
                <span className="text-sm font-bold text-slate-400 uppercase">USD</span>
              </div>

              <p className="text-xs text-emerald-400 font-semibold mb-6">
                Directo de fábrica por suscripción de $9.95/mes.
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                ¿Qué obtienes con LiveGood?
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                {selectedProduct.keyBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="font-semibold text-emerald-300">Garantía Empty Bottle de 90 días</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={handleCtaClick}
                className="w-full btn-primary-emerald py-3.5 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2"
              >
                <span>OBTENER A PRECIO DE FÁBRICA ($ {selectedProduct.liveGoodPrice.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Marcas Tradicionales del Mercado */}
          <div className="p-6 sm:p-8 bg-slate-950/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Marcas Convencionales de Tienda / MLM Antiguo
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-500 line-through decoration-red-400 decoration-3">
                  ${selectedProduct.marketPrice.toFixed(2)}
                </span>
                <span className="text-sm font-bold text-slate-500 uppercase">USD</span>
              </div>

              <p className="text-xs text-red-400 font-semibold mb-6">
                Hasta un 75% más costoso por intermediarios y tiendas físicas.
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                ¿Por qué pagas de más en otras marcas?
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-950/80 text-red-400 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>Márgenes inflados de distribuidores mayoristas y tiendas físicas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-950/80 text-red-400 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>Comisiones multinivel astronómicas cargadas al precio final del consumidor.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-950/80 text-red-400 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>Rellenos y aditivos artificiales para abaratar costos de fabricación.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-950/80 text-red-400 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>Políticas de devolución restrictivas una vez abierto el envase.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={handleCatalogDownload}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 py-3.5 text-xs sm:text-sm font-bold transition-colors"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>DESCARGAR CATÁLOGO COMPLETO (PDF)</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Objection Breaker Callout Banner */}
      <div className="mt-8 rounded-2xl bg-slate-900 border border-emerald-500/30 p-5 sm:p-6 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-extrabold flex items-center gap-2 text-white">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              ¿Por qué es posible esta diferencia de precios tan abismal?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              LiveGood no gasta millones en locales comerciales ni infla el precio de los suplementos para repartir comisiones caras. Funciona con el modelo de suscripción de Costco o Netflix: una membresía accesible de <strong>$9.95 USD al mes</strong> que te traslada el producto a su verdadero costo de fabricación.
            </p>
          </div>

          <button
            onClick={handleCtaClick}
            className="flex-shrink-0 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
          >
            Ver Miembro Tour Oficial
          </button>
        </div>
      </div>

    </section>
  );
};

export default ValueComparison;

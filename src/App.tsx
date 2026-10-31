import { useState } from 'react';
import { Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { BottomNav, type TabType } from './components/BottomNav';
import { IncomeCalculatorModal } from './components/IncomeCalculatorModal';
import { ProductsSection } from './components/ProductsSection';
import { MembersSection } from './components/MembersSection';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { FaqSection } from './components/FaqSection';
import { MembershipConditions } from './components/MembershipConditions';
import { LegalModal, type LegalTab } from './components/LegalModal';

const PRE_REGISTRATION_URL = 'https://livegoodtour.com/JILSZO';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab>('condiciones');

  const handleOpenLegal = (tab: LegalTab = 'condiciones') => {
    setLegalModalTab(tab);
    setIsLegalModalOpen(true);
  };

  const handleContactJohnny = () => {
    const whatsappUrl = `https://wa.me/51900292484?text=${encodeURIComponent(
      'Hola Johnny, acabo de ver tu página de LiveGood y me gustaría conocer más información sobre los productos y las condiciones de la membresía.'
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleRegisterClick = () => {
    setActiveTab('miembros');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-[#121e19]">
      
      {/* Top Transparency Banner */}
      <div className="urgency-banner !bg-[#06261a] !border-emerald-800/60">
        <Shield className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
        <span className="text-emerald-100">
          🌿 <strong>Transparencia Comercial:</strong> Consulta el catálogo de productos de bienestar, condiciones de membresía ($9.95/mes) y el programa de afiliación sin compras forzadas.
        </span>
      </div>

      {/* Navbar */}
      <Navbar
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenLegal={handleOpenLegal}
      />

      {/* Main Content Area with padding-bottom for floating navigation */}
      <main className="flex-1 pb-24 sm:pb-32">
        
        {/* Tab 1: INICIO (Neutral Hero + Membership Conditions + Testimonials + FAQs + Registration) */}
        {activeTab === 'inicio' && (
          <div className="animate-fade-in space-y-4">
            
            {/* Hero Section with Johnny and Neutral Text */}
            <Hero
              onContactJohnny={handleContactJohnny}
              onRegisterClick={handleRegisterClick}
              onOpenConditions={() => handleOpenLegal('condiciones')}
            />

            {/* Clear Membership Conditions & Transparency Section */}
            <MembershipConditions
              onOpenLegal={handleOpenLegal}
              onContactJohnny={handleContactJohnny}
              onRegisterClick={handleRegisterClick}
            />

            {/* Testimonials Section with Income Disclaimers */}
            <Testimonials />

            {/* Live Ticker Banner */}
            <div className="bg-[#06261a] text-white py-4 px-4 overflow-hidden border-y border-emerald-900/60 my-6">
              <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-emerald-300 font-extrabold">COMUNIDAD GLOBAL:</span>
                  <span className="text-slate-200 hidden sm:inline">Consumidores y afiliados activos en todo el mundo:</span>
                  <span className="text-emerald-400 font-black">+2 Millones</span>
                </div>
                <div className="hidden md:flex items-center gap-4 text-slate-300 font-medium">
                  <span>🇵🇪 Perú</span>
                  <span>🇲🇽 México</span>
                  <span>🇨🇴 Colombia</span>
                  <span>🇨🇱 Chile</span>
                  <span>🇺🇸 EE.UU.</span>
                </div>
              </div>
            </div>

            {/* Questions FAQ Section with YouTube Video Accordions & Membership FAQs */}
            <FaqSection
              onRegisterClick={handleRegisterClick}
              onOpenConditions={() => handleOpenLegal('condiciones')}
            />

            {/* Fast Registration Form (Anchor: #register-section) */}
            <MembersSection onContactJohnny={handleContactJohnny} />

          </div>
        )}

        {/* Tab 2: INGRESOS (Dedicated income overview with profile & disclaimers) */}
        {activeTab === 'ingresos' && (
          <div className="animate-fade-in pt-6">
            <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-2 rounded-full shadow-sm text-xs font-bold uppercase tracking-[0.18em]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Disponible en 190+ países
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-4xl sm:text-5xl font-black text-[#093725] tracking-tight">
                      Modelo del Plan de Afiliación
                    </h2>
                    <p className="max-w-2xl text-[#4a5d53] text-base sm:text-lg leading-relaxed">
                      Esta sección ilustra el modelo de compensación oficial de LiveGood basado en la membresía. Conoce los bonos de inicio rápido, la matriz y el sistema de comisiones sin compras mensuales forzadas.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-3xl bg-white border border-emerald-100 p-5 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.24em] text-emerald-500 font-bold mb-3">Tus Directos al mes</p>
                      <p className="text-3xl font-black text-[#093725]">4</p>
                      <p className="text-sm text-[#5e7368] mt-2">Nuevos miembros que incorporas personalmente cada mes (ejemplo).</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-emerald-100 p-5 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.24em] text-emerald-500 font-bold mb-3">Duplicación del Equipo</p>
                      <p className="text-3xl font-black text-[#093725]">2</p>
                      <p className="text-sm text-[#5e7368] mt-2">Promedio de personas que cada miembro de tu equipo incorpora.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-emerald-100 p-5 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.24em] text-emerald-500 font-bold mb-3">Meses acumulados</p>
                      <p className="text-3xl font-black text-[#093725]">6</p>
                      <p className="text-sm text-[#5e7368] mt-2">Tiempo de crecimiento continuo en la simulación.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-emerald-100 p-5 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.24em] text-emerald-500 font-bold mb-3">Miembros estimados</p>
                      <p className="text-3xl font-black text-[#093725]">40</p>
                      <p className="text-sm text-[#5e7368] mt-2">Número estimado de personas activas en tu equipo.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl border border-emerald-100 p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-emerald-500 font-bold">Ingreso Mensual Ilustrativo</p>
                        <p className="text-5xl sm:text-6xl font-black text-[#093725] mt-3">$115</p>
                        <p className="text-sm text-[#5e7368] mt-2">Equivalente a COP 480,900 aprox. (Ejemplo basado en volumen)</p>
                      </div>
                      <div className="rounded-3xl bg-emerald-50 border border-emerald-100 px-5 py-4 text-center">
                        <p className="text-xs uppercase tracking-[0.24em] text-emerald-600 font-bold">Modelo de membresía</p>
                        <p className="text-base text-[#093725] font-semibold mt-2">Matriz + bonos + duplicación</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#5e7368] mt-4 pt-3 border-t border-slate-100 italic">
                      * Nota de transparencia: Este cálculo representa una simulación matemática ilustrativa. Los ingresos no están garantizados y dependen de las ventas efectivas y del esfuerzo individual de cada afiliado.
                    </p>
                  </div>

                  {/* Unified CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={PRE_REGISTRATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-emerald btn-primary-pulse text-sm py-4 flex-1 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>EVALUAR OPORTUNIDAD EN VIVO</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => handleOpenLegal('afiliacion')}
                      className="px-5 py-4 rounded-full border border-emerald-300 bg-white text-[#093725] hover:bg-emerald-50 text-xs font-bold transition-colors"
                    >
                      Ver Descargo de Ingresos
                    </button>
                  </div>
                </div>

                <div className="relative rounded-[2rem] bg-[#f7fcf8] border border-emerald-100 p-6 sm:p-8 shadow-[0_25px_50px_rgba(9,55,37,0.08)] overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-emerald-500/10 blur-3xl"></div>
                  <div className="relative z-10 space-y-6">
                    <div className="grid gap-4">
                      <div className="rounded-[2rem] bg-white overflow-hidden border border-emerald-100 shadow-lg">
                        <div className="p-5 border-b border-emerald-100">
                          <p className="text-xs uppercase tracking-[0.24em] text-emerald-500 font-bold">¿Cómo funciona el modelo?</p>
                        </div>
                        <div className="relative aspect-video bg-black">
                          <iframe
                            src="https://www.youtube-nocookie.com/embed/BAvm8HzUQpk?autoplay=0&rel=0"
                            title="Video explicativo LiveGood"
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>

                      <div className="rounded-3xl bg-white p-5 border border-emerald-100 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="w-24 h-24 rounded-3xl overflow-hidden ring-4 ring-emerald-100 bg-white shadow-sm">
                            <img src="/images/johnny.png" alt="Johnny" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.24em] text-emerald-600 font-bold">Asesor y Afiliado Independiente</p>
                            <h3 className="text-3xl font-black text-[#093725]">Johnny</h3>
                            <p className="text-sm text-[#5e7368] mt-1">Orientación y acompañamiento personalizado</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-3xl bg-[#ecfdf5] border border-emerald-100 p-5 text-[#093725]">
                        <p className="text-xs uppercase tracking-[0.24em] text-emerald-600 font-bold">Transparencia comercial</p>
                        <p className="mt-3 text-sm leading-relaxed">
                          La afiliación es opcional con cuota única de $40 USD. La membresía es de $9.95 USD/mes para acceder a descuentos en productos de bienestar de primera línea sin compras forzadas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Tab 3: PRODUCTOS */}
        {activeTab === 'productos' && (
          <div className="animate-fade-in">
            <ProductsSection onRegisterClick={handleRegisterClick} />
          </div>
        )}

        {/* Tab 4: MIEMBROS (Deep Link) */}
        {activeTab === 'miembros' && (
          <div className="animate-fade-in pt-4">
            <MembersSection onContactJohnny={handleContactJohnny} />
          </div>
        )}

      </main>

      {/* Footer with Comprehensive Links and Meta Compliance Disclaimers */}
      <footer className="bg-[#06261a] text-slate-400 py-12 pb-32 sm:pb-28 px-4 sm:px-6 lg:px-8 border-t border-emerald-950 mt-12">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Top Footer Row: Brand + Legal Navigation Links */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-emerald-900/60">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/livegood-logo-light.png"
                  alt="LiveGood"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
                <span className="text-xs font-semibold text-slate-300 pl-3 border-l border-emerald-800">
                  Afiliado Independiente: Johnny
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Catálogo de bienestar, condiciones de membresía e información comercial clara.
              </p>
            </div>

            {/* Legal Links required by Meta Advertising Policies */}
            <nav aria-label="Enlaces legales y de transparencia" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-emerald-300">
              <button
                onClick={() => handleOpenLegal('privacidad')}
                className="hover:text-white hover:underline transition-colors"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => handleOpenLegal('terminos')}
                className="hover:text-white hover:underline transition-colors"
              >
                Términos y Condiciones
              </button>
              <button
                onClick={() => handleOpenLegal('condiciones')}
                className="hover:text-white hover:underline transition-colors"
              >
                Condiciones de Membresía y Cancelación
              </button>
              <button
                onClick={() => handleOpenLegal('afiliacion')}
                className="hover:text-white hover:underline transition-colors"
              >
                Programa de Afiliación
              </button>
              <button
                onClick={() => handleOpenLegal('contacto')}
                className="hover:text-white hover:underline transition-colors"
              >
                Contacto y Soporte
              </button>
            </nav>
          </div>

          {/* Compliance Disclaimers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] leading-relaxed text-slate-400">
            
            {/* Meta / Facebook Advertising Disclaimer */}
            <div className="space-y-1.5">
              <p className="font-bold text-slate-200 uppercase tracking-wider text-[10px]">
                Descargo sobre Meta / Facebook
              </p>
              <p>
                Este sitio web no forma parte del sitio web de Meta Platforms, Inc. o Facebook. Asimismo, este sitio NO está respaldado, patrocinado ni administrado por Meta Platforms, Inc. FACEBOOK y META son marcas registradas de Meta Platforms, Inc.
              </p>
            </div>

            {/* Income & Results Disclaimer */}
            <div className="space-y-1.5">
              <p className="font-bold text-slate-200 uppercase tracking-wider text-[10px]">
                Descargo de Responsabilidad de Ingresos
              </p>
              <p>
                Cualquier ejemplo o proyección de ingresos en este sitio web es ilustrativo y se basa en el plan de compensación oficial. No representa una promesa ni garantía de ingresos. Los resultados dependen exclusivamente del tiempo, ventas comerciales y esfuerzo individual de cada afiliado independiente.
              </p>
            </div>

            {/* Commercial Transparency & Cancellation */}
            <div className="space-y-1.5">
              <p className="font-bold text-slate-200 uppercase tracking-wider text-[10px]">
                Membresía, Cuotas y Cancelación
              </p>
              <p>
                Membresía mensual: $9.95 USD/mes. Cuota de activación de afiliado (opcional): $40 USD pago único. Cero compras mensuales forzadas. Cancelación libre en cualquier momento sin penalizaciones. Garantía de reembolso de 90 días en envases vacíos de productos de bienestar.
              </p>
            </div>

          </div>

          {/* Bottom Copyright & Contact details */}
          <div className="pt-6 border-t border-emerald-950 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Johnnylivegood.com - Sitio Informativo de Afiliado Independiente. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span>WhatsApp: +51 900292484</span>
              <span>•</span>
              <button
                onClick={() => handleOpenLegal('contacto')}
                className="text-emerald-400 hover:underline"
              >
                Canales de Atención
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Income Calculator Modal */}
      <IncomeCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onRegisterClick={handleRegisterClick}
      />

      {/* Legal & Commercial Transparency Modal */}
      <LegalModal
        isOpen={isLegalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setIsLegalModalOpen(false)}
        onContactJohnny={handleContactJohnny}
      />

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget onContactJohnny={handleContactJohnny} />

    </div>
  );
}

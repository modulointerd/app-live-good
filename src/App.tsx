import { useState } from 'react';
import { Zap, Sparkles, ArrowRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { BottomNav, type TabType } from './components/BottomNav';
import { IncomeCalculatorModal } from './components/IncomeCalculatorModal';
import { ProductsSection } from './components/ProductsSection';
import { MembersSection } from './components/MembersSection';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { FaqSection } from './components/FaqSection';

const PRE_REGISTRATION_URL = 'https://livegoodtour.com/JILSZO';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleContactJohnny = () => {
    const whatsappUrl = `https://wa.me/51900292484?text=${encodeURIComponent(
      'Hola Johnny, vi tu página LiveGoodTour.com/JILSZO y quiero información sobre la membresía de $40 USD y cómo unirme a tu equipo.'
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleRegisterClick = () => {
    setActiveTab('inicio');
    setTimeout(() => {
      const el = document.getElementById('register-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open(PRE_REGISTRATION_URL, '_blank');
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-[#121e19]">
      
      {/* Urgency Banner — Maleta 5: Escasez y Urgencia */}
      <div className="urgency-banner">
        <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse flex-shrink-0" />
        <span>
          ⚡ <strong>Próximo corte de posición en la matriz:</strong> asegura tu lugar hoy antes de la actualización semanal.
        </span>
      </div>

      {/* Navbar */}
      <Navbar onOpenCalculator={() => setIsCalculatorOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Tab 1: INICIO (Matching Johnny Hero + Testimonials + Share Card) */}
        {activeTab === 'inicio' && (
          <div className="animate-fade-in space-y-4">
            
            {/* Hero Section with Johnny */}
            <Hero
              onContactJohnny={handleContactJohnny}
              onRegisterClick={handleRegisterClick}
            />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Live Ticker Banner */}
            <div className="bg-[#06261a] text-white py-4 px-4 overflow-hidden border-y border-emerald-900/60 my-6">
              <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-emerald-300 font-extrabold">EN VIVO:</span>
                  <span className="text-slate-200 hidden sm:inline">Nuevos miembros unidos en los últimos 60 minutos:</span>
                  <span className="text-emerald-400 font-black">+148 personas</span>
                </div>
                <div className="hidden md:flex items-center gap-4 text-slate-300 font-medium">
                  <span>🇵🇪 Perú +34</span>
                  <span>🇲🇽 México +28</span>
                  <span>🇨🇴 Colombia +19</span>
                  <span>🇨🇱 Chile +15</span>
                </div>
              </div>
            </div>

            {/* Questions FAQ Section with YouTube Video Accordions */}
            <FaqSection onRegisterClick={handleRegisterClick} />

            {/* Fast Registration Form (Anchor: #register-section) */}
            <MembersSection onContactJohnny={handleContactJohnny} />

          </div>
        )}

        {/* Tab 2: INGRESOS (Dedicated income overview with profile) */}
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
                      Ingresos proyectados con LiveGood
                    </h2>
                    <p className="max-w-2xl text-[#4a5d53] text-base sm:text-lg leading-relaxed">
                      Esta sección muestra un modelo de crecimiento real basado en tu membresía inteligente. Un plan de acción claro con cifras reales de ahorro y ganancias sin autoconsumos forzados.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-3xl bg-white border border-emerald-100 p-5 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.24em] text-emerald-500 font-bold mb-3">Tus Directos al mes</p>
                      <p className="text-3xl font-black text-[#093725]">4</p>
                      <p className="text-sm text-[#5e7368] mt-2">Nuevos miembros que incorporas personalmente cada mes.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-emerald-100 p-5 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.24em] text-emerald-500 font-bold mb-3">Duplicación del Equipo</p>
                      <p className="text-3xl font-black text-[#093725]">2</p>
                      <p className="text-sm text-[#5e7368] mt-2">Promedio de personas que cada miembro de tu equipo incorpora.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-emerald-100 p-5 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.24em] text-emerald-500 font-bold mb-3">Meses acumulados</p>
                      <p className="text-3xl font-black text-[#093725]">6</p>
                      <p className="text-sm text-[#5e7368] mt-2">Tiempo de crecimiento continuo proyectado para tu red.</p>
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
                        <p className="text-sm uppercase tracking-[0.24em] text-emerald-500 font-bold">Ingreso Mensual Estimado</p>
                        <p className="text-5xl sm:text-6xl font-black text-[#093725] mt-3">$115</p>
                        <p className="text-sm text-[#5e7368] mt-2">Equivalente a COP 480,900 aprox.</p>
                      </div>
                      <div className="rounded-3xl bg-emerald-50 border border-emerald-100 px-5 py-4 text-center">
                        <p className="text-xs uppercase tracking-[0.24em] text-emerald-600 font-bold">Modelo de membresía</p>
                        <p className="text-base text-[#093725] font-semibold mt-2">Matriz + bonos + duplicación</p>
                      </div>
                    </div>
                  </div>

                  {/* Unified CTA */}
                  <div className="pt-2">
                    <a
                      href={PRE_REGISTRATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-emerald btn-primary-pulse text-sm py-4 w-full flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>ASEGURAR MI POSICIÓN AHORA</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
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
                            <p className="text-xs uppercase tracking-[0.24em] text-emerald-600 font-bold">Líder y Mentor de Equipo</p>
                            <h3 className="text-3xl font-black text-[#093725]">Johnny</h3>
                            <p className="text-sm text-[#5e7368] mt-1">Acompañamiento directo en tu crecimiento</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-3xl bg-[#ecfdf5] border border-emerald-100 p-5 text-[#093725]">
                        <p className="text-xs uppercase tracking-[0.24em] text-emerald-600 font-bold">Acción clave</p>
                        <p className="mt-3 text-sm leading-relaxed">
                          Asegura tu posición en la matriz, accede a las capacitaciones del equipo y aprovecha los productos a precio de fábrica para ti y tu familia.
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

        {/* Tab 4: MIEMBROS (Fallback / Deep Link) */}
        {activeTab === 'miembros' && (
          <div className="animate-fade-in pt-4">
            <MembersSection onContactJohnny={handleContactJohnny} />
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-[#06261a] text-slate-400 py-10 px-4 sm:px-6 lg:px-8 border-t border-emerald-950 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white font-extrabold text-xl">
            <span className="text-emerald-400">LIVE</span>GOOD
            <span className="text-xs font-normal text-slate-400">| Equipo Johnny (+51 900292484)</span>
          </div>

          <div className="text-xs text-center md:text-right text-slate-400 space-y-1">
            <p>© {new Date().getFullYear()} Johnnylivegood.com - Todos los derechos reservados.</p>
            <p className="text-slate-500">Membresía Inteligente a Precio de Fábrica · Soporte directo por WhatsApp.</p>
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

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget onContactJohnny={handleContactJohnny} />

    </div>
  );
}

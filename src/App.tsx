import Navbar from './components/Navbar';
import AboveTheFoldHero from './components/AboveTheFoldHero';
import TrustBadges from './components/TrustBadges';
import ValueComparison from './components/ValueComparison';
import ExclusiveBonus from './components/ExclusiveBonus';
import FaqSection from './components/FaqSection';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Barra de navegación superior */}
      <Navbar />

      {/* Hero Section optimizado Above the Fold para Meta Ads */}
      <main>
        <AboveTheFoldHero />
        
        {/* Elementos de confianza y cumplimiento */}
        <TrustBadges />

        {/* Tabla comparativa de valor (Membresía vs Precio Regular) */}
        <ValueComparison />

        {/* Bonos exclusivos por membresía */}
        <ExclusiveBonus />

        {/* Preguntas frecuentes orientadas a objeciones */}
        <FaqSection />

        {/* Llamado a la acción final antes del footer */}
        <FooterCTA />
      </main>

      {/* Footer corporativo y legal */}
      <Footer />

      {/* Widget flotante de soporte / WhatsApp */}
      <WhatsAppWidget />
    </div>
  );
}

export { App };

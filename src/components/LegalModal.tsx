import React from 'react';
import { X, ShieldCheck, FileText, HelpCircle, Phone, AlertCircle, CheckCircle2 } from 'lucide-react';

export type LegalTab = 'condiciones' | 'afiliacion' | 'privacidad' | 'terminos' | 'contacto';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
  onContactJohnny: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'condiciones',
  onClose,
  onContactJohnny
}) => {
  const [activeTab, setActiveTab] = React.useState<LegalTab>(initialTab);

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
    >
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-emerald-100 overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#093725] to-[#0d5238] p-5 sm:p-6 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 id="legal-modal-title" className="text-lg sm:text-xl font-black tracking-tight text-white">
                Transparencia Comercial y Legal
              </h2>
              <p className="text-xs text-emerald-200">
                Información clara para una decisión informada y responsable
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 p-2 bg-[#f4faf6] border-b border-emerald-100 overflow-x-auto flex-shrink-0">
          <button
            onClick={() => setActiveTab('condiciones')}
            className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'condiciones'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-[#4a5d53] hover:text-[#093725] hover:bg-emerald-50'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Condiciones de Membresía</span>
          </button>

          <button
            onClick={() => setActiveTab('afiliacion')}
            className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'afiliacion'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-[#4a5d53] hover:text-[#093725] hover:bg-emerald-50'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Programa de Afiliación</span>
          </button>

          <button
            onClick={() => setActiveTab('privacidad')}
            className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'privacidad'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-[#4a5d53] hover:text-[#093725] hover:bg-emerald-50'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacidad</span>
          </button>

          <button
            onClick={() => setActiveTab('terminos')}
            className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'terminos'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-[#4a5d53] hover:text-[#093725] hover:bg-emerald-50'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Términos de Uso</span>
          </button>

          <button
            onClick={() => setActiveTab('contacto')}
            className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'contacto'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-[#4a5d53] hover:text-[#093725] hover:bg-emerald-50'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contacto y Soporte</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#374740] leading-relaxed">
          
          {/* TAB 1: CONDICIONES DE MEMBRESÍA Y CANCELACIÓN */}
          {activeTab === 'condiciones' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-black text-[#093725] mb-2">
                  Condiciones de la Membresía de LiveGood
                </h3>
                <p className="text-xs text-[#5e7368]">
                  Última actualización: Conforme a estándares de transparencia comercial 2026.
                </p>
              </div>

              <div className="bg-emerald-50/80 rounded-2xl p-5 border border-emerald-100 space-y-3">
                <h4 className="font-bold text-[#093725] text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ¿En qué consiste la membresía?
                </h4>
                <p>
                  La membresía de LiveGood es un servicio por suscripción (similar a clubes de compra como Costco o Sam's Club) que otorga al titular acceso a precios con descuento exclusivo en todo el catálogo de productos de salud y bienestar.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-sm">
                    <span className="text-xs uppercase font-extrabold text-emerald-600 tracking-wider">Opción Mensual</span>
                    <p className="text-2xl font-black text-[#093725] mt-1">$9.95 USD <span className="text-xs font-medium text-slate-500">/ mes</span></p>
                    <p className="text-xs text-slate-600 mt-1">Suscripción recurrente mensual. Sin permanencia.</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-sm">
                    <span className="text-xs uppercase font-extrabold text-emerald-600 tracking-wider">Opción Anual</span>
                    <p className="text-2xl font-black text-[#093725] mt-1">$99.95 USD <span className="text-xs font-medium text-slate-500">/ año</span></p>
                    <p className="text-xs text-slate-600 mt-1">Incluye un 20% de descuento (equivalente a 2 meses gratis).</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-[#093725] text-base">
                  Cuotas recurrentes y otros costes asociados
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Cuota recurrente:</strong> La única tarifa recurrente es la suscripción de membresía de <strong>$9.95 USD mensuales</strong> (o $99.95 anuales si se elige dicha modalidad).
                  </li>
                  <li>
                    <strong>Sin compras mínimas ni autoenvíos obligatorios:</strong> No estás obligado a adquirir ningún producto mensualmente para conservar tu membresía ni tus precios de descuento.
                  </li>
                  <li>
                    <strong>Gastos de envío e impuestos:</strong> Las compras de productos físicos conllevan gastos de envío e impuestos locales que se calculan y desglosan de forma transparente al momento de pagar en la tienda oficial.
                  </li>
                </ul>
              </div>

              <div className="bg-[#f0f9f5] rounded-2xl p-5 border border-emerald-200 space-y-3">
                <h4 className="font-bold text-[#093725] text-base flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  Política de Cancelación y Reembolso
                </h4>
                <p>
                  <strong>Cancelación en cualquier momento:</strong> Puedes cancelar tu membresía mensual en cualquier momento antes de tu siguiente fecha de facturación. No existen contratos de permanencia ni cargos por cancelación. Puedes hacerlo directamente desde tu panel de usuario en <em>LiveGood.com</em> o enviando un correo a soporte.
                </p>
                <p>
                  <strong>Garantía de satisfacción de 90 días en productos:</strong> LiveGood ofrece una garantía de reembolso de 90 días en todos los productos físicos. Si no estás 100% satisfecho con un producto, puedes devolver el envase vacío dentro de los 90 días posteriores a la compra para recibir un reembolso completo del costo del producto (menos gastos de envío).
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PROGRAMA DE AFILIACIÓN */}
          {activeTab === 'afiliacion' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-black text-[#093725] mb-2">
                  Cómo funciona el Programa de Afiliación
                </h3>
                <p className="text-xs text-[#5e7368]">
                  Transparencia sobre la oportunidad comercial de distribución independiente.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  LiveGood ofrece un programa de afiliación opcional para personas interesadas en recomendar la membresía y los productos a cambio de comisiones comerciales.
                </p>

                <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200/80 space-y-2">
                  <h4 className="font-bold text-amber-950 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Aviso Importante: La Afiliación es Voluntaria
                  </h4>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    No es necesario afiliarse para disfrutar de los productos con descuento. Cualquier persona puede registrarse exclusivamente como miembro consumidor pagando solo la membresía de $9.95 USD al mes.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                  <h4 className="font-bold text-[#093725] text-base">Costos de registro del Afiliado</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>
                      <strong>Tarifa única de afiliado:</strong> <strong>$40.00 USD</strong> (se paga una sola vez para activar los derechos de distribución independiente, herramientas digitales y oficina virtual).
                    </li>
                    <li>
                      <strong>Costo total de inicio como afiliado:</strong> <strong>$49.95 USD</strong> ($40 tarifa de afiliado + $9.95 del primer mes de membresía).
                    </li>
                    <li>
                      <strong>Mantenimiento:</strong> Para mantenerse activo y recibir comisiones, el afiliado mantiene activa su membresía mensual de $9.95 USD. No requiere autoconsumo ni acumulación de inventarios.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-[#093725] text-base">
                    Descargo de Responsabilidad de Ingresos (Income Disclaimer)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    LiveGood no garantiza ningún nivel de ingresos ni resultados económicos. Los ingresos en el programa de afiliados dependen completamente de las ventas efectivas de membresías y productos generadas mediante el esfuerzo personal, dedicación, habilidades y tiempo invertido por cada afiliado. Los ejemplos de comisiones mostrados en este sitio web son cálculos matemáticos ilustrativos y no deben interpretarse como una promesa o garantía de ingresos futuros.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRIVACIDAD */}
          {activeTab === 'privacidad' && (
            <div className="space-y-5 animate-fade-in text-xs sm:text-sm">
              <div>
                <h3 className="text-xl font-black text-[#093725] mb-2">
                  Política de Privacidad
                </h3>
                <p className="text-xs text-[#5e7368]">
                  Compromiso de protección de datos conforme a regulaciones internacionales.
                </p>
              </div>

              <p>
                Este sitio web es gestionado por <strong>Johnny</strong>, Afiliado Independiente de LiveGood. Respetamos tu privacidad y estamos comprometidos a proteger los datos personales que decidas compartir con nosotros.
              </p>

              <div className="space-y-2">
                <h4 className="font-bold text-[#093725]">1. Datos que recopilamos</h4>
                <p className="text-slate-600">
                  Solo recopilamos información cuando te comunicas voluntariamente con nosotros (por ejemplo, mediante mensajes de WhatsApp o solicitudes de información directa). No solicitamos datos de tarjetas de crédito en esta página; todos los pagos y registros formales se procesan exclusivamente en los servidores seguros y encriptados del sitio corporativo oficial de <em>LiveGood.com</em>.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#093725]">2. Finalidad del tratamiento</h4>
                <p className="text-slate-600">
                  Tus datos de contacto se utilizan únicamente para responder tus preguntas, proporcionarte información sobre el catálogo de productos y brindarte soporte sobre el funcionamiento de la membresía y el equipo. Nunca venderemos, alquilaremos ni cederemos tus datos a terceros.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#093725]">3. Cookies y tecnologías de seguimiento</h4>
                <p className="text-slate-600">
                  Podemos utilizar herramientas de análisis y etiquetas publicitarias estándar para entender la navegación en el sitio y optimizar campañas informativas. Puedes configurar tu navegador para rechazar o eliminar cookies en cualquier momento.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#093725]">4. Tus derechos</h4>
                <p className="text-slate-600">
                  Puedes solicitar en cualquier momento el acceso, rectificación o eliminación de cualquier dato que nos hayas proporcionado comunicándote por WhatsApp al +51 900292484.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: TÉRMINOS DE USO */}
          {activeTab === 'terminos' && (
            <div className="space-y-5 animate-fade-in text-xs sm:text-sm">
              <div>
                <h3 className="text-xl font-black text-[#093725] mb-2">
                  Términos y Condiciones de Uso
                </h3>
                <p className="text-xs text-[#5e7368]">
                  Condiciones aplicables al acceso y uso de este sitio web informativo.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#093725]">1. Naturaleza del sitio web</h4>
                <p className="text-slate-600">
                  Este portal web (Johnnylivegood.com) es un sitio informativo independiente operado por un distribuidor/afiliado independiente de LiveGood. <strong>No es el sitio web corporativo oficial de LiveGood LLC.</strong>
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#093725]">2. Propiedad intelectual y marcas</h4>
                <p className="text-slate-600">
                  "LiveGood" y sus logotipos asociados son marcas registradas de LiveGood LLC. Su mención en este sitio web tiene carácter estrictamente informativo para describir los productos y el programa oficial de afiliación ofrecidos por la compañía.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#093725]">3. Exactitud de la información</h4>
                <p className="text-slate-600">
                  Hacemos todo lo posible para mantener actualizada la información sobre productos, precios y planes de compensación. No obstante, las condiciones oficiales vigentes son las publicadas en el sitio web oficial de LiveGood (LiveGood.com).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#093725]">4. Declaración sobre Meta / Facebook</h4>
                <p className="text-slate-600">
                  Este sitio no forma parte del sitio web de Meta Platforms, Inc. o Facebook. Asimismo, este sitio no está avalado ni patrocinado de ninguna forma por Meta Platforms, Inc. FACEBOOK y META son marcas comerciales registradas de Meta Platforms, Inc.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: CONTACTO Y SOPORTE */}
          {activeTab === 'contacto' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-black text-[#093725] mb-2">
                  Contacto, Soporte y Canales Oficiales
                </h3>
                <p className="text-xs text-[#5e7368]">
                  Estamos a tu disposición para aclarar cualquier duda antes o después de tu decisión.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f0fdf4] p-5 rounded-2xl border border-emerald-200">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold mb-2">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <span>Contacto Directo con Johnny</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">
                    Asesoría personalizada, resolución de dudas sobre productos y soporte para nuevos miembros.
                  </p>
                  <p className="text-sm font-black text-[#093725]">
                    WhatsApp: <span className="text-emerald-700 font-mono">+51 900292484</span>
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onContactJohnny();
                    }}
                    className="mt-4 w-full btn-outline-whatsapp text-xs py-2 font-bold justify-center"
                  >
                    Escribir por WhatsApp
                  </button>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-800 font-bold mb-2">
                    <HelpCircle className="w-5 h-5 text-slate-600" />
                    <span>Soporte Oficial LiveGood</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">
                    Para trámites de facturación oficial, envíos corporativos o cancelaciones directas.
                  </p>
                  <p className="text-xs text-slate-700 font-medium">
                    Web Oficial: <a href="https://www.livegood.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline font-bold">www.livegood.com</a>
                  </p>
                  <p className="text-xs text-slate-700 mt-1">
                    Soporte al cliente: <span className="font-mono text-slate-900">support@livegood.com</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Horario de atención: Lunes a Viernes (Horario estándar de EE.UU.)
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#f8faf9] border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <p className="text-[11px] text-[#5e7368] text-center sm:text-left">
            LiveGood Afiliado Independiente · Transparencia comercial y cumplimiento publicitario
          </p>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition-colors"
          >
            Entendido / Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};

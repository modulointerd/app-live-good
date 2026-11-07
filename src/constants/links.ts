// Centralized Affiliate & Routing Constants for LiveGood
// Preserving all original links, phone numbers and referral parameters

export const AFFILIATE_CONFIG = {
  name: 'Johnny',
  role: 'Afiliado Independiente & Asesor de Bienestar',
  phone: '+51 900292484',
  whatsappRaw: '51900292484',
  whatsappDefaultMsg: 'Hola Johnny, acabo de ver tu página de LiveGood y me gustaría conocer más información sobre los productos y las condiciones de la membresía.',
  
  // Official LiveGood affiliate URLs with referral code JILSZO
  tourUrl: 'https://livegoodtour.com/JILSZO',
  storeUrl: 'https://www.LiveGood.com/JILSZO',
  catalogPdfUrl: 'https://drive.google.com/file/d/1KGsd9-1-XxLWdkWDu7HppS7myG4EIBJX/view?usp=sharing',
  healthReportUrl: 'https://www.myfreehealthreport.com/JILSZO',
  clinicUrl: 'https://www.LiveGoodClinic.com/JILSZO',

  // Official VSL / Video Presentations
  vslYoutubeId: 'BAvm8HzUQpk', // Official LiveGood Model & Products overview
  productsVideoId: 'l4lycwQRqmE', // Product showcase video
};

export const getWhatsAppUrl = (customMsg?: string): string => {
  const text = customMsg || AFFILIATE_CONFIG.whatsappDefaultMsg;
  return `https://wa.me/${AFFILIATE_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`;
};

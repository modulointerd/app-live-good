// Analytics and Event Tracking helper for Meta Ads (Facebook Pixel) and Google Analytics

declare global {
  interface Window {
    fbq?: (action: string, eventName: string, params?: Record<string, any>) => void;
    gtag?: (action: string, eventName: string, params?: Record<string, any>) => void;
    dataLayer?: any[];
  }
}

export type TrackingPlacement = 
  | 'above_the_fold' 
  | 'trust_bar' 
  | 'value_comparison' 
  | 'exclusive_bonus' 
  | 'faq' 
  | 'footer_cta'
  | 'navbar'
  | 'whatsapp_widget'
  | 'sticky_mobile';

/**
 * Tracks an outbound affiliate lead click for Meta Ads Pixel and Google Analytics
 */
export const trackAffiliateClick = (placement: TrackingPlacement, destination: string = 'livegoodtour.com') => {
  try {
    // 1. Meta Ads Pixel standard Lead event
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'LiveGood Membership Pre-Registration',
        content_category: 'Affiliate Funnel',
        placement: placement,
        destination: destination,
        value: 9.95,
        currency: 'USD',
      });

      // Custom event for granular ad set optimization
      window.fbq('trackCustom', 'AffiliateCTAClick', {
        placement,
        destination,
      });
    }

    // 2. Google Analytics / Google Ads standard event
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'Affiliate Conversion',
        event_label: placement,
        value: 9.95,
        currency: 'USD',
      });
    }

    // 3. Fallback debug log in development
    if (import.meta.env.DEV) {
      console.log(`[Analytics] Tracked affiliate lead from: ${placement} -> ${destination}`);
    }
  } catch (error) {
    console.warn('[Analytics] Tracking error:', error);
  }
};

/**
 * Tracks when a user views or downloads the product catalog
 */
export const trackCatalogClick = (placement: string) => {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', {
        content_name: 'Catalog PDF Download',
        content_type: 'product_catalog',
        placement: placement,
      });
    }

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'view_item_list', {
        item_list_name: 'LiveGood Product Catalog',
      });
    }
  } catch (error) {
    console.warn('[Analytics] Catalog tracking error:', error);
  }
};

/**
 * Tracks when a visitor contacts Johnny via WhatsApp
 */
export const trackWhatsAppClick = (placement: string) => {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Contact', {
        contact_method: 'WhatsApp',
        placement: placement,
      });
    }

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'contact', {
        method: 'WhatsApp',
        placement: placement,
      });
    }
  } catch (error) {
    console.warn('[Analytics] WhatsApp tracking error:', error);
  }
};

/**
 * Tracks FAQ accordion interactions
 */
export const trackFaqInteraction = (question: string, isOpen: boolean) => {
  try {
    if (isOpen && typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'faq_expand', {
        faq_question: question,
      });
    }
  } catch {
    // Silent catch
  }
};

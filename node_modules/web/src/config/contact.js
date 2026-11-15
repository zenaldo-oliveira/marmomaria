// ============================================================
//  CONFIGURAÇÃO CENTRAL DE CONTATO E MARCA
//  Edite aqui: número de WhatsApp, e-mail, endereço e redes.
//  Todos os pontos de contato do site usam estas variáveis.
// ============================================================

export const BRAND = {
  name: 'Marmoraria Lumina',
  tagline: 'Mármores & Granitos de Alto Padrão',
  since: 2009,
};

// Número no formato internacional, apenas dígitos (55 + DDD + número)
export const WHATSAPP_NUMBER = '5511999999999';

// Mensagem padrão usada quando não há um contexto específico
export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim pelo site e gostaria de solicitar um orçamento.';

export const CONTACT = {
  phoneDisplay: '(11) 99999-9999',
  phoneHref: '+5511999999999',
  email: 'contato@marmorarialumina.com.br',
  address: 'Av. das Pedreiras, 1200 — São Paulo, SP',
  hours: 'Seg a Sex 8h–18h · Sáb 8h–12h',
  // URL de embed do Google Maps (troque pelo endereço real)
  mapsEmbed:
    'https://www.google.com/maps?q=Avenida+Paulista+São+Paulo&output=embed',
};

export const SOCIAL = {
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  tiktok: 'https://tiktok.com/',
  youtube: 'https://youtube.com/',
  instagramHandle: '@marmorarialumina',
};

// ============================================================
//  PIXELS DE RASTREAMENTO — preencha os IDs do cliente
//  Deixe vazio ('') para desativar. Ver index.html.
// ============================================================
export const TRACKING = {
  metaPixelId: '', // ex: '123456789012345'
  googleAdsId: '', // ex: 'AW-123456789'
  ga4Id: '',       // ex: 'G-XXXXXXX'
};

// Captura os parâmetros UTM da URL (origem do anúncio)
export function getUtmParams() {
  if (typeof window === 'undefined') return {};
  const p = new URLSearchParams(window.location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const out = {};
  keys.forEach((k) => {
    const v = p.get(k);
    if (v) out[k] = v;
  });
  return out;
}

// Monta um link de WhatsApp com mensagem pré-preenchida + UTMs
export function buildWhatsappLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  const utm = getUtmParams();
  let text = message;
  const utmStr = Object.entries(utm)
    .map(([k, v]) => `${k}=${v}`)
    .join(' | ');
  if (utmStr) text += `\n\n(origem: ${utmStr})`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Dispara eventos de conversão nos pixels (se configurados)
export function trackLead(source = 'whatsapp') {
  try {
    if (typeof window !== 'undefined') {
      if (typeof window.fbq === 'function') window.fbq('track', 'Lead', { source });
      if (typeof window.gtag === 'function')
        window.gtag('event', 'generate_lead', { source });
    }
  } catch (_) {
    /* pixels ainda não configurados — ignore */
  }
}

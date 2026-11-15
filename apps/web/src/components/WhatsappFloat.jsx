import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsappLink, trackLead } from '@/config/contact';

export default function WhatsappFloat() {
  return (
    <a
      href={buildWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead('whatsapp_float')}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}

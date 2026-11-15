import React from 'react';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { BRAND, SOCIAL, CONTACT, buildWhatsappLink, trackLead } from '@/config/contact';

const NAV = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

function TikTok(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 3c.3 2 1.5 3.6 3.5 4v2.5c-1.3 0-2.6-.4-3.6-1.1v6.4c0 3.2-2.6 5.7-5.8 5.5A5.5 5.5 0 0 1 8.9 9.3v2.7a2.9 2.9 0 1 0 2 2.7V3h2.6z" />
    </svg>
  );
}

export default function Footer() {
  const wa = buildWhatsappLink();
  return (
    <footer className="bg-[hsl(var(--graphite))] text-white/70">
      <div className="mx-auto grid max-w-[80rem] gap-10 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <span className="font-serif-display text-2xl font-semibold text-white">
            {BRAND.name.split(' ')[0]}
            <span className="text-gold"> {BRAND.name.split(' ')[1]}</span>
          </span>
          <p className="mt-4 text-sm leading-relaxed">
            {BRAND.tagline}. Mármore, granito, quartzo e quartzito com corte de precisão e
            acabamento premium desde {BRAND.since}.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-white/5 p-2.5 hover:bg-gold hover:text-white"><Instagram className="h-4 w-4" /></a>
            <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full bg-white/5 p-2.5 hover:bg-gold hover:text-white"><Facebook className="h-4 w-4" /></a>
            <a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="rounded-full bg-white/5 p-2.5 hover:bg-gold hover:text-white"><TikTok className="h-4 w-4" /></a>
            <a href={SOCIAL.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-full bg-white/5 p-2.5 hover:bg-gold hover:text-white"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-gold">{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href={`tel:${CONTACT.phoneHref}`} className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4 text-gold" /> {CONTACT.phoneDisplay}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-gold"><Mail className="h-4 w-4 text-gold" /> {CONTACT.email}</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> {CONTACT.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Orçamento rápido</h4>
          <p className="mt-4 text-sm">Fale agora com um especialista pelo WhatsApp.</p>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackLead('whatsapp_footer')}
            className="mt-4 inline-flex items-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar Orçamento
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-2 px-5 py-6 text-xs md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.</p>
          <p>{CONTACT.hours}</p>
        </div>
      </div>
    </footer>
  );
}

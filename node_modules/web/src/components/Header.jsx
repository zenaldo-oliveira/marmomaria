import React, { useEffect, useState } from 'react';
import { Menu, X, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { BRAND, SOCIAL, buildWhatsappLink, trackLead } from '@/config/contact';

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const wa = buildWhatsappLink('Olá! Gostaria de solicitar um orçamento.');

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[hsl(var(--graphite))]/95 backdrop-blur-md py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="flex items-center gap-2 text-white">
          <span className="font-serif-display text-xl md:text-2xl font-semibold tracking-tight">
            {BRAND.name.split(' ')[0]}
            <span className="text-gold"> {BRAND.name.split(' ')[1]}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/70 hover:text-gold transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-white/70 hover:text-gold transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackLead('whatsapp_header')}
            className="ml-1 inline-flex items-center gap-2 rounded-sm bg-gold px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar Orçamento
          </a>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <nav className="mx-4 mt-3 flex flex-col gap-1 rounded-md bg-[hsl(var(--graphite))] p-4 shadow-xl">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2.5 text-base font-medium text-white/85 hover:bg-white/5 hover:text-gold"
              >
                {n.label}
              </a>
            ))}
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              onClick={() => { trackLead('whatsapp_header'); setOpen(false); }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-4 py-3 text-base font-semibold text-white"
            >
              <MessageCircle className="h-5 w-5" /> Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

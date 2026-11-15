import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { IMG } from '@/config/content';
import { buildWhatsappLink, trackLead } from '@/config/contact';

export default function FinalCta() {
  const wa = buildWhatsappLink('Olá! Quero começar meu projeto em mármore/granito.');
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--graphite))] py-24">
      <img
        src={IMG.marble}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--graphite))] via-[hsl(var(--graphite))]/85 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-serif-display text-3xl font-semibold leading-tight text-white md:text-5xl">
            Pronto para transformar seu ambiente em uma obra de arte?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            Solicite agora seu orçamento gratuito e descubra o material perfeito para o seu projeto.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackLead('whatsapp_final_cta')}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/30 transition-all hover:brightness-110 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" /> Solicitar Orçamento no WhatsApp
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Preencher formulário <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

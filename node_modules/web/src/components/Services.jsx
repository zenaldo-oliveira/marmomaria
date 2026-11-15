import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Reveal from './Reveal';
import { SERVICES } from '@/config/content';
import { buildWhatsappLink, trackLead } from '@/config/contact';

export default function Services() {
  return (
    <section id="servicos" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[85rem] px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Serviços
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Soluções completas em mármore e granito para sua obra ou reforma
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const wa = buildWhatsappLink(
              `Olá, quero um orçamento de ${s.title}.`
            );
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group flex h-full flex-col overflow-hidden rounded-sm bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-xl hover:shadow-black/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif-display text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <a
                      href={wa}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackLead('whatsapp_service')}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:brightness-110"
                    >
                      <MessageCircle className="h-4 w-4" /> Solicitar orçamento
                    </a>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

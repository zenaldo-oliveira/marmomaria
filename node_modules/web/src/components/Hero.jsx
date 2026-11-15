import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowDown, Star } from 'lucide-react';
import { IMG } from '@/config/content';
import { buildWhatsappLink, trackLead } from '@/config/contact';

export default function Hero() {
  const wa = buildWhatsappLink('Olá! Quero solicitar um orçamento grátis.');
  return (
    <section id="inicio" className="relative flex min-h-[100dvh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Bancada de cozinha em mármore Carrara com veios acinzentados"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--graphite))] via-transparent to-black/40" />
      </div>

      <div className="relative mx-auto w-full max-w-[90rem] px-5 md:px-8 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold backdrop-blur-sm"
          >
            Mármore · Granito · Quartzo · Quartzito
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Mármores e granitos que transformam ambientes em
            <span className="text-gold"> obras de arte</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          >
            Tradição, tecnologia de corte de precisão e acabamento premium.
            Do projeto à instalação, entregamos peças únicas com a sofisticação
            que o seu ambiente merece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackLead('whatsapp_hero')}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-base font-semibold text-white shadow-lg shadow-black/30 transition-all hover:brightness-110 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" /> Solicitar Orçamento Grátis
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
            >
              Ver Projetos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/75"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif-display text-2xl font-semibold text-gold">+15</span>
              anos de mercado
            </div>
            <span className="hidden h-6 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-serif-display text-2xl font-semibold text-gold">+500</span>
              projetos entregues
            </div>
            <span className="hidden h-6 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-1.5">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              avaliação dos clientes
            </div>
          </motion.div>
        </div>
      </div>

      <a href="#sobre" aria-label="Rolar para baixo" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-gold">
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

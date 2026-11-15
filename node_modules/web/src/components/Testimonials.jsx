import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';
import { TESTIMONIALS } from '@/config/content';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d) => setI((v) => (v + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="depoimentos" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Depoimentos
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            A confiança de quem já construiu conosco
          </h2>
        </Reveal>

        <div className="relative mt-12 min-h-[16rem]">
          <Quote className="mx-auto h-10 w-10 text-gold/40" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mt-5 flex justify-center text-gold">
                {[...Array(t.rating)].map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mx-auto mt-5 max-w-2xl font-serif-display text-xl italic leading-relaxed text-foreground md:text-2xl">
                “{t.text}”
              </p>
              <div className="mt-7 flex items-center justify-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/40"
                />
                <div className="text-left">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={() => go(-1)} aria-label="Anterior" className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-gold hover:text-gold">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Depoimento ${k + 1}`}
                className={`h-2 rounded-full transition-all ${k === i ? 'w-6 bg-gold' : 'w-2 bg-border'}`}
              />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Próximo" className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-gold hover:text-gold">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

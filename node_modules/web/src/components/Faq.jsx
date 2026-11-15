import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal';
import { FAQ } from '@/config/content';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Tudo o que você precisa saber
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-foreground">{item.q}</span>
                  <span className="shrink-0 text-gold">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

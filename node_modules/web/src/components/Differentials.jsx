import React from 'react';
import { ShieldCheck, Ruler, HardHat, BadgeCheck, Clock, Gift } from 'lucide-react';
import Reveal from './Reveal';
import { DIFFERENTIALS } from '@/config/content';

const ICONS = { ShieldCheck, Ruler, HardHat, BadgeCheck, Clock, Gift };

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[80rem] px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Por que nos escolher
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Cada detalhe pensado para a sua tranquilidade
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((d, i) => {
            const Icon = ICONS[d.icon] || ShieldCheck;
            return (
              <Reveal key={d.title} delay={(i % 3) * 0.08} className="bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-serif-display text-xl font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Reveal from './Reveal';
import { STATS, IMG } from '@/config/content';

export default function About() {
  return (
    <section id="sobre" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-[80rem] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={IMG.cnc}
              alt="Corte de mármore com máquina CNC de precisão"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-sm bg-[hsl(var(--graphite))] px-7 py-5 text-white shadow-xl sm:block">
            <p className="font-serif-display text-3xl font-semibold text-gold">Desde 2009</p>
            <p className="text-sm text-white/70">gerando ambientes memoráveis</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              Sobre a empresa
            </span>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Uma tradição em pedras naturais, feita à mão e com precisão de engenharia
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Há mais de 15 anos selecionamos as melhores chapas de mármore, granito,
              quartzo e quartzito para dar vida a projetos residenciais e comerciais.
              Unimos o cuidado artesanal ao corte CNC de alta precisão para entregar
              acabamentos impecáveis.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nossa missão é transformar cada ambiente em uma obra de arte durável,
              com material de procedência garantida, instalação própria e um pós-venda
              que você pode confiar.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="bg-card p-5 text-center">
                <p className="font-serif-display text-3xl font-semibold text-foreground">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

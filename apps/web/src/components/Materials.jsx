import React from 'react';
import Reveal from './Reveal';
import { MATERIALS } from '@/config/content';

export default function Materials() {
  return (
    <section id="produtos" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-[80rem] px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Produtos e materiais
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Pedras nobres para cada tipo de projeto
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trabalhamos com uma seleção premium de materiais nacionais e importados.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MATERIALS.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="group h-full overflow-hidden rounded-sm bg-card shadow-sm ring-1 ring-border transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={m.img}
                    alt={`Chapa de ${m.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif-display text-xl font-semibold text-foreground">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {m.uses.map((u) => (
                      <span key={u} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Share2, MessageCircle, Facebook } from 'lucide-react';
import Reveal from './Reveal';
import { GALLERY } from '@/config/content';

const CATS = ['Todos', 'Cozinhas', 'Banheiros', 'Fachadas'];

export default function Gallery() {
  const [filter, setFilter] = useState('Todos');
  const [active, setActive] = useState(null);

  const items = filter === 'Todos' ? GALLERY : GALLERY.filter((g) => g.cat === filter);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareWhats = (title) =>
    `https://wa.me/?text=${encodeURIComponent(`Veja este projeto: ${title} — ${shareUrl}`)}`;
  const shareFb = () =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  const go = (dir) => {
    if (active === null) return;
    const next = (active + dir + items.length) % items.length;
    setActive(next);
  };

  return (
    <section id="projetos" className="bg-[hsl(var(--graphite))] py-20 md:py-28">
      <div className="mx-auto max-w-[85rem] px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Portfólio
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold leading-tight text-white md:text-4xl">
            Projetos que falam por si
          </h2>
          <p className="mt-4 text-white/60">
            Uma seleção de ambientes que entregamos com material nobre e acabamento impecável.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-wrap justify-center gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? 'bg-gold text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.06}>
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-sm"
              >
                <img
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-medium uppercase tracking-wide text-gold">{g.cat}</span>
                  <span className="mt-0.5 font-serif-display text-lg text-white">{g.title}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-5 top-5 text-white/70 hover:text-white"
            onClick={() => setActive(null)}
            aria-label="Fechar"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white md:left-8"
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Anterior"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white md:right-8"
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Próximo"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[active].img}
              alt={items[active].title}
              className="max-h-[80vh] w-full rounded-sm object-contain"
            />
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-gold">{items[active].cat}</span>
                <p className="font-serif-display text-lg text-white">{items[active].title}</p>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Share2 className="h-4 w-4" />
                <a href={shareWhats(items[active].title)} target="_blank" rel="noreferrer" aria-label="Compartilhar no WhatsApp" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a href={shareFb()} target="_blank" rel="noreferrer" aria-label="Compartilhar no Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

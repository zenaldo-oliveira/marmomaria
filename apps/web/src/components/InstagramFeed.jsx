import React from 'react';
import { Instagram } from 'lucide-react';
import Reveal from './Reveal';
import { IMG } from '@/config/content';
import { SOCIAL } from '@/config/contact';

const POSTS = [IMG.hero, IMG.bathroom, IMG.gourmet, IMG.stairs, IMG.living, IMG.facade];

export default function InstagramFeed() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-[85rem] px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            {SOCIAL.instagramHandle}
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Siga-nos no Instagram
          </h2>
          <p className="mt-4 text-muted-foreground">
            Inspiração diária em pedras naturais e projetos exclusivos.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-6">
          {POSTS.map((src, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05}>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-sm"
              >
                <img
                  src={src}
                  alt="Publicação no Instagram"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <Instagram className="h-7 w-7 text-white" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-9 text-center">
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <Instagram className="h-4 w-4" /> Ver perfil completo
          </a>
        </div>
      </div>
    </section>
  );
}

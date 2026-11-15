import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import Reveal from './Reveal';
import { PROJECT_TYPES } from '@/config/content';
import { CONTACT, buildWhatsappLink, getUtmParams, trackLead } from '@/config/contact';
import apiServerClient from '@/lib/apiServerClient';

const EMPTY = { nome: '', telefone: '', email: '', tipo: '', mensagem: '' };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const err = {};
    if (!form.nome.trim()) err.nome = 'Informe seu nome.';
    if (!form.telefone.trim() || form.telefone.replace(/\D/g, '').length < 10)
      err.telefone = 'Informe um telefone válido.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = 'E-mail inválido.';
    if (!form.tipo) err.tipo = 'Selecione o tipo de projeto.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await apiServerClient.fetch('/orcamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, utm: getUtmParams() }),
      });
      if (!res.ok) throw new Error('Falha no envio');
      trackLead('form_orcamento');
      setStatus('success');
      setForm(EMPTY);
    } catch (_) {
      setStatus('error');
    }
  };

  const wa = buildWhatsappLink('Olá! Gostaria de conversar sobre um orçamento.');

  return (
    <section id="contato" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-[80rem] gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Solicite seu orçamento
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Vamos dar vida ao seu projeto
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preencha o formulário e nossa equipe entra em contato. Orçamento e visita
            técnica gratuitos e sem compromisso.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`tel:${CONTACT.phoneHref}`} className="flex items-center gap-3 text-foreground hover:text-gold">
              <Phone className="h-5 w-5 text-gold" /> {CONTACT.phoneDisplay}
            </a>
            <a href={wa} target="_blank" rel="noreferrer" onClick={() => trackLead('whatsapp_contact')} className="flex items-center gap-3 text-foreground hover:text-gold">
              <MessageCircle className="h-5 w-5 text-gold" /> Fale no WhatsApp
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-foreground hover:text-gold">
              <Mail className="h-5 w-5 text-gold" /> {CONTACT.email}
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-gold" /> {CONTACT.address}
            </p>
            <p className="flex items-center gap-3 text-muted-foreground">
              <Clock className="h-5 w-5 text-gold" /> {CONTACT.hours}
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-sm border border-border">
            <iframe
              title="Localização"
              src={CONTACT.mapsEmbed}
              width="100%"
              height="240"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-6 shadow-sm md:p-8" noValidate>
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <CheckCircle2 className="h-14 w-14 text-gold" />
                <h3 className="mt-4 font-serif-display text-2xl font-semibold text-foreground">Solicitação enviada!</h3>
                <p className="mt-2 text-muted-foreground">
                  Recebemos seu pedido e entraremos em contato em breve.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="mt-6 text-sm font-semibold text-gold hover:underline">
                  Enviar outra solicitação
                </button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <Field label="Nome completo" error={errors.nome}>
                  <input value={form.nome} onChange={set('nome')} className="input" placeholder="Seu nome" />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Telefone / WhatsApp" error={errors.telefone}>
                    <input value={form.telefone} onChange={set('telefone')} className="input" placeholder="(11) 90000-0000" />
                  </Field>
                  <Field label="E-mail" error={errors.email}>
                    <input value={form.email} onChange={set('email')} className="input" placeholder="voce@email.com" />
                  </Field>
                </div>
                <Field label="Tipo de projeto" error={errors.tipo}>
                  <select value={form.tipo} onChange={set('tipo')} className="input">
                    <option value="">Selecione...</option>
                    {PROJECT_TYPES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Detalhes do projeto">
                  <textarea value={form.mensagem} onChange={set('mensagem')} rows={4} className="input resize-none" placeholder="Conte-nos medidas, ambiente, prazo..." />
                </Field>

                {status === 'error' && (
                  <p className="flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4" /> Ocorreu um erro. Tente novamente ou fale no WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-base font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="h-5 w-5 animate-spin" /> Enviando...</>
                  ) : (
                    'Enviar solicitação'
                  )}
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
      {error && <span className="text-xs text-destructive">{error}</span>}
    </label>
  );
}

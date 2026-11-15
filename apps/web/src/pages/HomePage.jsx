import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Materials from '@/components/Materials';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Differentials from '@/components/Differentials';
import Testimonials from '@/components/Testimonials';
import InstagramFeed from '@/components/InstagramFeed';
import ContactForm from '@/components/ContactForm';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';
import { BRAND } from '@/config/contact';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>{BRAND.name} — Mármores e Granitos de Alto Padrão</title>
        <meta
          name="description"
          content="Marmoraria especializada em mármore, granito, quartzo e quartzito. Bancadas, pias, revestimentos e fachadas com corte de precisão e acabamento premium. Orçamento grátis."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${BRAND.name} — Mármores e Granitos de Alto Padrão`} />
        <meta property="og:description" content="Bancadas, pias, revestimentos e fachadas em mármore e granito com acabamento premium." />
        <meta property="og:image" content="https://images.hostinger.com/96f14871-10ad-4c19-b58d-b473a03234ef.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Materials />
        <Services />
        <Gallery />
        <Differentials />
        <Testimonials />
        <InstagramFeed />
        <ContactForm />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
};

export default HomePage;

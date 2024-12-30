import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/sections/Stats';
import { Testimonials } from './components/sections/Testimonials';
import { HowItWorks } from './components/sections/HowItWorks';
import { Social } from './components/Social';
import { Contact } from './components/Contact';
import './styles/animations.css';
import './styles/typography.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1b1e] font-body">
      <Header />
      <div className="pt-16">
        <Hero />
        <Features />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <Social />
        <Contact />
      </div>
    </div>
  );
}